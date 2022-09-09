const express = require("express");
const router = express.Router();
const EmployeesData = require("../model/employeesModel");
// const {
//   getEmployee,
//   getAllEmployee,
//   getAdd,
//   addNewEmployee,
//   getOneEmployee,
//   updateOneEmployee,
//   deleteOneEmployee,
//   updateAllEmployeeData,
// } = require("../controllers/employeeController");
// root route w/o controllers
// http://localhost:5000/employees

// calling this trouter:
// router.get("/", async (req, res) => {
//   try {
//     const employees = await EmployeesData.find();
//     res.status(200).json(employees);
//   } catch {
//     res.status(500).json({ message: err.message });
//   }
// });

// Add new, POST new employee
router.post("/", async (req, res) => {
  //url  http:localhost:5000/employees
  /*{
    "name" : "Hadi",
    "age":31,
    "add":"Berlin"
} */

  const employee = new EmployeesData({
    name: req.body.name,
    age: req.body.age,
    add: req.body.add,
  });
  try {
    const newEmployee = await employee.save();
    console.log(newEmployee);
    res.status(201).json(newEmployee);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});
// GET all employees ,
// router.route("/").get(getAllEmployee).post(addNewEmployee);
// route with name value
// router
//   .route("/:name")
//   .get(getEmployee, getOneEmployee)
//   .patch(getEmployee, updateOneEmployee)
//   .put(getEmployee, updateAllEmployeeData)
//   .delete(getEmployee, deleteOneEmployee);

// GET  http://localhost:3000/employees/ -->  get all employees
// POST http://localhost:3000/employees/ -->  add employee
// GET http://localhost:3000/employees/:name -->  get employee by name
// PATCH http://localhost:3000/employees/:name -->  update employee by name
// DELETE http://localhost:3000/employees/:name -->  delete employee by name
// UPDATE aka PUT http://localhost:3000/employees/:name -->  update employee by name

// Get many employees by address
// router.get("/search/:add", getAdd, (req, res) => {
//   res.status(200).json(res.employee);
// });
// // Update many employees by Address
// router.put("/update/:add", getAdd, updateManyEmployees);
module.exports = router;
