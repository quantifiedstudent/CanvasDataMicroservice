import SubmissionDTO from "../../infrastructure/dto/SubmissionDTO"

export class Submission {

    public id: number
    public grade: string
    public score: number
    public submitted_at: null
    public assignment_id: number
    public user_id: number
    public submission_type: null
    public workflow_state: string
    public grade_matches_current_submission: Boolean
    public graded_at: Date
    public grader_id: number
    public attempt: null
    public excused: boolean
    public late_policy_status: null
    public points_deducted: null
    public grading_period_id: null
    public extra_attempts: null
    public posted_at: Date
    public redo_request: Boolean
    public late: Boolean
    public missing: Boolean
    public seconds_late: number
    public entered_grade: string
    public entered_score: number

    constructor(
        submissionDTO: SubmissionDTO
    ) {
        this.id = submissionDTO.id;
        this.grade = submissionDTO.grade;
        this.score = submissionDTO.score;
        this.submitted_at = submissionDTO.submitted_at;
        this.assignment_id = submissionDTO.assignment_id;
        this.user_id = submissionDTO.user_id;
        this.submission_type = submissionDTO.submission_type;
        this.workflow_state = submissionDTO.workflow_state;
        this.grade_matches_current_submission = submissionDTO.grade_matches_current_submission;
        this.graded_at = submissionDTO.graded_at;
        this.grader_id = submissionDTO.grader_id;
        this.attempt = submissionDTO.attempt;
        this.excused = submissionDTO.excused;
        this.late_policy_status = submissionDTO.late_policy_status;
        this.points_deducted = submissionDTO.points_deducted;
        this.grading_period_id = submissionDTO.grading_period_id;
        this.extra_attempts = submissionDTO.extra_attempts;
        this.posted_at = submissionDTO.posted_at;
        this.redo_request = submissionDTO.redo_request;
        this.late = submissionDTO.late;
        this.missing = submissionDTO.missing;
        this.seconds_late = submissionDTO.seconds_late;
        this.entered_grade = submissionDTO.entered_grade;
        this.entered_score = submissionDTO.entered_score;


    }

}