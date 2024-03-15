
import './App.css'
import BarChartComponent from './Components/BarChartComponent'
import GeoChartComponent from './Components/GeoChartComponent'
import LineChartComponent from './Components/LineChartCompnent'
import PieChartComponent from './Components/PieChartComponents'

const data = [
  {
    name: "Jan",
    uv: "12000",
    pv: 35000,
    amt: 35000,
  },
  {
    name: "Feb",
    uv: "23000",
    pv: 18000,
    amt: 18000,
  },
  {
    name: "Mar",
    uv: "25000",
    pv: 13000,
    amt: 13000,
  },
  {
    name: "Apr",
    uv: "19500",
    pv: 18000,
    amt: 18000,
  },
  {
    name: "May",
    uv: "16000",
    pv: 22000,
    amt: 22000,
  },
  {
    name: "Jun",
    uv: "20000",
    pv: null,
    amt: 26000,
  },
  {
    name: "Jul",
    uv: "32000",
    pv: null,
    amt: 29000,
  },
];

const data2 = [
  {
    name: 'Page A',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Page B',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Page C',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Page D',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Page E',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Page F',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Page G',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];


function App() {

  return (
    <div style={{
      display:"grid",
      gridTemplateColumns:"1fr 1fr",
    }}>
      <LineChartComponent data={data} />
      <PieChartComponent />
      <BarChartComponent />
      <GeoChartComponent />
      <GeoChartComponent />
      <LineChartComponent data={data2} />
      
    </div>
  )
}

export default App
