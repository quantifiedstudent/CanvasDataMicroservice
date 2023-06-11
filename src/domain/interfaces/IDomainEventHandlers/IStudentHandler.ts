import { Student } from "../../models/Student";

export interface IStudentHandler {
  GetStudentCanvasIdFromToken(): Promise<number>;
  GetStudentFromToken(): Promise<Student>;
  GetStudnet(studentUserId: string): Promise<Student>;
}
