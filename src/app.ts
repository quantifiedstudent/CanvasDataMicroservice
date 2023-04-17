import * as fs from "fs";
import AssignmentAPIReciverService from "./infrastructure/recivers/AssignmentAPIReciverService";
import SubmissionAPIReciverService from "./infrastructure/recivers/SubmissionAPIReciverService";
import CourseAPIReciverService from "./infrastructure/recivers/CourseAPIReciver";
import ManualFetch from "./manualFetching";
import { CommandStudentHandler } from "./application/commandHandlers/CommandStudentHandler";
import { CommandCourseHandler } from "./application/commandHandlers/CommandCourseHandler";
import { CommandAssignmentHandler } from "./application/commandHandlers/CommandAssignmentHandler";
import express from "express";
import routerCommand from './application/commandHandlers/CommandSubbmisionHandler'


console.log("Hello world");
// EXPRESS CONFIG
const app = express();
// const PORT:number = parseInt(process.env.PORT) || 8080;
const PORT: number = 7000;

// Middleware that parses body to JSON format
app.use(express.json());



app.get("/", (req, res) => {
  res.status(200).send("welcome to the website");
});

function GetPrivateToken(): string {
  try {
    const token = fs.readFileSync("./src/PrivateToken.txt", "utf-8");
    return token;
  } catch (err) {
    throw err;
  }
}

const token = GetPrivateToken();




const manual: ManualFetch = new ManualFetch(token);



app.listen(PORT, () => console.log(`http://localhost:${PORT}`));


app.use('/GetSubbmision', routerCommand);