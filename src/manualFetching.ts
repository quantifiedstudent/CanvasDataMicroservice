import fetch from "node-fetch";
import BaseCanvasAPIReciverService from "./infrastructure/recivers/BaseCanvasReciverService";
import StudentDTO from "./infrastructure/dto/StudentDTO";

export default class ManualFetch extends BaseCanvasAPIReciverService {
    // GET /api/v1/courses/:course_id/assignments/:assignment_id/submissions/:user_id
  url = "https://fhict.instructure.com/api/v1/courses/12886/assignments/216054/submissions/24412";
  // url = "https://fhict.instructure.com/api/v1/users/self";
  constructor(token: string) {
    super(token);
  }

  async GetAssignmet() {
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
      const response = await fetch(this.url, options);
      const data = await response.json();
      console.log(data);
    } catch (error) {
      let message;
      if (error instanceof Error) message = error.message;
      else message = String(error);
      // we'll proceed, but let's report it
      console.error(message);
      console.log(error);
    }
  }
}
