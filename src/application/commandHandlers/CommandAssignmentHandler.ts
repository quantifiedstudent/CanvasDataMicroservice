import IAssignmentAPIReciver from "../../domain/interfaces/IAPIReciverServices/IAssignmentAPIReciver";
import IAssignmentHandler from "../../domain/interfaces/IDomainEventHandlers/IAssignmentHandler";
import Assignment from "../../domain/models/Assignment";
import AssignmentAPIReciverService from "../../infrastructure/recivers/AssignmentAPIReciverService";
import { AssignmentHandler } from "../domainEventsHandlers/AssignmentHandler";

export class CommandAssignmentHandler {
   assignmentHandler: IAssignmentHandler;
   assignmentAPIReciverService: IAssignmentAPIReciver;
  
    constructor(token: string) {
      this.assignmentAPIReciverService = new AssignmentAPIReciverService(token);
      this.assignmentHandler = new AssignmentHandler(this.assignmentAPIReciverService);
    }
    async GetStudnetAssignments(studentCanvasId: number, courseId: number): Promise<Assignment[]> {
      try {
        return await this.assignmentHandler.GetStudnetAssignments(studentCanvasId, courseId);
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
  }