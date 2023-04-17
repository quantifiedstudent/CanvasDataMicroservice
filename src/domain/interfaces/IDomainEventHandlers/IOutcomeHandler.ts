import { Outcome } from "../../models/Outcome";

export interface IOutcomeHandler {
    GetStudnetSubmissions(idCourse: number, idAssignment: number, studentCanvasId: number): Promise<Outcome>
}