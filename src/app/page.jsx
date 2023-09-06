"use client";

import { useState } from "react";

export default function Home() {
  const [nut, setNut] = useState(0);
  const [tpp, setTpp] = useState(0);
  const [dp, setDp] = useState(0);
  const [operator, setOperator] = useState("");
  const [shift, setShift] = useState(1);
  const [access, setAccess] = useState("");
  const date = new Date().toISOString().split('T')[0]

  const getData = async () => {
    const response = await fetch(
      `http://localhost:8080/record/${date}/${date}`
    );
    const data = await response.json();
    console.log("data", data)
    console.log("data length: ", data.records.length)
    return data.records.length
    };




  const postData = async () => {
    const len = await getData()
    if (len <= 1) {
      fetch("http://localhost:8080/record", {
        method: "POST",
        body: JSON.stringify({
          NUT: nut,
          production: tpp,
          defect: dp,
          operator,
          shift,
          access_key: access
        }),
        headers: {
          "content-type": "application/json",
        },
      }).catch(err => console.log(`an error occurred ${err}`))
      alert("added")
    } else {
      alert("Already records of two shifts added")
    }
  
    }
   
  const handleSubmit = async (e) => {
    e.preventDefault()
    postData()
  }



  return (
    <div className="flex flex-col min-h-screen bg-slate-100 justify-center items-center">
      <h1 className="font-bold text-5xl text-slate-800 mb-14">Machine</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-3 p-4 rounded-md bg-red-700 text-white shadow-md">
       <label className="flex justify-between">
        <span className="font-bold">Non-Utilized Time:</span>
        <input className="text-black" type="number" placeholder="  in mins..." onChange={(e) => setNut(e.target.value)} />
       </label>
       <label className="flex justify-between">
        <span className="mr-4 font-bold">Total Parts Production:</span>
        <input className="text-black" type="number" onChange={(e) => setTpp(e.target.value)} />
       </label>
       <label className="flex justify-between">
        <span className="font-bold">Defect Parts:</span>
        <input className="text-black" type="number" onChange={(e) => setDp(e.target.value)} />
       </label>
       <label className="flex justify-between">
        <span className="font-bold">Operator Name:</span>
        <input className="text-black" type="text" onChange={(e) => setOperator(e.target.value)} />
       </label>
       <label className="flex justify-between">
        <span className="font-bold">Shift Number:</span>
        <input className="text-black" type="number" onChange={(e) => setShift(e.target.value)} />
       </label>
       <label className="flex justify-between">
        <span className="font-bold">Access Key:</span>
        <input className="text-black" type="text" onChange={(e) => setAccess(e.target.value)} />
       </label>
       <button className="py-2 px-4 mt-7 font-bold self-center text-white bg-black rounded-md w-max">Calculate</button>
      </form>
    </div>
  );
}
