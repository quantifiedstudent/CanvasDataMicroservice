import StudentDTO from "../../infrastructure/dto/StudentDTO";

export class Student {
  public id: number;
  public name: string;
  public created_at: string;
  public short_name: string;
  public avatar_url: string;

  constructor(studentDTO: StudentDTO
  ) {
    this.id = studentDTO.id;
    this.name = studentDTO.name;
    this.created_at = studentDTO.created_at;
    this.short_name = studentDTO.short_name;
    this.avatar_url = studentDTO.avatar_url;
  }
}
