console.log("Hello world");

import StudentAPIReciverService from "./infrastructure/recivers/StudentAPIReciverService";

const token = "TWÓJ TOKEN"

const studentAPIReciverService: StudentAPIReciverService = new StudentAPIReciverService(token);

console.log(studentAPIReciverService.GetStudnet())