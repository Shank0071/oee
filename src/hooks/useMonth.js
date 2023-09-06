import { useState, useEffect } from 'react';

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

export const useMonth = (date1, date2) => {
  const [sums, setSums] = useState({})

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
  
  useEffect(() => {
    getData()
  }, [])



  return {
    sums
  };
};
