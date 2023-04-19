import { IOutcomeAPIReciverService } from "../../domain/interfaces/IAPIReciverServices/IOutcomeAPIReciverService";
import { IOutcomeHandler } from "../../domain/interfaces/IDomainEventHandlers/IOutcomeHandler";
import { Outcome } from "../../domain/models/Outcome";

export class OutcomeHandler implements IOutcomeHandler {
    outcomeAPIReciverService: IOutcomeAPIReciverService;

    constructor(outcomeAPIReciverService: IOutcomeAPIReciverService) {
        this.outcomeAPIReciverService = outcomeAPIReciverService;
    }
    async GetStudnetOutcome(idCourse: string, idAssignment: string, studentCanvasId: string): Promise<Outcome> {
        try {
            const outcomeDTO = await this.outcomeAPIReciverService.GetStudnetOutcome(+idCourse, +idAssignment, +studentCanvasId);
            return new Outcome(outcomeDTO);
        } catch (error) {
            let message;
            if (error instanceof Error) message = error.message;
            else message = String(error);
            // we'll proceed, but let's report it
            console.error(message);
            console.log(error);
            return Promise.reject(error);
        }
    }
}