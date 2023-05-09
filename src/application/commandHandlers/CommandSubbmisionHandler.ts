import express from "express";
import GetPrivateToken from "../../GettingToken";
import SubmissionAPIReciverService from "../../infrastructure/recivers/SubmissionAPIReciverService";
import { SubbmisionHandler } from "../domainEventsHandlers/SubbmisionHandler";

const router = express.Router();

const submissionAPIReciverService = new SubmissionAPIReciverService(GetPrivateToken());
const subbmisionHandler = new SubbmisionHandler(submissionAPIReciverService);



router.get('/course/:courseId/student/:studentId/assignment/:assignmentsId', async function (req, res) {
    res.setHeader('Content-Type', 'application/json');
    try {
        res.json(await subbmisionHandler.GetStudnetSubmissions(req.params.courseId, req.params.assignmentsId, req.params.studentId));
    } catch (err) {
        res.status(500);
        res.json(err);
    }
});

export default router;

