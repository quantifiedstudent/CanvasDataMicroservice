export default interface AssignmentDTO {
    id: number;
    description: string;
    due_at: null;
    unlock_at: null;
    lock_at: null;
    points_possible: number;
    grading_type: string;
    assignment_group_id: number;
    grading_standard_id: number;
    created_at: Date;
    updated_at: Date;
    peer_reviews: boolean;
    automatic_peer_reviews: boolean;
    position: number;
    grade_group_students_individually: boolean;
    anonymous_peer_reviews: boolean;
    group_category_id: null;
    post_to_sis: boolean;
    moderated_grading: boolean;
    omit_from_final_grade: boolean;
    intra_group_peer_reviews: boolean;
    anonymous_instructor_annotations: boolean;
    anonymous_grading: boolean;
    graders_anonymous_to_graders: boolean;
    grader_count: number;
    grader_comments_visible_to_graders: boolean;
    final_grader_id: null;
    grader_names_visible_to_final_grader: boolean;
    allowed_attempts: number;
    annotatable_attachment_id: null;
    secure_params: string;
    lti_context_id: string;
    course_id: number;
    name: string;
    submission_types: string[];
    has_submitted_submissions: boolean;
    due_date_required: boolean;
    max_name_length: number;
    in_closed_grading_period: boolean;
    graded_submissions_exist: boolean;
    is_quiz_assignment: boolean;
    can_duplicate: boolean;
    original_course_id: null;
    original_assignment_id: null;
    original_lti_resource_link_id: null;
    original_assignment_name: null;
    original_quiz_id: null;
    workflow_state: string;
    important_dates: boolean;
    muted: boolean;
    html_url: string;
    use_rubric_for_grading: boolean;
    free_form_criterion_comments: boolean;
    rubric: Rubric[];
    rubric_settings: RubricSettings;
    published: boolean;
    only_visible_to_overrides: boolean;
    locked_for_user: boolean;
    submissions_download_url: string;
    post_manually: boolean;
    anonymize_students: boolean;
    require_lockdown_browser: boolean;
    restrict_quantitative_data: boolean;
}

export interface Rubric {
    id: string;
    points: number;
    description: string;
    long_description: string;
    ignore_for_scoring: boolean;
    criterion_use_range: boolean;
    ratings: Rating[];
    outcome_id: number;
    vendor_guid: null;
}

export interface Rating {
    id: string;
    points: number;
    description: Description;
    long_description: string;
}

export enum Description {
    Advanced = "Advanced",
    Beginning = "Beginning",
    Orienting = "Orienting",
    Proficient = "Proficient",
    Undefiend = "Undefiend",
}

export interface RubricSettings {
    id: number;
    title: string;
    points_possible: number;
    free_form_criterion_comments: boolean;
    hide_score_total: boolean;
    hide_points: boolean;
}
