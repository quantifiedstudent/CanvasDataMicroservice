import express from "express";
import GetPrivateToken from "../../GettingToken";
import SubmissionAPIReciverService from "../../infrastructure/recivers/SubmissionAPIReciverService";
import { SubbmisionHandler } from "../domainEventsHandlers/SubbmisionHandler";

const router = express.Router();

const submissionAPIReciverService = new SubmissionAPIReciverService(GetPrivateToken());
const subbmisionHandler = new SubbmisionHandler(submissionAPIReciverService);

router.get('/:courseID/:userID/assigment/:assigmnrtID', function (req, res) {
    res.status(200).send("");
});

export default router;

