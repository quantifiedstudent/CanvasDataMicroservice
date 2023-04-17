import { IGradeAPIReciverService } from "../../domain/interfaces/IAPIReciverServices/IGradeAPIReciverService";
import { IGradeHandler } from "../../domain/interfaces/IDomainEventHandlers/IGradeHandler";
import { Grade } from "../../domain/models/Grade";

export class GradeHandler implements IGradeHandler {
    gradeAPIReciverService: IGradeAPIReciverService;

    constructor(gradeAPIReciverService: IGradeAPIReciverService) {
        this.gradeAPIReciverService = gradeAPIReciverService;
    }
    async GetStudnetSubmissions(idCourse: number, idAssignment: number, studentCanvasId: number): Promise<Grade> {
        try {
            const gradeDTO = await this.gradeAPIReciverService.GetStudnetGrade(idCourse, idAssignment, studentCanvasId);
            return new Grade(gradeDTO);
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