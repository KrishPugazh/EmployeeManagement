const express = require('express');
const routes = express.Router();
const Employee = require("../models/Employee");

routes.post('/set', (req, res) => {
    try {
        const emp = new Employee(req.body);
        emp.save();
        res.status(201).json({
            message: 'Employee created successfully',
            data: emp
        });
    } catch(err) {
        res.status(500).json({
            message: err.message
        });
    }
});

routes.get('/get', (req, res) => {
    Employee.find()
       .then(employees => res.json(employees))
       .catch(err => res.status(500).json({ message: err.message }));
});

routes.get('/getByName/:x', (req, res) => {
    Employee.findOne({ name: req.params.x })
    .then(e => res.json(e))
    .catch(err => res.status(500).json({ message: err.message }));
});

module.exports = routes;
