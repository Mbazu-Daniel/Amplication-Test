import { SortOrder } from "../../util/SortOrder";

export type StudentOrderByInput = {
  age?: SortOrder;
  createdAt?: SortOrder;
  dob?: SortOrder;
  email?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  updatedAt?: SortOrder;
};
