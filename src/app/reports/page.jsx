import React from "react";
import Link from "next/link";

const Reports = () => {
  return (
    <div className="flex min-h-screen bg-slate-100 justify-center items-center">
      <div className="flex flex-col gap-3">
        <Link href="/reports/shift" className="p-4 bg-white rounded-md font-bold text-2xl shadow-sm hover:scale-x-105">Shift Report</Link>
        <Link href="/reports/daily" className="p-4 bg-slate-200 rounded-md font-bold text-2xl shadow-sm hover:scale-x-105">Daily Report</Link>
        {/* <Link href="/reports/weekly" className="p-4 bg-slate-300 rounded-md font-bold text-2xl shadow-sm hover:scale-x-105">Weekly Report</Link> */}
        <Link href="/reports/monthly" className="p-4 bg-slate-400 rounded-md font-bold text-2xl shadow-sm hover:scale-x-105">Monthly Report</Link>
      </div>
    </div>
  );
};

export default Reports;
