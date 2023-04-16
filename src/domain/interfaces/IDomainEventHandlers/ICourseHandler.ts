import Course from "../../models/Course";

export default interface ICourseHandler{
    GetStudnetCourses(studentCanvasId: number): Promise<Course[]>;
}