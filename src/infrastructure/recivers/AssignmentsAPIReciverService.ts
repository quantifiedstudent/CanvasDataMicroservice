import fetch from "node-fetch";
import BaseCanvasAPIReciverService from "../recivers/BaseCanvasReciverService";
import AssignmentDTO from "../dto/AssignmentDTO";

export default class AssignmentsAPIReciverService extends BaseCanvasAPIReciverService {

  apiRoute = (id: number) => `/api/v1/courses/${id.toString()}/assignments`;

  constructor(token: string) {
    super(token);
  }

  async GetStudnetAssignments(idCourse: number): Promise<AssignmentDTO> {
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
      const response = await fetch(this.url + this.apiRoute(idCourse), options);
      const data = await response.json();
      return <AssignmentDTO>data;
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
