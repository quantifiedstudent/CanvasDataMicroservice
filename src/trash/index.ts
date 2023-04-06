import fetch from "node-fetch";
import {User, Permissions} from "./studentDTO";

// account_id = 24412

const headers = {
  Authorization:
    "Bearer ",
};

let url = "https://fhict.instructure.com/api/v1/users/self?=";

let options = {
  method: "GET",
  headers,
};
async function MyFunction(): Promise<User> {
  try {
    const response = await fetch(url, options);
    const data = await response.json();
    const student = <User>data
    return student
  } catch (error) {
    let message;
    if (error instanceof Error) message = error.message;
    else message = String(error);
    // we'll proceed, but let's report it
    console.error(message);
    return Promise.reject(error)
  }
}


class StudentAPIReciverService {
  token: string;
  studentCanvasId = "";

  constructor(token: string) {
    this.token = token;
  }

  async init() {
    this.studentCanvasId = await this.GetStudnetCanvasId()
  }

  async GetStudnetCanvasId(): Promise<string> {
    const headers = {
      Authorization:
        "Bearer ",
    };

    const url = "https://fhict.instructure.com/api/v1/users/self?=";

    const options = {
      method: "GET",
      headers,
    };
    let StudnetCanvasId: string;
    try {
      const response = await fetch(url, options);
      const data = await response.json();
      console.log(data)
      StudnetCanvasId = (<any>data).id as string;
    } catch (error) {
      let message;
      if (error instanceof Error) message = error.message;
      else message = String(error);
      // we'll proceed, but let's report it
      console.error(message);
      StudnetCanvasId = "";
    }

    return StudnetCanvasId;
  }
}

const studentAPIReciverService = new StudentAPIReciverService(headers.Authorization)

await studentAPIReciverService.init()

console.log(studentAPIReciverService.studentCanvasId)

console.log(await MyFunction())