export default class BaseCanvasAPIReciverService {
    url: string = "https://fhict.instructure.com/api/v1/users/self?=";
    token: string;
  
    constructor(token: string) {
      this.token = token;
    }
  }