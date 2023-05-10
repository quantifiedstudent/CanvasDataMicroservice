import { IGradeHandler } from "../../domain/interfaces/IDomainEventHandlers/IGradeHandler";
import Assignment from "../../domain/models/Assignment";
import { Grade, Rubric_GradedCriteria } from "../../domain/models/Grade";
import Submission from "../../domain/models/Submission";
import AssignmentAPIReciverService from "../../infrastructure/recivers/AssignmentAPIReciverService";
import SubmissionAPIReciverService from "../../infrastructure/recivers/SubmissionAPIReciverService";
import { AssignmentHandler } from "./AssignmentHandler";
import { SubbmisionHandler } from "./SubbmisionHandler";

export class GradeHandler implements IGradeHandler {

    async GetGradedCriteriaAsGrade(assignment: Assignment, submission: Submission): Promise<Grade> {
        let rubric_gradedCriterias: Rubric_GradedCriteria[] = [];
        try {
            for (let rubric of assignment.rubric) {
                if (submission.full_rubric_assessment != null) {
                    for (let criteria of submission.full_rubric_assessment.criterias) {
                        if (rubric.id == criteria.criterion_id) {
                            rubric_gradedCriterias.push(new Rubric_GradedCriteria(criteria, rubric))
                        }
                    }
                }
            }
            return new Grade(rubric_gradedCriterias, assignment.id, submission.id)

        } catch (error) {
            let message;
            if (error instanceof Error) message = error.message;
            else message = String(error);
            // we'll proceed, but let's report it
            console.error(message);
            console.log(error);
            return Promise.reject(error);
        }
    }

    async GetGradedCriteriaAsSubmission(assignment: Assignment, submission: Submission): Promise<Submission> {

        try {
            for (let rubric of assignment.rubric) {
                if (submission.full_rubric_assessment != null) {
                    for (let criteria of submission.full_rubric_assessment.criterias) {
                        if (rubric.id == criteria.criterion_id) {
                            criteria.setMaxPoints(rubric.maxPoints);
                        }
                    }
                }
            }
            return submission;

        } catch (error) {
            let message;
            if (error instanceof Error) message = error.message;
            else message = String(error);
            // we'll proceed, but let's report it
            console.error(message);
            console.log(error);
            return Promise.reject(error);
        }
    }

}
