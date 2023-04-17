import { ISubbmisionHandler } from "../../domain/interfaces/IDomainEventHandlers/ISubbmisionHandler";
import ISubmissionAPIReciverService from "../../domain/interfaces/IAPIReciverServices/ISubmissionAPIReciverService";
import { Submission } from "../../domain/models/Submission";

export class SubbmisionHandler implements ISubbmisionHandler {
    submissionAPIReciverService: ISubmissionAPIReciverService;

    constructor(submissionAPIReciverService: ISubmissionAPIReciverService) {
        this.submissionAPIReciverService = submissionAPIReciverService;
    }
    async GetStudnetSubmissions(idCourse: number, idAssignment: number, studentCanvasId: number): Promise<Submission> {
        try {
            const submissionDTO = await this.submissionAPIReciverService.GetStudnetSubmissions(idCourse, idAssignment, studentCanvasId);
            return new Submission(submissionDTO);
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
