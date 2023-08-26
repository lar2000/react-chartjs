import React from "react";
import ChartComponent from "@components/pp-session/line";
import data from 'src/data.json';


const sessionData = data.sessionData;

export const Line: React.FC = () => {
    
//   const chartFemale = [12, 20, 15, 24, 25, 45,12, 18, 30, 20];
//   const chartMale = [8, 12, 28, 30, 20, 50, 24, 25, 45,12];
//   const chartLabels = ['ງວດທີ1', 'ງວດທີ2', 'ງວດທີ3', 'ງວດທີ4', 'ງວດທີ5', 'ງວດທີ6', 'ງວດທີ7', 'ງວດທີ8', 'ງວດທີ9', 'ງວດທີ10'];
  return (
    <div className="flex gap-5 my-5">
      <div>
        <ChartComponent 
        data_Male = {sessionData.chartData.male} 
        data_Female={sessionData.chartData.female} 
        labels = {sessionData.chartLabels} 
        type="line"
         />
      </div>
    </div>
  );
};

export default Line;