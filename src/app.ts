import * as fs from 'fs';
import StudentAPIReciverService from "./infrastructure/recivers/StudentAPIReciverService";
import AssignmentsAPIReciverService from "./infrastructure/recivers/AssignmentsAPIReciverService";
import CourseAPIReciverService from "./infrastructure/recivers/CourseAPIReciver";
import CourseDTO from "./infrastructure/dto/CourseDTO";
import ManualFetch from "./manualFetching";


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
// const courseAPIReciverService: CourseAPIReciverService = new CourseAPIReciverService(token);
const assignmentsAPIReciverService : AssignmentsAPIReciverService = new AssignmentsAPIReciverService(token)

// const s: CourseDTO  = await courseAPIReciverService.GetStudnetCourses();

console.log(await studentAPIReciverService.GetStudnet());
// console.log(s);
console.log(await assignmentsAPIReciverService.GetStudnetAssignments());


const manual: ManualFetch = new ManualFetch(token);

manual.GetAssignmet();