import OutcomeDTO from "../../../infrastructure/dto/OutcomeDTO";

export interface IOutcomeAPIReciverService {
    GetStudnetOutcome(idCourse: number, idAssignment: number, studentCanvasId: number): Promise<OutcomeDTO>
}