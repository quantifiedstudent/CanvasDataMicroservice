// import { AssignmentDTO, Rubric, Rating, RubricSettings } from "./interfaces";
import AssignmentDTO, { RatingDTO, RubricDTO, RubricSettingsDTO } from "../../infrastructure/dto/AssignmentDTO";

export default class Assignment {
  id: number;
  description: string;
  due_at: Date | null;
  points_possible: number;
  grading_type: string;
  assignment_group_id: number;
  grading_standard_id: number;
  created_at: Date;
  updated_at: Date;
  position: number;
  grade_group_students_individually: boolean;
  moderated_grading: boolean;
  omit_from_final_grade: boolean;
  grader_count: number;
  grader_comments_visible_to_graders: boolean;
  final_grader_id: null | number;
  grader_names_visible_to_final_grader: boolean;
  lti_context_id: string;
  course_id: number;
  name: string;
  submission_types: string[];
  has_submitted_submissions: boolean;
  due_date_required: boolean;
  in_closed_grading_period: boolean;
  graded_submissions_exist: boolean;
  is_quiz_assignment: boolean;
  original_course_id: null | number;
  original_assignment_id: null | number;
  original_assignment_name: null | string;
  original_quiz_id: null | number;
  workflow_state: string;
  important_dates: boolean;
  html_url: string;
  use_rubric_for_grading: boolean;
  rubric: Rubric[];
  rubric_settings: RubricSettings | null;
  published: boolean;

  constructor(dto: AssignmentDTO) {
    this.id = dto.id;
    this.description = dto.description;
    this.due_at = dto.due_at ? new Date(dto.due_at) : null;
    this.points_possible = dto.points_possible;
    this.grading_type = dto.grading_type;
    this.assignment_group_id = dto.assignment_group_id;
    this.grading_standard_id = dto.grading_standard_id;
    this.created_at = new Date(dto.created_at);
    this.updated_at = new Date(dto.updated_at);
    this.position = dto.position;
    this.grade_group_students_individually = dto.grade_group_students_individually;
    this.moderated_grading = dto.moderated_grading;
    this.omit_from_final_grade = dto.omit_from_final_grade;
    this.grader_count = dto.grader_count;
    this.grader_comments_visible_to_graders = dto.grader_comments_visible_to_graders;
    this.final_grader_id = dto.final_grader_id;
    this.grader_names_visible_to_final_grader = dto.grader_names_visible_to_final_grader;
    this.lti_context_id = dto.lti_context_id;
    this.course_id = dto.course_id;
    this.name = dto.name;
    this.submission_types = dto.submission_types;
    this.has_submitted_submissions = dto.has_submitted_submissions;
    this.due_date_required = dto.due_date_required;
    this.in_closed_grading_period = dto.in_closed_grading_period;
    this.graded_submissions_exist = dto.graded_submissions_exist;
    this.is_quiz_assignment = dto.is_quiz_assignment;
    this.original_course_id = dto.original_assignment_id;
    this.original_assignment_id = dto.original_lti_resource_link_id;
    this.original_assignment_name = dto.original_assignment_name;
    this.original_quiz_id = dto.original_quiz_id;
    this.workflow_state = dto.workflow_state;
    this.important_dates = dto.important_dates;
    this.html_url = dto.html_url;
    this.use_rubric_for_grading = dto.free_form_criterion_comments;
    if (dto.rubric != null)
    {
      this.rubric = dto.rubric.map(
        (rubricDTO: RubricDTO) => new Rubric(rubricDTO)
      );
    }
    else{
      this.rubric = [];
    }
    if (dto.rubric_settings != null)
    {
      this.rubric_settings = new RubricSettings(dto.rubric_settings);
    }
    else{
      this.rubric_settings = null;
    }
    this.published = dto.published;
  }
}


export class Rubric {
  id: string;
  maxPoints: number;
  description: string;
  long_description: string;
  ignore_for_scoring: boolean;
  criterion_use_range: boolean;
  ratings: Rating[] = [];
  outcome_id: null | number;
  vendor_guid: null;

  constructor(rubricDTO: RubricDTO) {
    this.id = rubricDTO.id;
    this.maxPoints = rubricDTO.points;
    this.description = rubricDTO.description;
    this.long_description = rubricDTO.long_description;
    this.ignore_for_scoring = rubricDTO.ignore_for_scoring;
    this.criterion_use_range = rubricDTO.criterion_use_range;
    for (let rating of rubricDTO.ratings)
    {
      this.ratings.push(new Rating(rating));
    }
    this.ratings = rubricDTO.ratings;
    this.outcome_id = rubricDTO.outcome_id;
    this.vendor_guid = rubricDTO.vendor_guid;
  }
}

export class Rating {
  id: string;
  points: number;
  description: string;
  long_description: string;

  constructor(ratingDto: RatingDTO) {
    this.id = ratingDto.id;
    this.points = ratingDto.points;
    this.description = ratingDto.description;
    this.long_description = ratingDto.long_description;
  }
}

export class RubricSettings {
  id: number;
  title: string;
  points_possible: number;
  free_form_criterion_comments: boolean;
  hide_score_total: boolean;
  hide_points: boolean;

  constructor(dto: RubricSettingsDTO) {
    this.id = dto.id;
    this.title = dto.title;
    this.points_possible = dto.points_possible;
    this.free_form_criterion_comments = dto.free_form_criterion_comments;
    this.hide_score_total = dto.hide_score_total;
    this.hide_points = dto.hide_points;
  }
}