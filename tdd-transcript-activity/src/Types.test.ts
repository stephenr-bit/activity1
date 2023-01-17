import { IDataBase } from './IDataBase'
import {StudentID, Student, Course, CourseGrade, Transcript, DataBase} from './Types'


const alvin : Student = {studentID: 37, studentName: "Alvin"}
const bryn : Student = {studentID: 38, studentName: "Bronwyn"}
const sam : Student = {studentID: 39, studentName: "Samwise"}
const frodo : Student = {studentID: 40, studentName: "Frodo"}
const courseGrade1: CourseGrade = { course: "English", grade: 95 };
const courseGrade2: CourseGrade = { course: "Math", grade: 93 };
const transcript : Transcript = {student:frodo, grades: [courseGrade1, courseGrade2]}


describe("exercise Types.ts", () => {

    test("extracting a studentID should give the ID", () =>{ 
        expect(alvin.studentID).toEqual(37)
        expect(bryn.studentID).toEqual(38)
    })

    // this illustrates what Jest shows when a test fails
    test("extracting a studentID should give the name", () => {
        expect(alvin.studentName).toEqual("Alvin")
        // should get a failure report here:
        expect(bryn.studentName).toEqual("Bronwyn")
    })

    // add a grade for an existing student
    test("add a grade for an existing student", () => {
        
    })

})
