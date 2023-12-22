import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StudentListRelationFilter } from "../student/StudentListRelationFilter";

export type ParentWhereInput = {
  id?: StringFilter;
  name?: StringNullableFilter;
  student?: StudentListRelationFilter;
};
