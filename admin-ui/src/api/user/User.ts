import { JsonValue } from "type-fest";

export type User = {
  createdAt: Date;
  id: string;
  lastName: string | null;
  roles: JsonValue;
  updatedAt: Date;
  username: string;
};
