import * as fs from "fs";
import AssignmentsAPIReciverService from "./infrastructure/recivers/AssignmentsAPIReciverService";
import SubmissionsAPIReciverService from "./infrastructure/recivers/SubmissionsAPIReciverService";
import CourseAPIReciverService from "./infrastructure/recivers/CourseAPIReciver";
import ManualFetch from "./manualFetching";
import { CommandStudentHandler } from "./application/commandHandlers/CommandStudentHandler";
import { CommandCourseHandler } from "./application/commandHandlers/CommandCourseHandler";

console.log("Hello world");

function GetPrivateToken(): string {
  try {
    const token = fs.readFileSync("./src/PrivateToken.txt", "utf-8");
    return token;
  } catch (err) {
    throw err;
  }
}

const token = GetPrivateToken();

const commandStudentHandler: CommandStudentHandler = new CommandStudentHandler(token);

const commandCourseHandler: CommandCourseHandler = new CommandCourseHandler(token);


const assignmentsAPIReciverService: AssignmentsAPIReciverService =
  new AssignmentsAPIReciverService(token);
const submissionsAPIReciverService: SubmissionsAPIReciverService =
  new SubmissionsAPIReciverService(token);

// const s: CourseDTO  = await courseAPIReciverService.GetStudnetCourses();

const student = await commandStudentHandler.GetStudnet();
console.log(student);
const studentCanvasId = await commandStudentHandler.GetStudentCanvasId();
console.log(studentCanvasId);

const courses = await commandCourseHandler.GetStudnetCourses(studentCanvasId);
console.log(courses);

// console.log(await assignmentsAPIReciverService.GetStudnetAssignments(12525));

// console.log(await submissionsAPIReciverService.GetStudnetSubmissions(12525, 1, ));

const manual: ManualFetch = new ManualFetch(token);

// manual.GetAssignmet();
