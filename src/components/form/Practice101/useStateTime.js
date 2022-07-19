import React from "react";
import { useState } from "react"; 

const SearchForm =()=>{

	const timeNow = new Date().toLocaleTimeString();
	const [time, setTime] = useState(timeNow);
	// console.log (timeNow)

const refreshTime= ()=>{

	setTime(new Date().toLocaleTimeString())
}
	
return (

<div>

<h1> Devices Form</h1>
<h1> {time}</h1>

	{/* <button onClick ={() => setTime(time)}>  refresh Time</button> */}
	<button onClick ={ refreshTime} > refresh Time</button>
	
</div>

)

}