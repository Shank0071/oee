"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";

const daysOfWeek = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const availability = (tpt, nut) => {
  const avail = (tpt - nut) / tpt;
  return avail;
};

const performance = (tp, irr, op_t) => {
  const perf = tp / op_t / irr;
  return perf;
};

const quality = (tp, dp) => {
  const q = (tp - dp) / tp;
  return q;
};

const oee = (avail, perf, qual) => {
  return avail * perf * qual * 100;
};

const Daily = () => {
  const [date, setDate] = useState("");
  const [sums, setSums] = useState({});

  const getData = async () => {
    const response = await fetch(
      `http://localhost:8080/record/${date}/${date}`
    );
    const data = await response.json();
    const result = [];
    data.records.map((r) => {
      let avail = availability(456, r.NUT);
      let perf = performance(r.production/2, 0.74, 456 - r.NUT);
      let qual = quality(r.production, r.defect);
      let o = oee(avail, perf, qual);
      result.push({ avail, perf, qual, o });
    });
    console.log(result);
    let sums;
    let totalAvail = 0;
    let totalPerf = 0;
    let totalQual = 0;
    let totalOee = 0;
    result.map((r) => {
      totalAvail += r.avail;
      totalPerf += r.perf;
      totalQual += r.qual;
      totalOee += r.o;
    });
    sums = {
      avgAvail: ((totalAvail / 2) * 100).toFixed(2),
      avgPerf: ((totalPerf / 2) * 100).toFixed(2),
      avgQual: ((totalQual / 2) * 100).toFixed(2),
      avgOee: (totalOee / 2).toFixed(2),
    };
    console.log(sums);
    setSums(sums);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    getData();
    setDate(date);
  };

  return (
    <div className="flex flex-col min-h-screen bg-slate-100 justify-center items-center gap-14">
      <form onSubmit={handleSubmit} className="flex gap-5 mt-[-100px]">
        <label className="flex gap-2 items-center">
          <span className="font-bold text-2xl">Date:</span>
          <input
            type="date"
            className="p-2 rounded-md shadow-md"
            onChange={(e) => setDate(e.target.value)}
            value={date}
          />
        </label>
        <button className="p-2 bg-green-400 shadow-md cursor-pointer text-white rounded-md">
          Get Data
        </button>
      </form>
      <div className="p-5 rounded-md bg bg-slate-300 shadow-md flex flex-col gap-4">
        <div>
          {date && (
            <p className="font-bold">
              {date} - {daysOfWeek[new Date(date).getDay()]}
            </p>
          )}
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex justify-between">
            <p className="font-bold">OEE:</p>
            {sums && sums.avgOee && <p>{sums.avgOee}%</p>}
          </div>
          <div className="flex justify-between">
            <p className="font-bold">Availability:</p>
            {sums && sums.avgAvail && <p>{sums.avgAvail}%</p>}
          </div>
          <div className="flex justify-between">
            <p className="font-bold">Performance:</p>
            {sums && sums.avgPerf && <p>{sums.avgPerf}%</p>}
          </div>
          <div className="flex justify-between">
            <p className="font-bold">Quality:</p>
            {sums && sums.avgQual && <p>{sums.avgQual}%</p>}
          </div>
        </div>
      </div>
      <h3
        className="p-2 rounded-md bg-green-400 text-white hover:cursor-pointer"
        onClick={() => window.print()}
      >
        Print
      </h3>
    </div>
  );
};

export default Daily;
