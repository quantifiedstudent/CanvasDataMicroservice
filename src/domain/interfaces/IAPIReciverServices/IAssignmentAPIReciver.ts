import AssignmentDTO from "../../../infrastructure/dto/AssignmentDTO";

export default interface IAssignmentAPIReciver{
    GetStudnetAssignments(studentCanvasId: number, idCourse: number): Promise<AssignmentDTO[]>;
}