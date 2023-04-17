import ISubmissionAPIReciverService from "../../domain/interfaces/IAPIReciverServices/ISubmissionAPIReciverService";
import { ISubbmisionHandler } from "../../domain/interfaces/IDomainEventHandlers/ISubbmisionHandler";
import SubmissionAPIReciverService from "../../infrastructure/recivers/SubmissionAPIReciverService";
import { SubbmisionHandler } from "../domainEventsHandlers/SubbmisionHandler";
import express from "express";

const router = express.Router();


router.get('/GetSubbmision', function (req, res) {
    res.status(200).send("welcome to the subbmissions");
});

module.exports = router;

