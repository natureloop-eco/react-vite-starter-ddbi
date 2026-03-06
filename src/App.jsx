import { useEffect, useState } from "react";
import "./App.css";

function App(){

const [data,setData] = useState({});
const [time,setTime] = useState(24);

async function loadData(){
const res = await fetch("/server/getSensorData");
const result = await res.json();
setData(result);
}

useEffect(()=>{
loadData();
setInterval(loadData,5000);
},[]);

return(

<div className="dashboard">

<h1 className="title">Weather Monitoring Dashboard</h1>

<div className="compound card">

<h2>Office Compound</h2>
<div className="metrics">
<span>🌡 {data.device1?.temp} °C</span>
<span>💧 {data.device1?.hum} %</span>
</div>

<div className="workshop card">

<h3>Workshop</h3>

<div className="metrics">
<span>🌡 {data.device2?.temp} °C</span>
<span>💧 {data.device2?.hum} %</span>
</div>

<div className="office card">

<h4>Office Room</h4>

<div className="metrics">
<span>🌡 {data.device3?.temp} °C</span>
<span>💧 {data.device3?.hum} %</span>
</div>

</div>

</div>

</div>

<div className="timeline">

<h3>Last 24 Hours</h3>

<input
type="range"
min="1"
max="24"
value={time}
onChange={(e)=>setTime(e.target.value)}
/>

<p>{time} hours ago</p>

</div>

</div>

)

}

export default App
