import { IStudentAPIReciverService } from "../../domain/interfaces/IAPIReciverServices/IStudentAPIReciverService";
import { IStudentHandler } from "../../domain/interfaces/IDomainEventHandlers/IStudentHandler";
import { Student } from "../../domain/models/Student";
import StudentDTO from "../../infrastructure/dto/StudentDTO";

export class StudentHandler implements IStudentHandler {
  studentAPIReciverService: IStudentAPIReciverService;

  constructor(studentAPIReciverService: IStudentAPIReciverService) {
    this.studentAPIReciverService = studentAPIReciverService;
  }
  async GetStudnet(): Promise<Student> {
    try {
      const studentDTO = await this.studentAPIReciverService.GetStudnet();
      return new Student(studentDTO);
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
  async GetStudentCanvasId(): Promise<number> {
    try {
      return await this.studentAPIReciverService.GetStudentCanvasId()
    } catch (error) {
      let message;
      if (error instanceof Error) message = error.message;
      else message = String(error);
      // we'll proceed, but let's report it
      console.error(message);
      return Promise.reject(error);
    }
  }
}
