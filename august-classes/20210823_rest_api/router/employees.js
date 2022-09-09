// Express setup

const { router } = require("../app");
// get all employees
router.get("/", async (req, res) => {
  try {
    const employees = await EmployeesData.find();
    res.status(200).json(employees);
  } catch (err) {
    res.status(500).json;
  }
});

// middleware

async function getEmployee(req, res, next) {}
// get one employee
// 3. to create new document- send post params- always in postman - JSON picked, and RAW checked, because it has a body, not signed yet to new database
// 4. async- work on the connection lasts some time, try - grabbing what been saved to database, than 201- sent what have ben asigned to db, error from  client -400, registreation error and sending message
// create middleware- do I have this person- i will check by every process- next- I want to move to next step when done, to avoid stucking in there , findById - triggering this id automatically being created after creating, find one specic given; params after'/' and query - after '?'; 404 response in error- means not found
// handling a response - 200- status everything found, URL http://localhost:5000/employees/Hadi

// DELETE http://localhost:5000/employees/:name delete one by name, later by id
router.delete("/:name", getEmployee, (req, res) => {
  try {
    await res.employee.remove();
    res.status(200).json({ message: "Employee deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// UPDATE http://localhost:5000/employee/:names one employee by name (later will be by id)
// PATCH  http://localhost:5000/employees just to change one data in the set of data- eg adress
router.patch(":name", getEmployee);
// object that I am currently now working on, before I assign it, replace it with new name
// i ve just sent address, I have a value in my req.body.add, but there was the actual value old one (whole object with Paris req.body)- I completely threw away old one and replaced it with new one
if (req.body.name)
// if yopu have that part update it
try {
  await res.employee.save();
  // save i am executing what I did- replacement
  // iam building an json object with property messahe and...
  res.status(200).json({message: "Employee updated", data: res.employee});
} cay
// res.employee has all the infos about that object
