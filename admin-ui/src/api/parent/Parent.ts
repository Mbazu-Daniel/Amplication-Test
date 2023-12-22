import { Student } from "../student/Student";

export type Parent = {
  createdAt: Date;
  id: string;
  name: string | null;
  student?: Array<Student>;
  updatedAt: Date;
};
