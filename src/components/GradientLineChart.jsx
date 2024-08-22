import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart,
  LineElement,
  PointElement,
  LinearScale,
  Title,
  CategoryScale,
} from "chart.js";

Chart.register(LineElement, PointElement, LinearScale, Title, CategoryScale);

const GradientLineChart = () => {
  const data = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
      {
        label: "Mobiles",
        data: [65, 59, 80, 81, 56, 55, 40], // Static dummy data
        fill: true,
        borderWidth: 3,
        backgroundColor: "rgba(75,192,192,0.2)",
        borderColor: "rgba(75,192,192,1)",
        tension: 0.4,
        pointRadius: 0,
      },
      {
        label: "Websites",
        data: [28, 48, 40, 19, 86, 27, 90], // Another set of dummy data
        fill: true,
        backgroundColor: "rgba(153,102,255,0.2)",
        borderColor: "rgba(153,102,255,1)",
        tension: 0.4,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
        position: "top",
      },
      title: {
        display: false,
        text: "Gradient Line Chart with Dummy Data",
      },
    },
    interaction: {
      intersect: false,
      mode: "index",
    },
    scales: {
      x: {
        ticks: {
          color: "rgba(0,0,0,0.25)", // Color for x-axis labels
        },
        grid: {
          color: "rgba(0, 0, 0, 0.1)", // Color for x-axis grid lines
        },
      },

      y: {
        beginAtZero: true,
        ticks: {
          color: "rgba(0,0,0,0.25)", // Color for y-axis labels
        },
        grid: {
          drawBorder: false,
          display: true,
          drawOnChartArea: true,
          drawTicks: false,
          borderDash: [5, 5],
          color: "rgba(0, 0, 0, 0.1)",
          // Color for y-axis grid lines
        },
      },
    },
  };

  return <Line data={data} options={options} className="w-[660px]" />;
};

export default GradientLineChart;
