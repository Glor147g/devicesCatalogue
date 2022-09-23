import React from "react";
import { useState } from "react";
import { useEffect } from "react";
// import devicesapi from './Routes/devicesapi'
// const devicesapi= require("./devicesapi")

//created a form
function inputform(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    // console.log (username, password)

    // }, [username,password])
    getData();
  }, []);

  const getData = async () => {
    //create a new function for the form to fetch the data; also add the method in UseEff. so when run, it gets the data

    fetch('http://localhost:3000/home')
    // fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((json) => console.log(json));
   
  };
//post request is written in the handle submit
  const handleSubmit = async (e) => {
    //logic for the form submission
    e.preventDefault();
    // console.log ('form has been submitted')
    // console.log(username, password)

    // const body ={
    //   testData: 5
    // }

    // const config={
    //   headers:{
    //     'Content-Type': 'application/json'
    //            }
             
             }

  //  fetch('http://localhost:3000/items',{
  // 	method: 'POST',
  // 	headers:{
  // 		'Content-Type': 'application/json'
  // 	},
  // 	 body: JSON.stringify(body)
  // })
  // 	 .then(response => response.json())
  // 	 .then(json => console.log(json))
  // };

  //we're putting this post request inside the form so that each time it runs.it fetches data

  // for a post request , We need headers and body

  // }

  return (
    // <div>
    <form onSubmit={handleSubmit}>
      <div>
        <h1>{props.text}</h1>
        <label htmlFor="username">username </label>
        <input
          type="text"
          name="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <label htmlFor="password">password </label>
        <input
          type="text"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <input type="submit" value="login" />
      </div>
    </form>
    // </div>
  );
}

export default inputform;
