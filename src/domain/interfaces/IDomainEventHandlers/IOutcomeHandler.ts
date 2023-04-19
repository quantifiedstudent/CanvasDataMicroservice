import { Outcome } from "../../models/Outcome";

export interface IOutcomeHandler {
    GetStudnetOutcome(idCourse: string, idAssignment: string, studentCanvasId: string): Promise<Outcome>
}