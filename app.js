const mongoose = require("mongoose")
const express = require("express")
const employee = require("./models/Employee")
const routes = require("./routes/EmployeeRoutes")

const app = express()
app.use(express.json())

app.use('/emp', routes)


mongoose.connect('mongodb://localhost:27017/employeeDetails')
.then(()=>{
    console.log("mongodb connected");
})
.catch(err => console.log(err));



const PORT = 3000;
app.listen(PORT, (err)=>{
    console.log(err);
})