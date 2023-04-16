import fetch from "node-fetch";
import BaseCanvasAPIReciverService from "./BaseCanvasReciverService";

export default class SubmissionAPIReciverService extends BaseCanvasAPIReciverService {

    //We dont have premission for seeing submissions

    // we have michael, if we use user_id
    // GET /api/v1/courses/:course_id/assignments/:assignment_id/submissions/:user_id

    apiRoute = (idCourse: number, idAssignment: number , studentCanvasId: number) => `/api/v1/courses/${idCourse.toString()}/assignments/${idAssignment.toString()}/submissions/${studentCanvasId.toString()}`;

    constructor(token: string) {
        super(token);
    }

    async GetStudnetSubmissions(idCourse: number, idAssignment: number, studentCanvasId: number) {
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
            const response = await fetch(this.url + this.apiRoute(idCourse, idAssignment, studentCanvasId), options);
            const data = await response.json();
            return data;
        } catch (error) {
            let message;
            if (error instanceof Error) message = error.message;
            else message = String(error);
            // we'll proceed, but let's report it
            console.error(message);
            return error;
        }
    }

}