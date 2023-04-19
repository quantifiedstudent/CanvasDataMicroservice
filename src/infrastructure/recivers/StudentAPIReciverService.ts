import fetch from "node-fetch";
import BaseCanvasAPIReciverService from "../recivers/BaseCanvasReciverService";
import StudentDTO from "../dto/StudentDTO";
import { IStudentAPIReciverService } from "../../domain/interfaces/IAPIReciverServices/IStudentAPIReciverService";

export default class StudentAPIReciverService extends BaseCanvasAPIReciverService implements IStudentAPIReciverService {
  apiRoute = "/api/v1/users/";

  constructor(token: string) {
    super(token);
  }

  async GetStudnet(studentUserId: number): Promise<StudentDTO> {
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
      const parameter = studentUserId;
      const response = await fetch(this.url + this.apiRoute + parameter, options);
      const data = await response.json();
      return <StudentDTO>data;
    } catch (error) {
      let message;
      if (error instanceof Error) message = error.message;
      else message = String(error);
      // we'll proceed, but let's report it
      console.error(message);
      return Promise.reject(error);
    }
  }

  async GetStudentCanvasIdFromToken(): Promise<number> {
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
      const parameter = "self?=";
      const response = await fetch(this.url + this.apiRoute + parameter, options);
      const data = await response.json();
      return (<StudentDTO>data).id;
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
