import { ISubbmisionHandler } from "../../domain/interfaces/IDomainEventHandlers/ISubbmisionHandler";
import ISubmissionAPIReciverService from "../../domain/interfaces/IAPIReciverServices/ISubmissionAPIReciverService";
import Submission from "../../domain/models/Submission";

export class SubbmisionHandler implements ISubbmisionHandler {
    submissionAPIReciverService: ISubmissionAPIReciverService;

    constructor(submissionAPIReciverService: ISubmissionAPIReciverService) {
        this.submissionAPIReciverService = submissionAPIReciverService;
    }
    async GetStudnetSubmissions(courseId: string, assignmentId: string, studentCanvasId: string): Promise<Submission> {
        try {
            const submissionDTO = await this.submissionAPIReciverService.GetStudnetSubmissions(+courseId, +assignmentId, +studentCanvasId);
            submissionDTO.courseId = +courseId;
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
    async GetStudnetSubmissionsWithAssignments(courseId: string): Promise<Submission[]>{
        try {
            const subbmisions:Submission[] = []
            const submissionsDTO = await this.submissionAPIReciverService.GetStudnetSubmissionsWithAssignments(+courseId);
            for(const submissionDTO of submissionsDTO)
            {
                subbmisions.push(new Submission(submissionDTO))
            }
            return subbmisions;
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
