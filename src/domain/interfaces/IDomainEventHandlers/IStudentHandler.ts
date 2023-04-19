import { Student } from "../../models/Student";

export interface IStudentHandler {
  GetStudnet(studentUserId: string): Promise<Student>;
  GetStudentCanvasIdFromToken(): Promise<number>;
}
