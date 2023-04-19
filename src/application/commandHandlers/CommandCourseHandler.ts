import express from "express";
import CourseAPIReciver from "../../infrastructure/recivers/CourseAPIReciver";
import GetPrivateToken from "../../GettingToken";
import { CourseHandler } from "../domainEventsHandlers/CourseHandler";

const router = express.Router();

const courseAPIReciver = new CourseAPIReciver(GetPrivateToken());
const courseHandler = new CourseHandler(courseAPIReciver);



router.get('/student/:studentId', async function (req, res) {
  res.setHeader('Content-Type', 'application/json');
  try {
    res.json(await courseHandler.GetStudnetCourses(req.params.studentId));
  } catch (err) {
    res.status(500);
    res.json(err);
  }
});

export default router;

