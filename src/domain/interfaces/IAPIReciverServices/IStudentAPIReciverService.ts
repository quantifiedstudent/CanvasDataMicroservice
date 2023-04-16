import StudentDTO from "../../../infrastructure/dto/StudentDTO";

export interface IStudentAPIReciverService {
  GetStudnet(): Promise<StudentDTO>;
  GetStudentCanvasId(): Promise<number>;
}
