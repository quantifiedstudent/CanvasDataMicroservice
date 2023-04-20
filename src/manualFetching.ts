import fetch from "node-fetch";
import BaseCanvasAPIReciverService from "./infrastructure/recivers/BaseCanvasReciverService";
import AssignmentAPIReciverService from "./infrastructure/recivers/AssignmentAPIReciverService";
import IAssignmentAPIReciver from "./domain/interfaces/IAPIReciverServices/IAssignmentAPIReciver";
import AssignmentDTO from "./infrastructure/dto/AssignmentDTO";
import IAssignmentHandler from "./domain/interfaces/IDomainEventHandlers/IAssignmentHandler";
import { AssignmentHandler } from "./application/domainEventsHandlers/AssignmentHandler";
import Assignment from "./domain/models/Assignment";
import ISubmissionAPIReciverService from "./domain/interfaces/IAPIReciverServices/ISubmissionAPIReciverService";
import SubmissionAPIReciverService from "./infrastructure/recivers/SubmissionAPIReciverService";
import { ISubbmisionHandler } from "./domain/interfaces/IDomainEventHandlers/ISubbmisionHandler";
import { SubbmisionHandler } from "./application/domainEventsHandlers/SubbmisionHandler";
import Submission from "./domain/models/Submission";

export default class ManualFetch extends BaseCanvasAPIReciverService {

  assignmentHandler: IAssignmentHandler;
  assignmentAPIReciverService: IAssignmentAPIReciver;

  submissionAPIReciverService: ISubmissionAPIReciverService;
  subbmisionHandler: ISubbmisionHandler;

  constructor(token: string) {
    super(token);
    this.assignmentAPIReciverService = new AssignmentAPIReciverService(token);
    this.assignmentHandler = new AssignmentHandler(this.assignmentAPIReciverService);
    this.submissionAPIReciverService = new SubmissionAPIReciverService(token);
    this.subbmisionHandler = new SubbmisionHandler(this.submissionAPIReciverService);
  }

  async GetAssignmet(): Promise<Assignment> {
    // Personal Course Assignmet: Personal Project Technology Research
    // const assignment: Assignment = await this.assignmentHandler.GetStudnetAssignmentById(13086, 220337)
    const assignment: Assignment = await this.assignmentHandler.GetStudnetAssignmentById((12525).toString(), (206652).toString())
    // console.log(assignment);
    return assignment
  }

  async GetSubmission(): Promise<Submission> {
    // const submission: Submission = await this.subbmisionHandler.GetStudnetSubmissions(13086, 220337, 24412)
    const submission: Submission = await this.subbmisionHandler.GetStudnetSubmissions((12525).toString(), (206652).toString(), (26942).toString())
    // console.log(submission);
    return submission
  }

  async combineAssignmentSubbmition() {
    //  console.log("bb")
    const assignment = await this.GetAssignmet();
    const submission = await this.GetSubmission();

    for (let rubric of assignment.rubric) {
      if (submission.full_rubric_assessment != null) {
        for (let criteria of submission.full_rubric_assessment.criterias) {
          if (rubric.id == criteria.criterion_id) {
            console.log("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa")
            console.log(criteria.points, "points out of", rubric.points)
            console.log("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa")
          }
        }
      }
    }
    //    console.log("bb")
  }
}
