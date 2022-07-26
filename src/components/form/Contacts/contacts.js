import React from "react";

const contacts =(props)=>{
// 	< Contacts 

// 	name="beyonce" 
// 	number="00938373626255" 
// 	email="beyonce.com" 
	
// 	/>

// 	< Contacts 

// name="Dua Lipa" 
// number="00938373626255" 
// email="Dua Lipa.com" 

// />

// < Contacts 

// name="Adele" 
// number="00938373626255" 
// email="Adele.com" 
// />
	
return (

	<>
<div>
	<h2> {props.name} </h2>
<p> {props.number}</p>
<p> {props.email}</p>
</div>


</>

)

}

export default contacts