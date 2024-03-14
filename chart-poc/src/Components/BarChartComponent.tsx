import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Tooltip } from "recharts";

const ageData = [
  {
    name: "18-24",
    pv: 32,
  },
  {
    name: "25-34",
    pv: 21,
  },
  {
    name: "35-44",
    pv: 30,
  },
  {
    name: "45-54",
    pv: 16,
  },
  {
    name: "55-64",
    pv: 11,
  },
  {
    name: "65+",
    pv: 8,
  },
];

const BarChartComponent = () => {
  return (
    <div style={{ width: "100%", height: 300, gridColumn: "1/3" }}>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={ageData} barGap={200} barSize={53}>
          <CartesianGrid strokeDasharray="0 0" vertical={false} strokeOpacity={0.3} />
          <XAxis dataKey="name" tick={{ fontSize: 12 }} padding={{ left: 50, right: 50 }} />
          <YAxis />
          <Tooltip
            contentStyle={{ backgroundColor: "#2D00B8", color: "#fff" }}
            cursor={{ fill: "none" }}
            wrapperStyle={{ backgroundColor: "transparent" }}
            itemStyle={{ color: "#fff" }}
            labelStyle={{ color: "#fff" }}
            formatter={(value: string) => [`${value}%`, ""]}
          />
          <Bar dataKey="pv" stackId="a" fill="#2D00B8" activeBar={{ fill: "#A85CF9" }} radius={8} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default BarChartComponent;
