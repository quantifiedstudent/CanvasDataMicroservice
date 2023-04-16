import fetch from "node-fetch";
import BaseCanvasAPIReciverService from "../recivers/BaseCanvasReciverService";
import CourseDTO from "../dto/CourseDTO";
import ICourseAPIReciver from "../../domain/interfaces/IAPIReciverServices/ICourseAPIReciver";

export default class CourseAPIReciverService extends BaseCanvasAPIReciverService implements ICourseAPIReciver{
    apiRoute = (studentCanvasId: number) => `/api/v1/users/${studentCanvasId.toString()}/courses`;


    constructor(token: string) {
        super(token);
    }

    async GetStudnetCourses(studentCanvasId: number): Promise<CourseDTO[]> {
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
          const coursesDTO: CourseDTO[] = [];
          for(let courseDTO of <CourseDTO[]>data)
          {
            coursesDTO.push(<CourseDTO>courseDTO)
          }
          return coursesDTO;
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









