import * as fs from 'fs';
import StudentAPIReciverService from "./infrastructure/recivers/StudentAPIReciverService";
import CourseAPIReciverService from "./infrastructure/recivers/CourseAPIReciver";

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

console.log(await studentAPIReciverService.GetStudnet());
console.log(await courseAPIReciverService.GetStudnetCourses());