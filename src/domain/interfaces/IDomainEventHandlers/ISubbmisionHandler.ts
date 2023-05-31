import Submission from "../../models/Submission";

export interface ISubbmisionHandler {
    GetStudnetSubmissions(idCourse: string, idAssignment: string, studentCanvasId: string): Promise<Submission>
    GetStudnetSubmissionsWithAssignments(courseId: string): Promise<Submission[]>
}