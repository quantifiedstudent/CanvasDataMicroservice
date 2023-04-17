import Assignment from "../../models/Assignment";

export default interface IAssignmentHandler{
    GetStudnetAssignments(studentCanvasId: number, courseId: number): Promise<Assignment[]>;
    GetStudnetAssignmentById(courseId: number, assignmentId: number): Promise<Assignment>;
}