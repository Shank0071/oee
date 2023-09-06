"use client";

import { useEffect } from "react";
import { Chart } from "chart.js";
import { useMonth } from "@/hooks/useMonth";

function Example() {
  const { sums: Jan } = useMonth("2023-01-01", "2023-01-31");
  const { sums: Feb } = useMonth("2023-02-01", "2023-02-28");
  const { sums: Mar } = useMonth("2023-03-01", "2023-03-31");
  const { sums: Apr } = useMonth("2023-04-01", "2023-04-30");
  const { sums: May } = useMonth("2023-05-01", "2023-05-31");
  const { sums: Jun } = useMonth("2023-06-01", "2023-06-30");
  const { sums: Jul } = useMonth("2023-07-01", "2023-07-31");
  const { sums: Aug } = useMonth("2023-08-01", "2023-08-31");
  const { sums: Sep } = useMonth("2023-09-01", "2023-09-30");
  const { sums: Oct } = useMonth("2023-10-01", "2023-10-31");
  const { sums: Nov } = useMonth("2023-11-01", "2023-11-30");
  const { sums: Dec } = useMonth("2023-12-01", "2023-12-31");

  const janArr = [
    Jan.avgAvail === "NaN" ? 0 : Number(Jan.avgAvail),
    Jan.avgPerf === "NaN" ? 0 : Number(Jan.avgPerf),
    Jan.avgQual === "NaN" ? 0 : Number(Jan.avgQual),
    Jan.avgOee === "NaN" ? 0 : Number(Jan.avgOee),
  ];
  const febArr = [
    Feb.avgAvail === "NaN" ? 0 : Number(Feb.avgAvail),
    Feb.avgPerf === "NaN" ? 0 : Number(Feb.avgPerf),
    Feb.avgQual === "NaN" ? 0 : Number(Feb.avgQual),
    Feb.avgOee === "NaN" ? 0 : Number(Feb.avgOee),
  ];
  const marArr = [
    Mar.avgAvail === "NaN" ? 0 : Number(Mar.avgAvail),
    Mar.avgPerf === "NaN" ? 0 : Number(Mar.avgPerf),
    Mar.avgQual === "NaN" ? 0 : Number(Mar.avgQual),
    Mar.avgOee === "NaN" ? 0 : Number(Mar.avgOee),
  ];
  const aprArr = [
    Apr.avgAvail === "NaN" ? 0 : Number(Apr.avgAvail),
    Apr.avgPerf === "NaN" ? 0 : Number(Apr.avgPerf),
    Apr.avgQual === "NaN" ? 0 : Number(Apr.avgQual),
    Apr.avgOee === "NaN" ? 0 : Number(Apr.avgOee),
  ];
  const mayArr = [
    May.avgAvail === "NaN" ? 0 : Number(May.avgAvail),
    May.avgPerf === "NaN" ? 0 : Number(May.avgPerf),
    May.avgQual === "NaN" ? 0 : Number(May.avgQual),
    May.avgOee === "NaN" ? 0 : Number(May.avgOee),
  ];
  const junArr = [
    Jun.avgAvail === "NaN" ? 0 : Number(Jun.avgAvail),
    Jun.avgPerf === "NaN" ? 0 : Number(Jun.avgPerf),
    Jun.avgQual === "NaN" ? 0 : Number(Jun.avgQual),
    Jun.avgOee === "NaN" ? 0 : Number(Jun.avgOee),
  ];
  const julArr = [
    Jul.avgAvail === "NaN" ? 0 : Number(Jul.avgAvail),
    Jul.avgPerf === "NaN" ? 0 : Number(Jul.avgPerf),
    Jul.avgQual === "NaN" ? 0 : Number(Jul.avgQual),
    Jul.avgOee === "NaN" ? 0 : Number(Jul.avgOee),
  ];
  const augArr = [
    Aug.avgAvail === "NaN" ? 0 : Number(Aug.avgAvail),
    Aug.avgPerf === "NaN" ? 0 : Number(Aug.avgPerf),
    Aug.avgQual === "NaN" ? 0 : Number(Aug.avgQual),
    Aug.avgOee === "NaN" ? 0 : Number(Aug.avgOee),
  ];
  const sepArr = [
    Sep.avgAvail === "NaN" ? 0 : Number(Sep.avgAvail),
    Sep.avgPerf === "NaN" ? 0 : Number(Sep.avgPerf),
    Sep.avgQual === "NaN" ? 0 : Number(Sep.avgQual),
    Sep.avgOee === "NaN" ? 0 : Number(Sep.avgOee),
  ];
  const octArr = [
    Oct.avgAvail === "NaN" ? 0 : Number(Oct.avgAvail),
    Oct.avgPerf === "NaN" ? 0 : Number(Oct.avgPerf),
    Oct.avgQual === "NaN" ? 0 : Number(Oct.avgQual),
    Oct.avgOee === "NaN" ? 0 : Number(Oct.avgOee),
  ];
  const novArr = [
    Nov.avgAvail === "NaN" ? 0 : Number(Nov.avgAvail),
    Nov.avgPerf === "NaN" ? 0 : Number(Nov.avgPerf),
    Nov.avgQual === "NaN" ? 0 : Number(Nov.avgQual),
    Nov.avgOee === "NaN" ? 0 : Number(Nov.avgOee),
  ];
  const decArr = [
    Dec.avgAvail === "NaN" ? 0 : Number(Dec.avgAvail),
    Dec.avgPerf === "NaN" ? 0 : Number(Dec.avgPerf),
    Dec.avgQual === "NaN" ? 0 : Number(Dec.avgQual),
    Dec.avgOee === "NaN" ? 0 : Number(Dec.avgOee),
  ];

  console.log(junArr);
  useEffect(() => {
    var ctx = document.getElementById("myChart").getContext("2d");
    var myChart = new Chart(ctx, {
      type: "bar",
      data: {
        labels: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
        ],
        datasets: [
          {
            data: [
              janArr[0],
              febArr[0],
              marArr[0],
              aprArr[0],
              mayArr[0],
              junArr[0],
              julArr[0],
              augArr[0],
              sepArr[0],
              octArr[0],
              novArr[0],
              decArr[0],
            ],
            label: "Availability",
            borderColor: "rgb(109, 253, 181)",
            backgroundColor: "rgb(109, 253, 181,0.5)",
            borderWidth: 2,
          },
          {
            data: [
                janArr[1],
                febArr[1],
                marArr[1],
                aprArr[1],
                mayArr[1],
                junArr[1],
                julArr[1],
                augArr[1],
                sepArr[1],
                octArr[1],
                novArr[1],
                decArr[1],
              ],
            label: "Performance",
            borderColor: "rgb(75, 192, 192)",
            backgroundColor: "rgb(75, 192, 192,0.5)",
            borderWidth: 2,
          },
          {
            data: [
                janArr[2],
                febArr[2],
                marArr[2],
                aprArr[2],
                mayArr[2],
                junArr[2],
                julArr[2],
                augArr[2],
                sepArr[2],
                octArr[2],
                novArr[2],
                decArr[2],
              ],
            label: "Quality",
            borderColor: "rgb(255, 205, 86)",
            backgroundColor: "rgb(255, 205, 86,0.5)",
            borderWidth: 2,
          },
          {
            data: [
                janArr[3],
                febArr[3],
                marArr[3],
                aprArr[3],
                mayArr[3],
                junArr[3],
                julArr[3],
                augArr[3],
                sepArr[3],
                octArr[3],
                novArr[3],
                decArr[3],
              ],
            label: "Oee",
            borderColor: "rgb(255, 99, 132)",
            backgroundColor: "rgb(255, 99, 132,0.5)",
            borderWidth: 2,
          },
        ],
      },
    });
  }, [junArr]);

  return (
    <>
      {/* Bar chart */}
      <h1 className="w-[150px] mx-auto mt-10 text-xl font-semibold capitalize ">
        Bar Chart
      </h1>
      <div className="w-[1100px] h-screen flex mx-auto my-auto">
        <div className="border border-gray-400 pt-0 rounded-xl  w-full h-fit my-auto  shadow-xl">
          <canvas id="myChart"></canvas>
        </div>
      </div>
      <h3 className="p-2 rounded-md bg-green-400 text-white hover:cursor-pointer w-fit m-5" onClick={() => window.print()}>Print</h3>
    </>
  );
}

export default Example;
