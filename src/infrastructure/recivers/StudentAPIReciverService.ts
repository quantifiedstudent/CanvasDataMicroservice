import fetch from "node-fetch";
import BaseCanvasAPIReciverService from "../recivers/BaseCanvasReciverService";
import StudentDTO from "../dto/StudentDTO";

export default class StudentAPIReciverService extends BaseCanvasAPIReciverService {
  apiRoute = "/api/v1/users/self?=";

  constructor(token: string) {
    super(token);
  }

  async GetStudnet(): Promise<StudentDTO> {
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
      const response = await fetch(this.url + this.apiRoute, options);
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
}
