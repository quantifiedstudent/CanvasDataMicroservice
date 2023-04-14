import CourseDTO from "../../infrastructure/dto/CourseDTO";
import Assignment from "./Assignment";

export default class Course {
  id: number;
  name: string;
  account_id: number;
  uuid: string;
  start_at: Date;
  grading_standard_id: number;
  is_public: boolean;
  created_at: Date;
  course_code: string;
  grade_passback_setting: null;
  end_at: null;
  course_color: null;
  friendly_name: null;
  apply_assignment_group_weights: boolean;
  hide_final_grades: boolean;
  assignments: Assignment[];

  constructor(dto: CourseDTO, assignments: Assignment[]) {
    this.id = dto.id;
    this.name = dto.name;
    this.account_id = dto.account_id;
    this.uuid = dto.uuid;
    this.start_at = new Date(dto.start_at);
    this.grading_standard_id = dto.grading_standard_id;
    this.is_public = dto.is_public;
    this.created_at = new Date(dto.created_at);
    this.course_code = dto.course_code;
    this.grade_passback_setting = dto.grade_passback_setting;
    this.end_at = dto.end_at;
    this.course_color = dto.course_color;
    this.friendly_name = dto.friendly_name;
    this.apply_assignment_group_weights = dto.apply_assignment_group_weights;
    this.hide_final_grades = dto.hide_final_grades;
    this.assignments = assignments;
  }
}