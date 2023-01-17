import { StudentID, Student, Course, CourseGrade, Transcript} from './Types'
import { IDataBase } from './IDataBase'

const Avery : Student = { studentID: -1, studentName: "Avery"}
const emptyTranscript : Transcript = { student: Avery, grades: [] };


export default class DataBase implements IDataBase {

    /** the list of transcripts in the database */
    private transcripts : Transcript [] = []

    /** the last assigned student ID 
     * @note Assumes studentID is Number
    */
    private lastID : number

    constructor () {this.lastID = 0}

    /** Adds a new student to the database
     * @param {string} newName - the name of the student
     * @returns {StudentID} - the newly-assigned ID for the new student
     */
    addStudent (newName: string): StudentID {
        const newID = this.lastID++
        const newStudent:Student = {studentID: newID, studentName: newName}
        this.transcripts.push({student: newStudent, grades: []})
        return newID
    }


    /**
     * @param studentName 
     * @returns list of studentIDs associated with that name
     */
    nameToIDs (studentName: string) : StudentID[] {
        return this.transcripts
            .filter(t => t.student.studentName === studentName)
            .map(t => t.student.studentID)
    }


    /**
     * 
     * @param id - the id to look up
     * @returns the transcript for this ID
     */
    getTranscript (id: StudentID): Transcript {
        const ret : Transcript | undefined = this.transcripts.find(t => t.student.studentID === id)
            if (ret === undefined) {throw new Error("unknown ID")}
            else {return ret}
    }

    /**
     * Throws an error if a student is not in the transcript
     * @param id - the id to delete
     */
    deleteStudent (id: StudentID): void  {

        let isFound:boolean = false;
       
        // delete if student exists
        // throw error if not yet implemented
        this.transcripts.find((value,index)=> {
            let student = value.student 
            let studentID = student.studentID

            if (studentID === id) {
                delete this.transcripts[index]
                isFound = true;
            }
            if (this.lastID === id) {
                let lastTranscript = this.transcripts[this.transcripts.length]
                let lastStudent = lastTranscript.student
                
                isFound = true;
            } 
            else if (!isFound) {
                throw new Error("not found, no such student exists")  
            }
        })
    }   

    addGrade (id: Student, course: Course, courseGrade: CourseGrade) : void {
        let isFound:boolean = false;

        this.transcripts.find((value, index) => {
            let student = value.student 
            let studentID = student.studentID

            if (studentID === id.studentID) {
                this.transcripts[index].grades.push(courseGrade)
                isFound = true;
            }
            if (!isFound) {
                throw new Error("not found, no such student exists") 
            }

            
        })

       
    }

    getGrade (id: Student, course: Course) : CourseGrade {
        throw new Error("not implemented yet") 
    }

    getAllStudentIDs () : StudentID[] {
        throw new Error("not implemented yet") 
    }
    
    
}
    