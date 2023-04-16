import * as fs from "fs";
import AssignmentAPIReciverService from "./infrastructure/recivers/AssignmentAPIReciverService";
import SubmissionAPIReciverService from "./infrastructure/recivers/SubmissionAPIReciverService";
import CourseAPIReciverService from "./infrastructure/recivers/CourseAPIReciver";
import ManualFetch from "./manualFetching";
import { CommandStudentHandler } from "./application/commandHandlers/CommandStudentHandler";
import { CommandCourseHandler } from "./application/commandHandlers/CommandCourseHandler";
import { CommandAssignmentHandler } from "./application/commandHandlers/CommandAssignmentHandler";

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

const commandAssignmentHandler: CommandAssignmentHandler = new CommandAssignmentHandler(token);


const student = await commandStudentHandler.GetStudnet();
// console.log(student);

const studentCanvasId = await commandStudentHandler.GetStudentCanvasId();
// console.log(studentCanvasId);

const courses = await commandCourseHandler.GetStudnetCourses(studentCanvasId);
// console.log(courses);

const assignments = await commandAssignmentHandler.GetStudnetAssignments(studentCanvasId, 12886);
console.log(assignments);





const assignmentAPIReciverService: AssignmentAPIReciverService =
  new AssignmentAPIReciverService(token);
const submissionsAPIReciverService: SubmissionAPIReciverService =
  new SubmissionAPIReciverService(token);

// console.log(await assignmentsAPIReciverService.GetStudnetAssignments(12525));

// console.log(await submissionsAPIReciverService.GetStudnetSubmissions(12525, 1, ));

const manual: ManualFetch = new ManualFetch(token);

// manual.GetAssignmet();
