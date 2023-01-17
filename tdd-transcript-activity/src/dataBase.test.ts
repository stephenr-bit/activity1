import { StudentID, Student, Course, CourseGrade, Transcript } from './Types'
import DataBase from './dataBase';

let db: DataBase;
const sam : Student = {studentID: 1, studentName: "Samwise"}
const frodo : Student = {studentID: 0, studentName: "Frodo"}
const courseGrade1: CourseGrade = { course: "English", grade: 95 };
const courseGrade2: CourseGrade = { course: "Math", grade: 93 };
const courseGrade3: CourseGrade = { course: "Math", grade: 95 };
const transcript : Transcript = {student:frodo, grades: [courseGrade1, courseGrade2]}

// start each test with a fresh empty database.
beforeEach(() => {
  db = new DataBase
});

// this may look undefined in TSC until you do an npm install
// and possibly restart VSC.
describe('tests for addStudent', () => {

  test('addStudent should add a student to the database', () => {
    // const db = new DataBase ()
    expect(db.nameToIDs('blair')).toEqual([])
    const id1 = db.addStudent('blair');
    expect(db.nameToIDs('blair')).toEqual([id1])
  });

  test('addStudent should return an unique ID for the new student',
    () => {
      // we'll just add 3 students and check to see that their IDs
      // are all different.
      const id1 = db.addStudent('blair');
      const id2 = db.addStudent('corey');
      const id3 = db.addStudent('delta');
      expect(id1).not.toEqual(id2)
      expect(id1).not.toEqual(id3)
      expect(id2).not.toEqual(id3)
    });

  test('the db can have more than one student with the same name',
    () => {
      const id1 = db.addStudent('blair');
      const id2 = db.addStudent('blair');
      expect(id1).not.toEqual(id2)
    })

  test('A newly-added student should have an empty transcript',
    () => {
      const id1 = db.addStudent('blair');
      const retrievedTranscript = db.getTranscript(id1)
      expect(retrievedTranscript.grades).toEqual([])
      expect(retrievedTranscript.student)
        .toEqual({
          studentID: id1, studentName: "blair"
        })
    });

  test('getTranscript should return the right transcript',
    () => {
      // add a student, getting an ID
      // add some grades for that student
      // retrieve the transcript for that ID
      // check to see that the retrieved grades are 
      // exactly the ones you added.    
    });

  test('getTranscript should throw an error when given a bad ID',
    () => {
      // in an empty database, all IDs are bad :)
      // Note: the expression you expect to throw must be wrapped in a (() => ...)
      expect(() => db.getTranscript(1)).toThrowError()
    });

    // test('getTranscript should throw an error when given a bad ID (bogus version)',
    // () => {
    //   // in an empty database, all IDs are bad :)
    //   // Note: the expression you expect to throw must be wrapped in a (() => ...)
    //   expect(db.getTranscript(1)).toThrowError()
    // });

});

describe('tests for addGrade, delete grade', () => {  

  test("add grade for an existing student per course", 
  () => {
  
    db.addStudent("Frodo")
    db.addGrade(frodo, "English", courseGrade1)
    let transcripts = db.getTranscript(0)

    let testResultTranscript : Transcript = {student:frodo, grades:[courseGrade1]}

    expect(transcripts).toEqual(testResultTranscript)
  

  });

  test("change grade for an existing student per course", 
  () => {
  
    db.addStudent("Frodo")
    db.addGrade(frodo, "English", courseGrade1)
    let transcripts = db.getTranscript(0)
    let courseGrade2:CourseGrade= {course:"English",grade: 100}

    let testResultTranscript : Transcript = {student:frodo, grades:[courseGrade1]}

    expect(transcripts).toEqual(testResultTranscript)

    db.addGrade(frodo, "English", courseGrade2)

    let testResultTranscript2 : Transcript = {student:frodo, grades:[courseGrade2]}
    transcripts = db.getTranscript(0)
    expect(transcripts).toEqual(testResultTranscript2)




  

  });

  //  // delete student
  //  test("delete a student from a database", () => {
  //   db = new DataBase;
  //   db.addStudent("Frodo")
  //   db.addGrade(frodo, "English", courseGrade1)

  //   db.addStudent("Sam")
  //   db.addGrade(sam, "Math", courseGrade3)

  //   db.deleteStudent(0);

  //   () => {
  //   expect(() => db.getGrade(frodo, "Math")).toThrowError();
  //   }
  // });
   
//    test("delete a student from a database", () => {
    
//     db.addStudent("Frodo")
//     db.addGrade(frodo, "English", courseGrade1)

//     db.addStudent("Sam")
//     db.addGrade(sam, "Math", courseGrade3)

//     db.deleteStudent(0);
//     let transcripts = db.getTranscript(0);

//     () => {
//     expect(() => db.getGrade(frodo, "English")).toThrowError();
//     }

// })


  



})





