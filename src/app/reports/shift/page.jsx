"use client";

import React, { useState } from "react";

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

const Shift = () => {
  const [date, setDate] = useState("");
  const [results, setResults] = useState([]);

  const getData = async () => {
    const response = await fetch(
      `http://localhost:8080/record/${date}/${date}`
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
    setResults(result);
  };

  console.log(results);

  const handleSubmit = (e) => {
    e.preventDefault();
    getData();
    setDate(date);
  };

  return (
    <div className="flex flex-col gap-20 min-h-screen bg-slate-100 justify-center items-center text-xl">
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
      <div className="flex gap-14">
        <div className="p-4 bg-slate-100 shadow-md rounded-md flex flex-col gap-2">
          <h3 className="font-bold mb-8 text-center">Shift-1</h3>
          <div className="flex flex-col gap-8">
            <div className="flex justify-between">
              <p className="font-bold">OEE:</p>
              {results && results[0] && <p>{results[0].o.toFixed(2)}%</p>}
            </div>
            <div className="flex justify-between">
              <p className="font-bold">Availability:</p>
              {results && results[0] && (
                <p>{(results[0].avail * 100).toFixed(2)}%</p>
              )}
            </div>
            <div className="flex justify-between">
              <p className="font-bold mr-8">Performance:</p>
              {results && results[0] && (
                <p>{(results[0].perf * 100).toFixed(2)}%</p>
              )}
            </div>
            <div className="flex justify-between">
              <p className="font-bold">Quality:</p>
              {results && results[0] && (
                <p>{(results[0].qual * 100).toFixed(2)}%</p>
              )}
            </div>
          </div>
        </div>
        <div className="p-4 bg-slate-400 shadow-md rounded-md flex flex-col gap-2">
          <h3 className="font-bold mb-8 text-center">Shift-2</h3>
          <div className="flex flex-col gap-8">
            <div className="flex justify-between">
              <p className="font-bold">OEE:</p>
              {results && results[1] && <p>{results[1].o.toFixed(2)}%</p>}
            </div>
            <div className="flex justify-between">
              <p className="font-bold">Availability:</p>
              {results && results[1] && (
                <p>{(results[1].avail * 100).toFixed(2)}%</p>
              )}
            </div>
            <div className="flex justify-between">
              <p className="font-bold mr-8">Performance:</p>
              {results && results[1] && (
                <p>{(results[1].perf * 100).toFixed(2)}%</p>
              )}
            </div>
            <div className="flex justify-between">
              <p className="font-bold">Quality:</p>
              {results && results[1] && (
                <p>{(results[1].qual * 100).toFixed(2)}%</p>
              )}
            </div>
          </div>
        </div>
      </div>
      <h3 className="p-2 rounded-md bg-green-400 text-white hover:cursor-pointer" onClick={() => window.print()}>Print</h3>
    </div>
  );
};

export default Shift;
