import React from "react";
import moment from "moment";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer
} from "recharts";

const Chart = ({ sparklineData, darkMode }) => {
  const formattedData = sparklineData
    .map((price, idx) => {
      if (idx % 6 === 0) {
        const timeToSubtract = 168 - idx;
        const date = moment()
          .subtract(timeToSubtract, "hours")
          .format("ddd h:mma");
        return { value: price, date };
      } else if (idx === sparklineData.length - 1) {
        const date = moment().format("ddd h:mma");
        return { value: price, date };
      }
      return null;
    })
    .filter(data => data);

  return (
    <ResponsiveContainer aspect={2.8/1.0} >
      <LineChart width={1100} height={300} data={formattedData}>
        <Line type="monotone" dataKey="value" stroke="#8884d8" />
        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
        <XAxis dataKey="date" interval={3} />
        <YAxis />
        <Tooltip 
          contentStyle={darkMode ? {backgroundColor: 'slategray'}: null}
          itemStyle={darkMode ? {color: 'rgb(223, 183, 255)'}: null}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default Chart;
