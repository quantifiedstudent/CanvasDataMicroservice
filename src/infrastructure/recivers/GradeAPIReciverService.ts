import fetch from "node-fetch";
import BaseCanvasAPIReciverService from "./BaseCanvasReciverService";
import { IGradeAPIReciverService } from "../../domain/interfaces/IAPIReciverServices/IGradeAPIReciverService";
import GradeDTO from "../dto/GradeDTO";


export default class GradeAPIReciverService extends BaseCanvasAPIReciverService implements IGradeAPIReciverService {

    //I have no idea how to access this shit, I got premission denied every fucking time 

    apiRoute = (idCourse: number, idAssignment: number, studentCanvasId: number) => `/api/v1/courses/${idCourse.toString()}/assignments/${idAssignment.toString()}/submissions/${studentCanvasId.toString()}`;

    constructor(token: string) {
        super(token);
    }

    async GetStudnetGrade(idCourse: number, idAssignment: number, studentCanvasId: number): Promise<GradeDTO> {
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
            return <GradeDTO>data;
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