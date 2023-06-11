import GetPrivateToken from "../../GettingToken";
import express from "express";
import { IStudentAPIReciverService } from "../../domain/interfaces/IAPIReciverServices/IStudentAPIReciverService";
import { IStudentHandler } from "../../domain/interfaces/IDomainEventHandlers/IStudentHandler";
import StudentAPIReciverService from "../../infrastructure/recivers/StudentAPIReciverService";
import { StudentHandler } from "../domainEventsHandlers/StudentHandler";

const studentAPIReciverService = new StudentAPIReciverService(GetPrivateToken());
const studentHandler = new StudentHandler(studentAPIReciverService);

const router = express.Router()

router.get('/selfId', async function (req, res) {
  res.setHeader('Content-Type', 'application/json');
  try {
    res.json(await studentHandler.GetStudentCanvasIdFromToken());
  } catch (err) {
    res.status(500);
    res.json(err);
  }
});

router.get('/self', async function (req, res) {
  res.setHeader('Content-Type', 'application/json');
  try {
    res.json(await studentHandler.GetStudentFromToken());
  } catch (err) {
    res.status(500);
    res.json(err);
  }
});

router.get('/:studentUserCanvasId', async function (req, res) {
  res.setHeader('Content-Type', 'application/json');
  try {
    res.json(await studentHandler.GetStudnet(req.params.studentUserCanvasId));
  } catch (err) {
    res.status(500);
    res.json(err);
  }
});



export default router;