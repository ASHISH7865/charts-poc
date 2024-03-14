
import './App.css'
import BarChartComponent from './Components/BarChartComponent'
import GeoChartComponent from './Components/GeoChartComponent'
import LineChartComponent from './Components/LineChartCompnent'
import PieChartComponent from './Components/PieChartComponents'


function App() {

  return (
    <div style={{
      display:"grid",
      gridTemplateColumns:"1fr 1fr",
      gap:"20px",
      padding:"20px",
      placeItems:"center"
    }}>
     <LineChartComponent />
     <PieChartComponent />
     <BarChartComponent />
     <GeoChartComponent />
    </div>
  )
}

export default App
