import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

interface ChartProps {
  data_Male: number[];
  data_Female: number[];
  labels: string[];
  type: "bar" | "line" | "pie";
}

const ChartComponent: React.FC<ChartProps> = ({ data_Male, data_Female, labels, type }) => {

const chartRef = useRef<HTMLCanvasElement | null>(null);
const chartInstanceRef = useRef<Chart<"bar" | "line" | "pie"> | null>(null);

const footer = (tooltipItems: any[]) => {
  let sum = 0;

  tooltipItems.forEach(function(tooltipItem) {
    sum += tooltipItem.parsed.y;
  });
  return 'ຜູ້ເຂົ້າຮ່ວມທັງໝົດ: ' + sum;
};

  useEffect(() => {
    if (chartRef.current) {
      const ctx = chartRef.current.getContext("2d");
      if (ctx) {
        if (chartInstanceRef.current) {
          chartInstanceRef.current.destroy();
        }

        chartInstanceRef.current = new Chart<"bar" | "line" | "pie">(ctx, {
          type: type,
          data: {
            labels: labels,
            datasets: [
              {
                label: "ຊາຍ",
                data: data_Female,
                fill: false,
                backgroundColor: ["rgba(255, 50, 50, 0.8)"],
                borderColor: ["rgba(255, 50, 50, 2)"],
                borderWidth: 1,
              },
              {
                label: "ຍິງ",
                data: data_Male,
                fill: false,
                backgroundColor: ["rgba(54, 162, 235, 0.8)"],
                borderColor: ["rgba(54, 162, 235, 2)"],
                borderWidth: 1,
              },
            ],
          },
          options: {
            plugins: {
            //   title: {
            //     display: true,
            //     text: `ຜູ້ເຂົ້າຮ່ວມທັງໝົດ: ${total3} ຄົນ`,
            //   },
            tooltip: {
              callbacks: {
                footer: footer,
              }
            },
              legend: {
                display: true,
                position: "top",
              },
            },
            scales: {
              x: { title: { text: "ງວດ", display: true } },
              y: { title: { text: "Amount", display: true } },
            },
          },
        });
      }
    }

    return () => {
      if (chartInstanceRef.current) {
        chartInstanceRef.current.destroy();
      }
    };
  }, [data_Male, data_Female, labels, type]);

  return (
    <canvas
  className="bg-white rounded border border-gray-400"
  ref={chartRef}
  width={50} 
  height={500} 
  style={{ maxWidth: "50%", maxHeight: "100%" }} 
/>
  );
};

export default ChartComponent;