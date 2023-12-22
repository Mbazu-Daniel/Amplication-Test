/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { IsString, IsOptional, ValidateNested } from "class-validator";
import { StudentCreateNestedManyWithoutParentsInput } from "./StudentCreateNestedManyWithoutParentsInput";
import { Type } from "class-transformer";

@InputType()
class ParentCreateInput {
  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  name?: string | null;

  @ApiProperty({
    required: false,
    type: () => StudentCreateNestedManyWithoutParentsInput,
  })
  @ValidateNested()
  @Type(() => StudentCreateNestedManyWithoutParentsInput)
  @IsOptional()
  @Field(() => StudentCreateNestedManyWithoutParentsInput, {
    nullable: true,
  })
  student?: StudentCreateNestedManyWithoutParentsInput;
}

export { ParentCreateInput as ParentCreateInput };
