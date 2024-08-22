import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Register the components with Chart.js
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const BarChart = () => {
  const data = {
    labels: [
      "April",
      "May",
      "June",
      "July",
      "Aug",
      "Sept",
      "Oct",
      "Nov",
      "Dec",
    ],
    datasets: [
      {
        label: "",
        data: [450, 200, 100, 220, 500, 100, 400, 230, 500],
        tension: 0.4,
        backgroundColor: "rgba(255, 255, 255, 1)", // Customize the bar color
        borderColor: "rgba(33, 82, 255, 1)",
        borderWidth: 0,
        borderRadius: 4,
        borderSkipped: false,
        maxBarThickness: 6,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      interaction: {
        intersect: false,
        mode: "index",
      },
      title: {
        display: true,
        text: "",
      },
    },
    scales: {
      y: {
        grid: {
          drawBorder: false,
          display: false,
          drawOnChartArea: false,
          drawTicks: false,
        },
        ticks: {
          suggestedMin: 0,
          suggestedMax: 500,
          beginAtZero: true,
          padding: 15,
          font: {
            size: 14,
            family: "Roboto",
            style: "normal",
            lineHeight: 2,
          },
          color: "#fff",
          stepSize: 200, // Set the interval between ticks
          callback: function (value) {
            if (value === 0 || value === 200 || value === 400) {
              return value; // Only show 0, 200, 400
            }
            return null; // Hide other values
          },
        },
      },
      x: {
        grid: {
          drawBorder: false,
          display: false,
          drawOnChartArea: false,
          drawTicks: false,
        },
        ticks: {
          display: false,
        },
      },
    },
  };

  return <Bar data={data} options={options} />;
};

export default BarChart;
// options: {
//     responsive: true,
//     maintainAspectRatio: false,
//     plugins: {
//       legend: {
//         display: false,
//       },
//     },
//     interaction: {
//       intersect: false,
//       mode: "index",
//     },
//     scales: {
//       y: {
//         grid: {
//           drawBorder: false,
//           display: false,
//           drawOnChartArea: false,
//           drawTicks: false,
//         },
//         ticks: {
//           suggestedMin: 0,
//           suggestedMax: 500,
//           beginAtZero: true,
//           padding: 15,
//           font: {
//             size: 14,
//             family: "Roboto",
//             style: "normal",
//             lineHeight: 2,
//           },
//           color: "#fff",
//         },
//       },
//       x: {
//         grid: {
//           drawBorder: false,
//           display: false,
//           drawOnChartArea: false,
//           drawTicks: false,
//         },
//         ticks: {
//           display: false,
//         },
//       },
//     },
//   },
