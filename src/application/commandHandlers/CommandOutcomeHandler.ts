import express from "express";
import OutcomeAPIReciverService from "../../infrastructure/recivers/OutcomeAPIReciverService";
import { OutcomeHandler } from "../domainEventsHandlers/OutcomeHandler";
import GetPrivateToken from "../../GettingToken";

const outcomeAPIReciverService = new OutcomeAPIReciverService(GetPrivateToken());
const outcomeHandler = new OutcomeHandler(outcomeAPIReciverService);

const router = express.Router()

router.get('/course/:courseId/assignment/:assignmentId/student/:studentId', async function (req, res) {
    res.setHeader('Content-Type', 'application/json');
    try {
        const tt = await outcomeHandler.GetStudnetOutcome(req.params.courseId, req.params.assignmentId, req.params.studentId);

        res.json(tt);
    } catch (err) {
        res.status(500);
        res.json(err);
    }
});

export default router;