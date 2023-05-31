import express from "express";
import AssignmentAPIReciverService from "../../infrastructure/recivers/AssignmentAPIReciverService";
import GetPrivateToken from "../../GettingToken";
import { AssignmentHandler } from "../domainEventsHandlers/AssignmentHandler";
import SubmissionAPIReciverService from "../../infrastructure/recivers/SubmissionAPIReciverService";
import { SubbmisionHandler } from "../domainEventsHandlers/SubbmisionHandler";
import { GradeHandler } from "../domainEventsHandlers/GradeHandler";
import Assignment from "../../domain/models/Assignment";
import Submission from "../../domain/models/Submission";

const router = express.Router();

const assignmentAPIReciverService = new AssignmentAPIReciverService(GetPrivateToken());
const assignmentHandler = new AssignmentHandler(assignmentAPIReciverService);
const submissionAPIReciverService = new SubmissionAPIReciverService(GetPrivateToken());
const subbmisionHandler = new SubbmisionHandler(submissionAPIReciverService);
const gradeHandler = new GradeHandler();


router.get('/gradeObject/course/:courseId/assignment/:assignmentId/student/:studentId', async function (req, res) {
    res.setHeader('Content-Type', 'application/json');
    try {
        let courseId: string = req.params.courseId;
        let assignmentId: string = req.params.assignmentId;
        let studentId: string = req.params.studentId;
        const assignment: Assignment = await assignmentHandler.GetStudnetAssignmentById(courseId, assignmentId);
        const submission: Submission = await subbmisionHandler.GetStudnetSubmissions(courseId, assignmentId, studentId);
        res.json(await gradeHandler.GetGradedCriteriaAsGrade(assignment, submission));
    } catch (err) {
        res.status(500);
        res.json(err);
    }
});

router.get('/submissionObject/course/:courseId/assignment/:assignmentId/student/:studentId', async function (req, res) {
    res.setHeader('Content-Type', 'application/json');
    try {
        const start = new Date().getTime();
        let courseId: string = req.params.courseId;
        let assignmentId: string = req.params.assignmentId;
        let studentId: string = req.params.studentId;
        const assignment: Assignment = await assignmentHandler.GetStudnetAssignmentById(courseId, assignmentId);
        const submission: Submission = await subbmisionHandler.GetStudnetSubmissions(courseId, assignmentId, studentId);
        res.json(await gradeHandler.GetGradedCriteriaAsSubmission(assignment, submission));
        console.log(`${(new Date().getTime() - start)/1000}s API Call`);
    } catch (err) {
        res.status(500);
        res.json(err);
    }
});

router.get('/submissionObjects/course/:courseId/student/:studentId', async function (req, res) {
    res.setHeader('Content-Type', 'application/json');
    try {
        let courseId: string = req.params.courseId;
        const submissionsWithAssignments = await subbmisionHandler.GetStudnetSubmissionsWithAssignments(courseId);
        const gradedSubmissions: Submission[] = [];
        for(let submissionWithAssignment of submissionsWithAssignments)
        {
            if (submissionWithAssignment.assignment)
                gradedSubmissions.push(await gradeHandler.GetGradedCriteriaAsSubmission(submissionWithAssignment.assignment, submissionWithAssignment))
        }
        res.json(gradedSubmissions);
    } catch (err) {
        res.status(500);
        res.json(err);
    }
});

export default router;