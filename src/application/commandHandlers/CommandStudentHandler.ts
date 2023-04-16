import { IStudentAPIReciverService } from "../../domain/interfaces/IAPIReciverServices/IStudentAPIReciverService";
import { IStudentHandler } from "../../domain/interfaces/IDomainEventHandlers/IStudentHandler";
import { Student } from "../../domain/models/Student";
import StudentAPIReciverService from "../../infrastructure/recivers/StudentAPIReciverService";
import { StudentHandler } from "../domainEventsHandlers/StudentHandler";

export class CommandStudentHandler {
    studentHandler: IStudentHandler;
    studentAPIReciverService: IStudentAPIReciverService;
  
    constructor(token: string) {
      this.studentAPIReciverService = new StudentAPIReciverService(token);
      this.studentHandler = new StudentHandler(this.studentAPIReciverService);
    }
    async GetStudnet(): Promise<Student> {
      try {
        return await this.studentHandler.GetStudnet();
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
        return await this.studentHandler.GetStudentCanvasId()
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