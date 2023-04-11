import * as fs from 'fs';

console.log("Hello world");


function GetPrivateToken(): string {
    try {
        const token = fs.readFileSync('./src/PrivateToken.txt', 'utf-8');
        console.log(token);
        return token;
    }
    catch (err) {
        console.log(err);
        throw err;
    }
}

GetPrivateToken();



import StudentAPIReciverService from "./infrastructure/recivers/StudentAPIReciverService";

const token = "TWÓJ TOKEN"

const studentAPIReciverService: StudentAPIReciverService = new StudentAPIReciverService(token);

console.log(await studentAPIReciverService.GetStudnet());