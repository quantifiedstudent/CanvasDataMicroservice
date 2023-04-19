import Assignment from "../../models/Assignment";

export default interface IAssignmentHandler {
    GetStudnetAssignments(studentCanvasId: string, courseId: string): Promise<Assignment[]>;
    GetStudnetAssignmentById(courseId: string, assignmentId: string): Promise<Assignment>;
}