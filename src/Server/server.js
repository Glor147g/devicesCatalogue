const express = require('express')
const app = require('express')
const router = require('../Routes/devicesapi')
const mongoose = require('mongoose')
const Item = require('../Item')

const port = 3000

//this code connects to mongo, but we dont see anything
mongoose.connect("mongodb://localhost/testdb",
 ()=> {
  console.log("connected")
 },
 e => console.error(e)
)
//instantiate a new user this is then method below
// const item = new Item ({ 
//   deviceid: " 5",
// 	name:  "Amazon Echo Dot ",
// 	description:  " compact version of the best selling Echo, great for kids and parents alike",
// 	manufactured:  "2015 ",
// 	rating :  " 5",})
//item.save().then(()=> console.log ("Item Saved"));

run()
async function run() {
const item = new Item 

({ 
  deviceid: " 5",
	name:  "Amazon Echo Dot ",
	description:  " compact version of the best selling Echo, great for kids and parents alike",
	manufactured:  "2015 ",
	rating :  " 5"
})
  await item.save()
  console.log (item)
  
}
  
  
//   item.save().then(()=> console.log ("Item Saved"));


Router.get('/', (req, res) => {
	res.send('Hello World!')
  })


  

  Router.listen(port, () => {
	console.log(`app listening on port ${port}`)
  })