const express = require('express')
const app = require('express')
const router = require('../Routes/devicesapi')

const port = 3000



Router.get('/', (req, res) => {
	res.send('Hello World!')
  })

  Router.listen(port, () => {
	console.log(` app listening on port ${port}`)
  })