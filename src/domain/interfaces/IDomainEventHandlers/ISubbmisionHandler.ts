import Submission from "../../models/Submission";

export interface ISubbmisionHandler {
    GetStudnetSubmissions(idCourse: number, idAssignment: number, studentCanvasId: number): Promise<Submission>
}