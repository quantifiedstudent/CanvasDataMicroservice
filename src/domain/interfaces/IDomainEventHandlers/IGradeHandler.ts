import { Grade } from "../../models/Grade";


export interface IGradeHandler {
    GetStudnetSubmissions(idCourse: number, idAssignment: number, studentCanvasId: number): Promise<Grade>
}