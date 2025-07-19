import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

// Register chart components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

// Configuration for horizontal bar chart
export const options = {
  responsive: true,
  indexAxis: "y", // 🔥 This makes the bar chart horizontal
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Holdings (Horizontal Bar Chart)",
    },
  },
};

export function VerticalGraph({ data }) {
  return <Bar options={options} data={data} />;
}
