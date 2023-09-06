import React from "react";

const Weekly = () => {
  return (
    <div className="flex flex-col min-h-screen bg-slate-100 justify-center items-center text-xl gap-14">
      <div className="flex gap-14">
        <div className="p-4 bg-slate-100 shadow-md rounded-md flex flex-col gap-2">
          <h3 className="font-bold">WEEK-1</h3>
          <div>
            <p>OEE:</p>
            <p>Availabitlity:</p>
            <p>Performance:</p>
            <p>Quality</p>
          </div>
        </div>
        <div className="p-4 bg-slate-300 shadow-md rounded-md flex flex-col gap-2">
          <h3 className="font-bold">WEEK-2</h3>
          <div>
            <p>OEE:</p>
            <p>Availabitlity:</p>
            <p>Performance:</p>
            <p>Quality</p>
          </div>
        </div>
      </div>
      <div className="flex gap-14">
        <div className="p-4 bg-slate-300 shadow-md rounded-md flex flex-col gap-2">
          <h3 className="font-bold">WEEK-3</h3>
          <div>
            <p>OEE:</p>
            <p>Availabitlity:</p>
            <p>Performance:</p>
            <p>Quality</p>
          </div>
        </div>
        <div className="p-4 bg-slate-100 shadow-md rounded-md flex flex-col gap-2">
          <h3 className="font-bold">WEEK-4</h3>
          <div>
            <p>OEE:</p>
            <p>Availabitlity:</p>
            <p>Performance:</p>
            <p>Quality</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Weekly;
