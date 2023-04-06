console.log("Hello world");

import StudentAPIReciverService from "./infrastructure/recivers/StudentAPIReciverService";

const token = "TWÓJ TOKEN"

const studentAPIReciverService: StudentAPIReciverService = new StudentAPIReciverService(token);

async function GetS() {
    console.log(await studentAPIReciverService.GetStudnet());
}

GetS();