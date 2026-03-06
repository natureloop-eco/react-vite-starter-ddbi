import { useEffect, useState } from "react";
import "./App.css";

function App() {

const [data,setData] = useState({});

async function loadData(){
const res = await fetch("/server/getSensorData");
const result = await res.json();
setData(result);
}

useEffect(()=>{
loadData();
setInterval(loadData,5000);
},[]);

return (

<div className="container">

<div className="compound">
<h2>Office Compound</h2>
<p>Temp: {data.device1?.temp} °C</p>
<p>Humidity: {data.device1?.hum} %</p>
</div>

<div className="workshop">

<h2>Workshop</h2>
<p>Temp: {data.device2?.temp} °C</p>
<p>Humidity: {data.device2?.hum} %</p>

<div className="officeRoom">
<h3>Office Room</h3>
<p>Temp: {data.device3?.temp} °C</p>
<p>Humidity: {data.device3?.hum} %</p>
</div>

</div>

</div>

);

}

export default App;
