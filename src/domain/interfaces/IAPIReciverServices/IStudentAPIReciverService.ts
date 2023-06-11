import StudentDTO from "../../../infrastructure/dto/StudentDTO";

export interface IStudentAPIReciverService {
  GetStudentCanvasIdFromToken(): Promise<number>;
  GetStudentFromToken(): Promise<StudentDTO>;
  GetStudnet(studentUserId: number): Promise<StudentDTO>;
}
