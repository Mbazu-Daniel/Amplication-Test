import { InputJsonValue } from "../../types";

export type UserCreateInput = {
  lastName?: string | null;
  password: string;
  roles: InputJsonValue;
  username: string;
};
