import { ParentCreateNestedManyWithoutStudentsInput } from "./ParentCreateNestedManyWithoutStudentsInput";

export type StudentCreateInput = {
  age?: number | null;
  dob?: string | null;
  email: string;
  name: string;
  parents?: ParentCreateNestedManyWithoutStudentsInput;
};
