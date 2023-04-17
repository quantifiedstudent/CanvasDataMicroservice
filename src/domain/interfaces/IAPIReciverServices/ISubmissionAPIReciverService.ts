import SubmissionDTO from "../../../infrastructure/dto/SubmissionDTO";

export default interface ISubmissionAPIReciverService {
    GetStudnetSubmissions(idCourse: number, idAssignment: number, studentCanvasId: number): Promise<SubmissionDTO>
}