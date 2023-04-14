import * as fs from 'fs';
import StudentAPIReciverService from "./infrastructure/recivers/StudentAPIReciverService";
import AssignmentsAPIReciverService from "./infrastructure/recivers/AssignmentsAPIReciverService";
import SubmissionsAPIReciverService from "./infrastructure/recivers/SubmissionsAPIReciverService";
import CourseAPIReciverService from "./infrastructure/recivers/CourseAPIReciver";
import CourseDTO from "./infrastructure/dto/CourseDTO";
import ManualFetch from "./manualFetching";
import Course from './domain/models/Course';


console.log("Hello world");


function GetPrivateToken(): string {
    try {
        const token = fs.readFileSync('./src/PrivateToken.txt', 'utf-8');
        return token;
    }
    catch (err) {
        throw err;
    }
}


const token = GetPrivateToken();

const studentAPIReciverService: StudentAPIReciverService = new StudentAPIReciverService(token);
const courseAPIReciverService: CourseAPIReciverService = new CourseAPIReciverService(token);
const assignmentsAPIReciverService: AssignmentsAPIReciverService = new AssignmentsAPIReciverService(token)
const submissionsAPIReciverService: SubmissionsAPIReciverService = new SubmissionsAPIReciverService(token)

// const s: CourseDTO  = await courseAPIReciverService.GetStudnetCourses();

console.log(await studentAPIReciverService.GetStudnet());
// console.log(s);
const studentCanvasId = await studentAPIReciverService.GetStudentCanvasId()
console.log(studentCanvasId)

const courses = await courseAPIReciverService.GetStudnetCourses(studentCanvasId)
console.log(courses)
    
// console.log(await assignmentsAPIReciverService.GetStudnetAssignments(12525));

// console.log(await submissionsAPIReciverService.GetStudnetSubmissions(12525, 1, ));


const manual: ManualFetch = new ManualFetch(token);

// manual.GetAssignmet();