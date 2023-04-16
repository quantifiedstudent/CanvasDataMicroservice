import ICourseAPIReciver from "../../domain/interfaces/IAPIReciverServices/ICourseAPIReciver";
import ICourseHandler from "../../domain/interfaces/IDomainEventHandlers/ICourseHandler";
import Course from "../../domain/models/Course";
import CourseAPIReciverService from "../../infrastructure/recivers/CourseAPIReciver";
import { CourseHandler } from "../domainEventsHandlers/CourseHandler";

export class CommandCourseHandler {
    courseHandler: ICourseHandler;
    courseAPIReciverService: ICourseAPIReciver;
  
    constructor(token: string) {
      this.courseAPIReciverService = new CourseAPIReciverService(token);
      this.courseHandler = new CourseHandler(this.courseAPIReciverService);
    }
    async GetStudnetCourses(courseCanvasId: number): Promise<Course[]> {
      try {
        return await this.courseHandler.GetStudnetCourses(courseCanvasId);
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