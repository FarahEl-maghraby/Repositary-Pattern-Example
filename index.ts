// importing mongoClient to connect at mongodb
import { MongoClient } from "mongodb";
import { StudentRepo } from "./repositories/studentRepo";
import { Student } from "./entities/student";

import { TeacherRepo } from "./repositories/teacherRepo";
import { Teacher } from "./entities/teacher";

// creating a function that execute self runs
(async () => {
  // connecting at mongoClient
  const connection = await MongoClient.connect("mongodb://localhost");
  const db = connection.db("usersDB");

  // our operations
  // initializing the studentRepository using base repo constructor
  // takes dbName and Collection name
  const studentRepository = new StudentRepo(db, "students");

  // creating a student --> Student class
  const doc = new Student("Omar", 15);
  // call create method from generic studentRepository
  const result = await studentRepository.create(doc);
  console.log(result);
  console.log(`Doc inserted with ${result ? "success" : "fail"}`);

  const students = await studentRepository.find({ age: 15 });
  console.log(students);

  const allStudents = await studentRepository.findAll();
  console.log(allStudents);

  const student = await studentRepository.findOne("636aa5f5f08a047d820253f2");
  console.log(student);

  const studentDel = await studentRepository.delete("636aa6dc6c12efff5ff5ae05");
  console.log(studentDel);

  const studentUpate = await studentRepository.update(
    "636aa698630dffe5c11a5e8b",
    { name: "osamaaa", age: 5 }
  );
  console.log(studentUpate);

  //call specific method from spartan class
  const count = await studentRepository.countOfDoc();
  console.log(`the count of spartans is ${count}`);

  /////////////////////////////////////////////////////////////////

  // Teacher

  const docTeacher = new Teacher("Amr", "english", 35);
  const teacherRepository = new TeacherRepo(db, "teachers");
  const resultTeacher = await teacherRepository.create(docTeacher);
  console.log(resultTeacher);
  console.log(`Doc inserted with ${result ? "success" : "fail"}`);
})();
