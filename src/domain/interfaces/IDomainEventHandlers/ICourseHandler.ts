import Course from "../../models/Course";

export default interface ICourseHandler {
    GetStudnetCourses(studentCanvasId: string): Promise<Course[]>;
}