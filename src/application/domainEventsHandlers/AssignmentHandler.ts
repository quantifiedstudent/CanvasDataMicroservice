import IAssignmentAPIReciver from "../../domain/interfaces/IAPIReciverServices/IAssignmentAPIReciver";
import IAssignmentHandler from "../../domain/interfaces/IDomainEventHandlers/IAssignmentHandler";
import Assignment from "../../domain/models/Assignment";

export class AssignmentHandler implements IAssignmentHandler {
  assignmentAPIReciverService: IAssignmentAPIReciver;

  constructor(assignmentAPIReciverService: IAssignmentAPIReciver) {
    this.assignmentAPIReciverService = assignmentAPIReciverService;
  }
  async GetStudnetAssignments(studentCanvasId: string, courseId: string): Promise<Assignment[]> {
    try {
      const assignmentsDTO = await this.assignmentAPIReciverService.GetStudnetAssignments(
        +studentCanvasId,
        +courseId
      );
      const assignments: Assignment[] = [];
      for (let assignmentDTO of assignmentsDTO) {
        assignments.push(new Assignment(assignmentDTO));
      }
      return assignments;
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

  async GetStudnetAssignmentById(courseId: string, assignmentId: string): Promise<Assignment> {
    try {
      const assignmentsDTO = await this.assignmentAPIReciverService.GetStudnetAssignmentById(
        +courseId,
        +assignmentId
      );
      const assignment: Assignment = new Assignment(assignmentsDTO);
      return assignment;
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