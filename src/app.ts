import AssignmentAPIReciverService from "./infrastructure/recivers/AssignmentAPIReciverService";
import SubmissionAPIReciverService from "./infrastructure/recivers/SubmissionAPIReciverService";
import CourseAPIReciverService from "./infrastructure/recivers/CourseAPIReciver";
import ManualFetch from "./manualFetching";
import { CommandStudentHandler } from "./application/commandHandlers/CommandStudentHandler";
import { CommandCourseHandler } from "./application/commandHandlers/CommandCourseHandler";
import { CommandAssignmentHandler } from "./application/commandHandlers/CommandAssignmentHandler";
import express from "express";
import routerCommand from './application/commandHandlers/CommandSubbmisionHandler'
import GetPrivateToken from './GettingToken';

console.log("Hello world");
// EXPRESS CONFIG
const app = express();
// const PORT:number = parseInt(process.env.PORT) || 8080;
const PORT: number = 7000;

// Middleware that parses body to JSON format
app.use(express.json());

const token = GetPrivateToken();

app.get("/", (req, res) => {
  res.status(200).send("welcome to the website");
});

const commandStudentHandler: CommandStudentHandler = new CommandStudentHandler(token);

const commandCourseHandler: CommandCourseHandler = new CommandCourseHandler(token);

const commandAssignmentHandler: CommandAssignmentHandler = new CommandAssignmentHandler(token);

const student = await commandStudentHandler.GetStudnet();
// console.log(student);

const studentCanvasId = await commandStudentHandler.GetStudentCanvasId();
// console.log(studentCanvasId);

const courses = await commandCourseHandler.GetStudnetCourses(studentCanvasId);
// console.log(courses);

const assignments = await commandAssignmentHandler.GetStudnetAssignments(studentCanvasId, 12525);
// console.log(assignments);

const manual: ManualFetch = new ManualFetch(token);

await manual.combineAssignmentSubbmition();

app.listen(PORT, () => console.log(`http://localhost:${PORT}`));


app.use('/subbmision', routerCommand);