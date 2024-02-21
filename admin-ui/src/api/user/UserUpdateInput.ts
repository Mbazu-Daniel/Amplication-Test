import { InputJsonValue } from "../../types";

export type UserUpdateInput = {
  lastName?: string | null;
  password?: string;
  roles?: InputJsonValue;
  username?: string;
};
