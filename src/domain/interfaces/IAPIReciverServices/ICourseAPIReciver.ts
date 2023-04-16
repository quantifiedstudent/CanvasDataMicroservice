import CourseDTO from "../../../infrastructure/dto/CourseDTO";

export default interface ICourseAPIReciver{
    GetStudnetCourses(studentCanvasId: number): Promise<CourseDTO[]>;
}