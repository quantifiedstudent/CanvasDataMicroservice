import fetch from "node-fetch";
import BaseCanvasAPIReciverService from "./BaseCanvasReciverService";
import SubmissionDTO from "../dto/SubmissionDTO";
import ISubmissionAPIReciverService from "../../domain/interfaces/IAPIReciverServices/ISubmissionAPIReciverService";
export default class SubmissionAPIReciverService extends BaseCanvasAPIReciverService implements ISubmissionAPIReciverService {
    apiRoute = (CourseId: number, assignmentId: number, studentCanvasId: number) => `/api/v1/courses/${CourseId.toString()}/assignments/${assignmentId.toString()}/submissions/${studentCanvasId.toString()}?include=full_rubric_assessment`;
    apiRouteCombined = (CourseId: number) => `/api/v1/courses/${CourseId.toString()}/students/submissions?include[]=assignment&include[]=full_rubric_assessment`;

    constructor(token: string) {
        super(token);
    }

    async GetStudnetSubmissions(CourseId: number, assignmentId: number, studentCanvasId: number): Promise<SubmissionDTO> {
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
            const response = await fetch(this.url + this.apiRoute(CourseId, assignmentId, studentCanvasId), options);
            const data = await response.json();
            return <SubmissionDTO>data;
        } catch (error) {
            let message;
            if (error instanceof Error) message = error.message;
            else message = String(error);
            // we'll proceed, but let's report it
            console.error(message);
            return Promise.reject(error);
        }
    }
    

    async GetStudnetSubmissionsWithAssignments(courseId: number): Promise<SubmissionDTO[]> {
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
            const response = await fetch(this.url + this.apiRouteCombined(courseId), options);
            const data = await response.json();

            for(const submissionDTO of <SubmissionDTO[]>data)
            {
                submissionDTO.courseId = courseId;
            }

            return <SubmissionDTO[]>data;
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