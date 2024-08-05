// routes/employeeRoutes.js
const express = require('express');
const router = express.Router();
const employeeController = require('../controllers/employeeController');

router.get('/Employees', employeeController.getAllEmployees);
router.get('/Employees/:id', employeeController.getEmployeeById);
router.post('/Employees', employeeController.createEmployee);
router.put('/Employees/:id', employeeController.updateEmployee);
router.delete('/Employees/:id', employeeController.deleteEmployee);

module.exports = router;
