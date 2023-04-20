import { Rubric } from "./Assignment";
import { GradedCriteria } from "./Submission"

export class Grade {
    assignmentId: number;
    submissionId: number;
    rubric_gradedCriteria: Rubric_GradedCriteria[];

    constructor(rubric_gradedCriteria: Rubric_GradedCriteria[], assignmentId: number, submissionId: number) {
        this.rubric_gradedCriteria = rubric_gradedCriteria;
        this.submissionId = submissionId;
        this.assignmentId = assignmentId;
    }


}
export class Rubric_GradedCriteria {
    gradedCriteria: GradedCriteria;
    rubric: Rubric;

    constructor(gradedCriteria: GradedCriteria, rubric: Rubric) {
        this.gradedCriteria = gradedCriteria;
        this.rubric = rubric;

    }
}