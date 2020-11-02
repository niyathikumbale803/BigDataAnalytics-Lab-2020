show dbs
db.createCollection("Employee");
db.createCollection("Department");
db.Employee.insert({_id:1, EmpName:"Niyathi",EID: 001, Department:"Sales", Age: 50})
db.Employee.insertOne({_id:2, EmpName:"Sam",EID: 002, Department:"Sales", Age: 40})
db.Employee.insert({_id:3, EmpName:"David",EID: 003, Department:"Marketing", Age: 30})
db.Employee.insert({_id:4, EmpName:"Mary",EID: 004, Department:"Accounts", Age: 25})
db.Employee.save({_id:5, EmpName:"Mohan",EID: 005, Department:"Accounts", Age: 26})
db.Employee.find()

db.Department.insert({_id:1,DepName:"Sales",DeptID:1000, DeptFloor:"4th floor", NoOfEmp:80})
db.Department.insert({_id:2,DepName:"Accounts",DeptID:1001, DeptFloor:"5th floor", NoOfEmp:60})
db.Department.insertOne({_id:3,DepName:"Marketing",DeptID:1002, DeptFloor:"3rd floor", NoOfEmp:80})
db.Department.save({_id:4,DepName:"HR",DeptID:1003, DeptFloor:"2nd floor", NoOfEmp:80})
db.Department.save({_id:5,DepName:"Management",DeptID:1004, DeptFloor:"1st floor", NoOfEmp:80})
db.Department.find()

db.Employee.update({_id:1,EmpName:"Niyathi"},{$set:{Hobbies:"Basketball"}},{$upsert:true})
db.Employee.update({_id:2,EmpName:"Sam"},{$set:{Hobbies:"Badminton"}},{$upsert:true})
db.Employee.find()

db.Employee.update({_id:1,EmpName:"Niyathi"},{$unset:{Hobbies:"Basketball"}},{$upsert:true})
db.Employee.find()

db.Employee.find({})
db.Department.find({})

db.Department.find({"DeptID": {"$gt":1000, "$lt":1005}},{Name:1, DeptID:1});

db.Employee.find({EmpName:/^A/});

db.Employee.find({"Age":{"$gt":30}});