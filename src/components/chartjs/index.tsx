import React from "react";
import ChartComponent from "src/components/chartjs/Chart";

export const Chart: React.FC = () => {
  const chartFemale = [12, 20, 15, 24, 25, 45];
  const chartMale = [10, 12, 18, 30, 20, 50];


  const chartLabels = ['<18 ປີ', '18-24 ປີ', '25-30 ປີ', '31-40 ປີ', '41-50 ', '51ປີ<'];

  return (
    <div className="flex gap-5 my-5">
      <div>
        <ChartComponent data_Male = {chartMale} data_Female={chartFemale} labels = {chartLabels} type="bar" />
      </div>
    </div>
  );
};

export default Chart;
