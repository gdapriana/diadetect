import { Pie } from "react-chartjs-2";

const PieChart = ({ result }: { result: { value: number } }) => {
  return (
    <Pie
      data={{
        labels: ["Posible Diabetes", "Not Posible"],
        datasets: [
          {
            label: "Percentage",
            data: [result.value, 1 - result.value],
            backgroundColor: ["rgb(38,38,38)", "rgb(244,244,244)"],
            hoverOffset: 4,
          },
        ],
      }}
    />
  );
};

export default PieChart;
