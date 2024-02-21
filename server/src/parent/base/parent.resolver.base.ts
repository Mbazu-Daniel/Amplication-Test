/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { Parent } from "./Parent";
import { ParentCountArgs } from "./ParentCountArgs";
import { ParentFindManyArgs } from "./ParentFindManyArgs";
import { ParentFindUniqueArgs } from "./ParentFindUniqueArgs";
import { CreateParentArgs } from "./CreateParentArgs";
import { UpdateParentArgs } from "./UpdateParentArgs";
import { DeleteParentArgs } from "./DeleteParentArgs";
import { StudentFindManyArgs } from "../../student/base/StudentFindManyArgs";
import { Student } from "../../student/base/Student";
import { ParentService } from "../parent.service";
@graphql.Resolver(() => Parent)
export class ParentResolverBase {
  constructor(protected readonly service: ParentService) {}

  async _parentsMeta(
    @graphql.Args() args: ParentCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [Parent])
  async parents(@graphql.Args() args: ParentFindManyArgs): Promise<Parent[]> {
    return this.service.parents(args);
  }

  @graphql.Query(() => Parent, { nullable: true })
  async parent(
    @graphql.Args() args: ParentFindUniqueArgs
  ): Promise<Parent | null> {
    const result = await this.service.parent(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => Parent)
  async createParent(@graphql.Args() args: CreateParentArgs): Promise<Parent> {
    return await this.service.createParent({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => Parent)
  async updateParent(
    @graphql.Args() args: UpdateParentArgs
  ): Promise<Parent | null> {
    try {
      return await this.service.updateParent({
        ...args,
        data: args.data,
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Parent)
  async deleteParent(
    @graphql.Args() args: DeleteParentArgs
  ): Promise<Parent | null> {
    try {
      return await this.service.deleteParent(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.ResolveField(() => [Student], { name: "student" })
  async findStudent(
    @graphql.Parent() parent: Parent,
    @graphql.Args() args: StudentFindManyArgs
  ): Promise<Student[]> {
    const results = await this.service.findStudent(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }
}
