//here i have imported express and the router
const express = require("express");
const router = express.Router();

//import the contents of the json file
const devicesData = require("./devicesData.json")
//here i have imported 


// here is a command ln 7 / to show/ pass the array of devices or error msg-works
router.get("/home", async (req, res) => {
  // router.get("/home", async (req, res) => {
    //we added /home to distinguish from the other endpoints
  console.log('/home')
  try {
    res.json(items);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Retrieve a device that exists
// router.get("/films/:name", (req, res) => {
router.get("/items/:name", (req, res) => {
   //we added /films/:name to distinguish from the api-docs endpoints
  const devicesExists = devices.includes(req.params.name);
  //key value pairs : (this is a key)
  if (devicesExists) {
    res.json(`${req.params.name} exists!`);
  } else {
    res.json(
      `${req.params.name} sorry this user does not exist in your devices service :(`
    );
  }
});
//eg a server makes a request to my server to add a new device
router.post("/Item", async (req, res) => {
  console.log(req);
  // devicesData.push(req.body.name);
  res.json(`${req.body.name} has been added!`);
});

//edit a request, creates a record in the database
// router.put("/", async (req, res) => {
//   console.log(req);
//   devices.push(req.body.name);
//   res.json(`${req.body.name} has been replaced!`);
// });
//Update devices details

// router.patch("/:name", async (req, res) => {
//   console.log(req);
//   devices.patch(req.body.name);
//   res.json(`${req.body.name} has been updated!`);
// });

// Deleting a item

// router.delete("/:name", async (req, res) => {
//   console.log(req);
//   devices.delete(req.body.name);
//   res.json(`${req.body.name} has been deleted!`);
// });
module.exports = router;
//express component that allows you set up eg Axios
//menu  in the sense that it allows you look at what the api can do
//has a list of different operation- allow you to fufil different things
//swaggerdocumentation
//The main issue has been that the get All route (/:name ) conflicts with the api-docs name
//we added an extra parameter and to distinguish from each other and this seemed to work!

//once working we were able to copy the json entries in the swagger json and edit them!