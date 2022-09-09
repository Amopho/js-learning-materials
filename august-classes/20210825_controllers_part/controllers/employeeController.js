// const EmployeesData = require("../model/employeesModel");
// const express = require("express");
// const { deleteMany } = require("../../20210824_rest_api_II/model/employeesModel");

// // Middleware
// // to get one employee by name
// const getEmployee = asyns(req, res, next) => {
//     let employee;
//     try{
//         employee = await EmployeesData.findOne({name: req.params.name});
//         console.log(employee);
//// employee is an array so you can;t check it with null, just with length
//// if (employee.length == 0)
//         if (employee == null) {
//             // not found
//             return res.status(404).json({message: "Sorry, NOT FOUND"})
//         }

//     } catch(err){
//         // 500 server internal problem
//         res.status(500).json({message:err.message});
//     }
//     res.employee = employee;
//     next();
// }

// // async await, promise, difference

// // Vie all em[loyees
// // empty find()- meaning grab evverything
// const getAllEmployees = async(error, req, res, next)=> {
//     try{
//         const employees = await EmployeesData.find();
//         // console.log(employees);
//         res.status(200).json(
//             employees.map((employee)=>{
//                 const {_id, name, age, add, employeeAddedDate} = employee;
//                 return{
//                 employeeId: employee._id,}
//             })
//         )
//     } catch(err){

//     }
// }

// const updateOneEmployee = async (req, res) => {
//     const {name, age, add } = req.body;
//     if (name {
//         res.employee.name = name;
//     }
//     if (age !))
// }

// // one update for all of the employeess PUT

// const updateAllEmployeesData = async(req, res)=> {
//     try{
//         await EmployeesData.updateOne({name:req.params.name}, {
//             $set:{
//                 name: req.body.name,
//                 age.req.body.age,
//                 add: req.body.add,
//             },
//             $currentDate: {
//                 employeeAddedDate: Date.now,
//             }
//             // for dates it is coming from mongo and i neeed to update it otherwise
//         }
//         });
//         // 200 OK
//         res.status(200).json({message: "Employee got message"})
//     } catch (err) {
//         res.status(400).json({message:err.message})
//     }
// }

// // information from database, with just a text before Address

// // Get deleteMany address
// // Update many by Address
