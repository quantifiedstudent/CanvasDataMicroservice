import { Student } from "../../models/Student";

export interface IStudentHandler {
  GetStudnet(): Promise<Student>;
  GetStudentCanvasId(): Promise<number>;
}
