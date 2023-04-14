import fetch from "node-fetch";
import BaseCanvasAPIReciverService from "../recivers/BaseCanvasReciverService";
import CourseDTO from "../dto/CourseDTO";

export default class CourseAPIReciverService extends BaseCanvasAPIReciverService {
    apiRoute = (studentCanvasId: number) => `/api/v1/users/${studentCanvasId.toString()}/courses`;


    constructor(token: string) {
        super(token);
    }

    async GetStudnetCourses(studentCanvasId: number): Promise<CourseDTO> {
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
          const response = await fetch(this.url + this.apiRoute(studentCanvasId), options);
          const data = await response.json();
          return <CourseDTO>data;
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









