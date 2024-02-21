import { Parent } from "../parent/Parent";

export type Student = {
  age: number | null;
  createdAt: Date;
  dob: string | null;
  email: string;
  id: string;
  name: string;
  parents?: Array<Parent>;
  updatedAt: Date;
};
