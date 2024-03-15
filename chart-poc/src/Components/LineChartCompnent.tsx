/* eslint-disable @typescript-eslint/no-explicit-any */
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ReferenceDot } from "recharts";


interface LineChartCompnentProps{
  data : any;
}

const LineChartComponent = ({data}:LineChartCompnentProps) => {
  const formatYAxis = (value: string) => {
    const valueInt = parseInt(value);
    if (valueInt > 1000) {
      return (valueInt / 1000).toString() + "k";
    }
    return value;
  };

  return (
    <div
      style={{
        width: 800,
        height: 300,
        paddingTop: "30px",
        border: "1px solid #E8E8E8",
        borderRadius: "24px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <ResponsiveContainer width="100%" height="100%">
        <LineChart width={600} height={300} data={data}>
          <CartesianGrid strokeDasharray="0 0" vertical={false} strokeOpacity={0.3} />
          <XAxis dataKey="name" tick={{ fontSize: 12 }} padding={{ left: 50, right: 50 }} />
          <YAxis yAxisId="left" tickFormatter={formatYAxis} />
          <Tooltip />
          <Line yAxisId="left" type="basis" dataKey="uv" stroke="#E2D8FF" strokeWidth={3} dot={false} />
          <Line yAxisId="left" type="basis" dataKey="pv" stroke="#2D00B8" strokeWidth={3} dot={false} />
          <Line yAxisId="left" type="basis" dataKey="amt" stroke="#2D00B8" strokeDasharray={"7 7"} strokeLinejoin="round" strokeWidth={3} dot={false} />
          <ReferenceDot x="May" y={22000} yAxisId="left" r={5} strokeWidth={3} stroke="#F4F0FF" fill="#2D00B8" isFront={true} />
        </LineChart>
      </ResponsiveContainer>
    </div>

  );
};

export default LineChartComponent;
