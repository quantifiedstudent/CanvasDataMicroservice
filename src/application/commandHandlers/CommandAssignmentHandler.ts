import express from "express";

import GetPrivateToken from "../../GettingToken";
import AssignmentAPIReciverService from "../../infrastructure/recivers/AssignmentAPIReciverService";
import { AssignmentHandler } from "../domainEventsHandlers/AssignmentHandler";


const router = express.Router();

const assignmentAPIReciverService = new AssignmentAPIReciverService(GetPrivateToken());
const assignmentHandler = new AssignmentHandler(assignmentAPIReciverService);



router.get('/course/:courseId/assignment/:assignmentId', async function (req, res) {
  res.setHeader('Content-Type', 'application/json');
  try {
    res.json(await assignmentHandler.GetStudnetAssignmentById(req.params.courseId, req.params.assignmentId));
  } catch (err) {
    res.status(500);
    res.json(err);
  }
});

router.get('/course/:courseId/student/:studnetId', async function (req, res) {
  res.setHeader('Content-Type', 'application/json');
  try {
    res.json(await assignmentHandler.GetStudnetAssignments(req.params.studnetId, req.params.courseId));
  } catch (err) {
    res.status(500);
    res.json(err);
  }
});

export default router;

