// http(s)://domain.com/url
// http://localhost:8989/sqr
const express = require("express");
const app = express();
const PORT = 8989

app.get("/sqr/:num", (req, res) => {
    var x = req.params.num; //req.params['num']
    res.send(`Square of ${x} is ${x * x}`)
})

//cw create 4 api add(get), sub(post), mul(put), div(delete)
//http://localhost:8989/add?num1=5&num2=7
app.get("/add", (req, res) => {
    var x = Number(req.query.num1)
    var y = Number(req.query.num2)

    res.send(`${x} + ${y} = ${x+y}`)
})

// http://localhost:8989/sub?num1=7&num2=4
app.post("/sub", (req, res) => {
    var x = req.query.num1
    var y = req.query.num2

    res.send(`${x} - ${y} = ${x-y}`)
})


app.use(express.json());

app.put("/mul", (req, res) => {
    var x = req.body.num1
    var y = req.body.num2

    var output = {
        "result": true,
        "mul": x * y
    }

    res.send(output)
})


app.delete("/div", (req, res) => {
    res.send("Hello from div api")
})

app.patch("/mod", (req, res) => {
    res.send("Hello from mod api")
})

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})

// to run > node api.js
// troubleshoo > npm i <modulename>
// e.g. > npm i express
// rerun > node api.js