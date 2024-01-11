// mongodb+srv://<username>:<password>@cluster0.dslyw.mongodb.net/?retryWrites=true&w=majority

const mongoose = require("mongoose");
const conn_str = "mongodb+srv://username:password@cluster0.urlid.mongodb.net/yourdatabasename?retryWrites=true&w=majority";

mongoose.connect(conn_str)
.then( () => console.log("Connected successfully...") )
.catch( (err) => console.log(err) );

const express = require("express");
const app = express();
const PORT = 8989

/* CW Create api
/users => get post put delete
/users/:id => get 
*/

const userSchema = new mongoose.Schema({
	name: String,
	age: Number,
	city: String
});

const user = new mongoose.model("users", userSchema);

// http://localhost:8989/users/
app.get("/users", async (req, res) => {
    let data = await user.find();
	res.send(data);
})


// http://localhost:8989/users/659ff181624503c8b4e38568
app.get("/users/:id", async (req, res) => {
    let data = await user.find({_id: req.params.id});
	res.send(data[0]);
})

// http://localhost:8989/users?id=659ff181624503c8b4e38568
app.delete("/users", async (req, res) => {
    let data = await user.deleteOne({_id: req.query.id});
	res.send(data);
})


app.use(express.json());
/**
 * http://localhost:8989/users
 * JSON
 * {    
        "name": "shruti",
        "age": 22,
        "city": "Thane"
    }
 */
app.post("/users", async (req, res) => {
    // let data = {
    //     "name": "abc",
    //     "age": 22,
    //     "city": "Thane"
    // }
    // let obj = new user(data)
    
    let obj = new user(req.body)
    let result = await obj.save();
    res.send(result)
})

/** URL: http://localhost:8989/users
 *  Method: PUT
 * JSON DATA:
 *  {
        "id": "659ff181624503c8b4e38568",
        "name": "sumit",
        "age": 22,
        "city": "London"
    }
 */
app.put("/users", async (req, res) => {

    let result = await user.updateOne({"_id": req.body.id}, {
		"$set": {
			"name" : req.body.name,
			"age" : req.body.age,
			"city" : req.body.city
		}
	});

    res.send(result)
})


app.get("/", (req, res) => {
    res.send("App is running...")
})


app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})
