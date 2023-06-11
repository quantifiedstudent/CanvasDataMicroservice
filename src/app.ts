import routerCommandStudentHandler from "./application/commandHandlers/CommandStudentHandler";
import express from "express";
import routerCommandSubbmisionHandler from './application/commandHandlers/CommandSubbmisionHandler'
import routerCommandCourseHandler from './application/commandHandlers/CommandCourseHandler';
import routerCommandAssignmentHandler from './application/commandHandlers/CommandAssignmentHandler';
import routerCommandGradeHandler from './application/commandHandlers/CommandGradeHandler';
import GetPrivateToken from './GettingToken';

console.log("Hello world");
// EXPRESS CONFIG
const app = express();
// const PORT:number = parseInt(process.env.PORT) || 8080;
const PORT: number = 7000;

// Middleware that parses body to JSON format
app.use(express.json());

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  next();
  });

const token = GetPrivateToken();

app.get("/", (req, res) => {
  res.status(200).send("welcome to the CamvasDataMicroservice api");
});

app.listen(PORT, () => console.log(`http://localhost:${PORT}`));


app.use('/subbmision', routerCommandSubbmisionHandler);
app.use('/student', routerCommandStudentHandler);
app.use('/course', routerCommandCourseHandler);
app.use('/assignment', routerCommandAssignmentHandler);
app.use('/grade', routerCommandGradeHandler);