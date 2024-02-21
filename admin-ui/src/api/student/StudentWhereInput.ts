import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { ParentListRelationFilter } from "../parent/ParentListRelationFilter";

export type StudentWhereInput = {
  age?: IntNullableFilter;
  dob?: StringNullableFilter;
  email?: StringFilter;
  id?: StringFilter;
  name?: StringFilter;
  parents?: ParentListRelationFilter;
};
