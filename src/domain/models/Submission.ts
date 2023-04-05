
export class Submission {

    public id: number
    public grade: string
    public score: string
    public submitted_at: string
    public assignment_id: number
    public user_id: number
    public submission_type: string
    public workflow_state: string
    public grade_matches_current_submission: Boolean
    public graded_at: string
    public grader_id: string
    public attempt: string
    public excused: string
    public late_policy_status: string
    public points_deducted: string
    public grading_period_id: string
    public extra_attempts: string
    public posted_at: string
    public redo_request: Boolean
    public late: Boolean
    public missing: Boolean
    public seconds_late: number
    public entered_grade: string
    public entered_score: string

    constructor(
        id: number,
        grade: string,
        score: string,
        submitted_at: string,
        assignment_id: number,
        user_id: number,
        submission_type: string,
        workflow_state: string,
        grade_matches_current_submission: boolean,
        graded_at: string,
        grader_id: string,
        attempt: string,
        excused: string,
        late_policy_status: string,
        points_deducted: string,
        grading_period_id: string,
        extra_attempts: string,
        posted_at: string,
        redo_request: boolean,
        late: boolean,
        missing: boolean,
        seconds_late: number,
        entered_grade: string,
        entered_score: string,
    ) {
        this.id = id;
        this.grade = grade;
        this.score = score;
        this.submitted_at = submitted_at;
        this.assignment_id = assignment_id;
        this.user_id = user_id;
        this.submission_type = submission_type;
        this.workflow_state = workflow_state;
        this.grade_matches_current_submission = grade_matches_current_submission;
        this.graded_at = graded_at;
        this.grader_id = grader_id;
        this.attempt = attempt;
        this.excused = excused;
        this.late_policy_status = late_policy_status;
        this.points_deducted = points_deducted;
        this.grading_period_id = grading_period_id;
        this.extra_attempts = extra_attempts;
        this.posted_at = posted_at;
        this.redo_request = redo_request;
        this.late = late;
        this.missing = missing;
        this.seconds_late = seconds_late;
        this.entered_grade = entered_grade;
        this.entered_score = entered_score;


    }

}