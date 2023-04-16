import ICourseAPIReciver from "../../domain/interfaces/IAPIReciverServices/ICourseAPIReciver";
import ICourseHandler from "../../domain/interfaces/IDomainEventHandlers/ICourseHandler";
import Course from "../../domain/models/Course";

export class CourseHandler implements ICourseHandler {
  courseAPIReciverService: ICourseAPIReciver;

  constructor(courseAPIReciverService: ICourseAPIReciver) {
    this.courseAPIReciverService = courseAPIReciverService;
  }
  async GetStudnetCourses(studentCanvasId: number): Promise<Course[]> {
    try {
      const coursesDTO = await this.courseAPIReciverService.GetStudnetCourses(
        studentCanvasId
      );
      const courses: Course[] = [];
      for (let courseDTO of coursesDTO) {
        courses.push(new Course(courseDTO));
      }
      return courses;
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
