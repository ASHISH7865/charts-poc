/* eslint-disable @typescript-eslint/no-explicit-any */
import { PieChart,  Tooltip, ResponsiveContainer, Pie, Cell } from "recharts";

const data02 = [
    { name: 'Group A', value: 9000 },
    { name: 'Group B', value: 170 },
    { name: 'Group C', value: 898 },
];

const COLORS = ['#2D00B8', '#A85CF9','#521AFF'];

const PieChartComponent = () => {
  
  return (
    <div style={{ width: "100%", height: 500 }}>
      <ResponsiveContainer width="100%" height="100%">
        <PieChart width={400} height={400}>
          <Pie dataKey="value" data={data02} innerRadius={100} stroke={"none"} outerRadius={150} fill="#2D00B8" >
            {data02.map((_entry, index) => (
                <Cell key={`cell-${index}`}  fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>

  );
};

export default  PieChartComponent;
