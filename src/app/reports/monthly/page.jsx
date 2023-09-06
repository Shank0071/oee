"use client";

import React, { useState } from "react";

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
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

const Monthly = () => {
  const [date1, setDate1] = useState("");
  const [date2, setDate2] = useState("");
  const [sums, setSums] = useState({});

  const getData = async () => {
    const response = await fetch(
      `http://localhost:8080/record/${date1}/${date2}`
    );
    const data = await response.json();
    const result = [];
    data.records.map((r) => {
      let avail = availability(456, r.NUT);
      let perf = performance(r.production / 2, 0.74, 456 - r.NUT);
      let qual = quality(r.production, r.defect);
      let o = oee(avail, perf, qual);
      result.push({ avail, perf, qual, o });
    });
    console.log(result);
    let sums;
    let tot = 0;
    let totalAvail = 0;
    let totalPerf = 0;
    let totalQual = 0;
    let totalOee = 0;
    result.map((r) => {
      totalAvail += r.avail;
      totalPerf += r.perf;
      totalQual += r.qual;
      totalOee += r.o;
      tot += 1
    });
    sums = {
      avgAvail: ((totalAvail / tot) * 100).toFixed(2),
      avgPerf: ((totalPerf / tot) * 100).toFixed(2),
      avgQual: ((totalQual / tot) * 100).toFixed(2),
      avgOee: (totalOee / tot).toFixed(2),
      total: tot
    };
    console.log(sums);
    setSums(sums);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    getData();
    setDate1(date1)
    setDate2(date2)
  };

  return (
    <div className="flex flex-col min-h-screen bg-slate-100 justify-center items-center gap-14">
      <form onSubmit={handleSubmit} className="flex gap-5 mt-[-100px]">
        <label className="flex gap-2 items-center">
          <span className="font-bold text-2xl">From:</span>
          <input
            type="date"
            className="p-2 rounded-md shadow-md"
            onChange={(e) => setDate1(e.target.value)}
            value={date1}
          />
        </label>
        <label className="flex gap-2 items-center">
          <span className="font-bold text-2xl">To:</span>
          <input
            type="date"
            className="p-2 rounded-md shadow-md"
            onChange={(e) => setDate2(e.target.value)}
            value={date2}
          />
        </label>
        <button className="p-2 bg-green-400 shadow-md cursor-pointer text-white rounded-md">
          Get Data
        </button>
      </form>
      <div className="p-5 rounded-md bg bg-slate-300 shadow-md flex flex-col gap-4">
        <div className="text-center">
          {date1 && <p className="font-bold">{months[(new Date(date1).getDay())+1]}</p>}
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
            <p className="font-bold mr-2">Performance:</p>
            {sums && sums.avgPerf && <p>{sums.avgPerf}%</p>}
          </div>
          <div className="flex justify-between">
            <p className="font-bold">Quality:</p>
            {sums && sums.avgQual && <p>{sums.avgQual}%</p>}
          </div>
        </div>
      </div>
      <h3 className="p-2 rounded-md bg-green-400 text-white hover:cursor-pointer" onClick={() => window.print()}>Print</h3>
    </div>
  );
};

export default Monthly;
