import fetch from "node-fetch";
import BaseCanvasAPIReciverService from "./BaseCanvasReciverService";
import AssignmentDTO from "../dto/AssignmentDTO";
import IAssignmentAPIReciver from "../../domain/interfaces/IAPIReciverServices/IAssignmentAPIReciver";

export default class AssignmentAPIReciverService extends BaseCanvasAPIReciverService implements IAssignmentAPIReciver{
  apiRoute = (studentCanvasId: number, courseId: number) => `/api/v1/users/${studentCanvasId.toString()}/courses/${courseId.toString()}/assignments`;

  constructor(token: string) {
    super(token);
  }

  async GetStudnetAssignments(studentCanvasId: number, courseId: number): Promise<AssignmentDTO[]> {
    const header = {
      headers: {
        Authorization: `Bearer ${this.token}`,
      },
    };

    const options = {
      method: "GET",
      ...header,
    };

    try {
      const response = await fetch(this.url + this.apiRoute(studentCanvasId, courseId), options);
      const data = await response.json();
      const assignmentsDTO: AssignmentDTO[] = [];
      for(let assignmentDTO of <AssignmentDTO[]>data)
      {
        assignmentsDTO.push(<AssignmentDTO>assignmentDTO)
      }
      return assignmentsDTO;
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
