import { User as TUser } from "../api/user/User";

export const USER_TITLE_FIELD = "lastName";

export const UserTitle = (record: TUser): string => {
  return record.lastName?.toString() || String(record.id);
};
