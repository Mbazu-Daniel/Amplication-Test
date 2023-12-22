import { StudentUpdateManyWithoutParentsInput } from "./StudentUpdateManyWithoutParentsInput";

export type ParentUpdateInput = {
  name?: string | null;
  student?: StudentUpdateManyWithoutParentsInput;
};
