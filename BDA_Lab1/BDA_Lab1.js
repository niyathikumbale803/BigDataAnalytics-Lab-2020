db.createCollection("Student")
db.createCollection("Faculty")
db.createCollection("COE")
db.createCollection("Library")
db.createCollection("Admission")
db.createCollection("CollegeFestival")

db.Student.insert({_id:1,StudName:"Niyathi",USN:"1BM17CS147",Section:"C",Branch:"CSE",Sex:"Female",Hobbies:"Singing"})
db.Student.insert({_id:2,StudName:"Meghana",USN:"1BM17CS146",Section:"C",Branch:"CSE",Sex:"Female",Hobbies:"Swimming"})
db.Student.insert({_id:3,StudName:"Nikhil",USN:"1BM17CS053",Section:"C",Branch:"CSE",Sex:"Male",Hobbies:"Football"})
db.Student.insert({_id:4,StudName:"Omar",USN:"1BM17CS138",Section:"C",Branch:"CSE",Sex:"Male",Hobbies:"Basketball"})
db.Student.find({})

db.Faculty.insert({_id:1,FacName:"Umadevi V",FID:"1BM001",Dept:"CSE",AreaOfExpertise:"AI",Sex:"Female",OfficeNo:"134"})
db.Faculty.insert({_id:2,FacName:"Latha NR",FID:"1BM002",Dept:"ISE",AreaOfExpertise:"ML",Sex:"Female",OfficeNo:"135"})
db.Faculty.insert({_id:3,FacName:"Pallavi GB",FID:"1BM003",Dept:"ISE",AreaOfExpertise:"Data Analytics",Sex:"Female",OfficeNo:"136"})
db.Faculty.insert({_id:4,FacName:"Antara Roy Choudhary",FID:"ISE",Dept:"Mech",AreaOfExpertise:"IoT",Sex:"Female",OfficeNo:"137"})
db.Faculty.find({})

db.COE.insert({_id:1,StaffName:"Bindu",StaffID:"1BMS111",Department:"CSE",Sex:"Female",Email:"bindu@gmail.com",Contact:"9485736285"})
db.COE.insert({_id:2,StaffName:"Sandy",StaffID:"1BMS112",Department:"ISE",Sex:"Female",Email:"sandy@gmail.com",Contact:"9485736284"})
db.COE.insert({_id:3,StaffName:"Raju",StaffID:"1BMS113",Department:"ECE",Sex:"Male",Email:"raju@gmail.com",Contact:"9485736215"})
db.COE.insert({_id:4,StaffName:"Kumar",StaffID:"1BMS114",Department:"MECH",Sex:"Male",Email:"kumar@gmail.com",Contact:"9405736285"})
db.COE.find({})

db.Library.insert({_id:1,LibName:"Radha",SID:"BML001",Sex:"M",Phone:"9900550066",Email:"Radha@bmsce.ac.in", Room:"101"})
db.Library.insert({_id:2,LibName:"Mary",SID:"BML006",Sex:"M",Phone:"9900550056",Email:"mary@bmsce.ac.in", Room:"102"})
db.Library.insert({_id:3,LibName:"Anu",SID:"BML007",Sex:"F",Phone:"9900551056",Email:"anu@bmsce.ac.in", Room:"103"})
db.Library.insert({_id:4,LibName:"John",SID:"BML009",Sex:"M",Phone:"9800550056",Email:"john@bmsce.ac.in", Room:"108"})
db.Library.find({})

db.Admission.insert({_id:1,FName:"Dhruv",POB:"Bangalore",Sex:"M",Type:"ComedK",SecondPU:"80", Tenth:"9.8"})
db.Admission.insert({_id:2,FName:"Spoorthi",POB:"AP",Sex:"F",Type:"CET",SecondPU:"88", Tenth:"8.8"})
db.Admission.insert({_id:3,FName:"Manasa",POB:"Chennai",Sex:"F",Type:"ComedK",SecondPU:"89", Tenth:"10"})
db.Admission.insert({_id:4,FName:"Vedanth",POB:"Delhi",Sex:"M",Type:"CET",SecondPU:"96", Tenth:"9.4"})
db.Admission.find({})

db.CollegeFestival.insert({_fid:1,FestName:"Utsav",Place:"BMSCE",NoOfDays:"3",NoOfEvents:"50",Type:"Cultural", Dept:"College"})
db.CollegeFestival.insert({_fid:2,FestName:"Phaseshift",Place:"BMSCE",NoOfDays:"3",NoOfEvents:"50",Type:"Tech", Dept:"College"})
db.CollegeFestival.insert({_fid:3,FestName:"Protocol Day",Place:"CSE Floor",NoOfDays:"1",NoOfEvents:"10",Type:"Coding", Dept:"CSE"})
db.CollegeFestival.insert({_fid:4,FestName:"Pravega",Place:"IISc",NoOfDays:"3",NoOfEvents:"50",Type:"Cultural", Dept:"College"})
db.CollegeFestival.find()