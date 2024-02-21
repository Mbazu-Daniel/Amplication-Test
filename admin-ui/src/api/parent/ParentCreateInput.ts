import { StudentCreateNestedManyWithoutParentsInput } from "./StudentCreateNestedManyWithoutParentsInput";

export type ParentCreateInput = {
  name?: string | null;
  student?: StudentCreateNestedManyWithoutParentsInput;
};
