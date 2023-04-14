import fetch from "node-fetch";
import BaseCanvasAPIReciverService from "../recivers/BaseCanvasReciverService";

export default class SubmissionAPIReciverService extends BaseCanvasAPIReciverService {

    //We dont have premission for seeing submissions

    apiRoute = (idCourse: number, idAssignment: number) => `/api/v1/courses/${idCourse.toString()}/assignments/${idAssignment.toString()}/submissions`;

    constructor(token: string) {
        super(token);
    }

    async GetStudnetAssignments(idCourse: number, idAssignment: number) {
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
            const response = await fetch(this.url + this.apiRoute(idCourse, idAssignment), options);
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