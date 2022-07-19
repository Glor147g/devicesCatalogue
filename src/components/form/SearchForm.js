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
	<input />
	<button onClick ={ refreshTime} > refresh Time</button>
	//will probably use useState - if I want to update with a visual component

	//research how fetch tool work-make API request (not exclusive)
	//react Form/ form component
	//service from a database (mongoDB)
	//swagger will still be used to document and tell the user
	
</div>

)

}

export default SearchForm;