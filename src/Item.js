const mongoose = require('mongoose')
//takes in key value pairs-defines the field and type eg number/string
const itemSchema = new mongoose.Schema ({
	deviceid: Number,
	name: String,
	description: String,
	manufactured: Number,
	rating : String
})
//below create the model for the schema, 

// mongoose.model()
//User this is what we'll see in the database, then pass in 2nd argument UserSchema

module.exports = mongoose.model('Item', itemSchema)
//in our server we can import the userSchema
