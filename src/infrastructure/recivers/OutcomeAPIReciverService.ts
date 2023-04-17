import fetch from "node-fetch";
import BaseCanvasAPIReciverService from "./BaseCanvasReciverService";
import OutcomeDTO from "../dto/OutcomeDTO";
import { IOutcomeAPIReciverService } from "../../domain/interfaces/IAPIReciverServices/IOutcomeAPIReciverService";
export default class OutcomeAPIReciverService extends BaseCanvasAPIReciverService implements IOutcomeAPIReciverService {

    //I have no idea how to access outcome either itself or from rubric

    apiRoute = (idCourse: number, idAssignment: number, studentCanvasId: number) => `/api/v1/courses/${idCourse.toString()}/assignments/${idAssignment.toString()}/submissions/${studentCanvasId.toString()}`;

    constructor(token: string) {
        super(token);
    }

    async GetStudnetOutcome(idCourse: number, idAssignment: number, studentCanvasId: number): Promise<OutcomeDTO> {
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
            return <OutcomeDTO>data;
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