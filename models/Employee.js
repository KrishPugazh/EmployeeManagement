const mongoose = require("mongoose")
const employeeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    department: {
        type: String,
        required: true
    },
    salary: {
        type: Number,
        required: true
    },
    doj: {
        type: Date,
        default: Date.now,
        required: true
    }
});

const employee = mongoose.model("Employee", employeeSchema);
module.exports = employee;