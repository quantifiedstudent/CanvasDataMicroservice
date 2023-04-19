import StudentDTO from "../../../infrastructure/dto/StudentDTO";

export interface IStudentAPIReciverService {
  GetStudnet(studentUserId: number): Promise<StudentDTO>;
  GetStudentCanvasIdFromToken(): Promise<number>;
}
