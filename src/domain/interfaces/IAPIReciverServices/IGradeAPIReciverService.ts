import GradeDTO from "../../../infrastructure/dto/GradeDTO";

export interface IGradeAPIReciverService {
    GetStudnetGrade(idCourse: number, idAssignment: number, studentCanvasId: number): Promise<GradeDTO>
}