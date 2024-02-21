import { ParentUpdateManyWithoutStudentsInput } from "./ParentUpdateManyWithoutStudentsInput";

export type StudentUpdateInput = {
  age?: number | null;
  dob?: string | null;
  email?: string;
  name?: string;
  parents?: ParentUpdateManyWithoutStudentsInput;
};
