/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import { ParentService } from "../parent.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { ParentCreateInput } from "./ParentCreateInput";
import { Parent } from "./Parent";
import { ParentFindManyArgs } from "./ParentFindManyArgs";
import { ParentWhereUniqueInput } from "./ParentWhereUniqueInput";
import { ParentUpdateInput } from "./ParentUpdateInput";
import { StudentFindManyArgs } from "../../student/base/StudentFindManyArgs";
import { Student } from "../../student/base/Student";
import { StudentWhereUniqueInput } from "../../student/base/StudentWhereUniqueInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class ParentControllerBase {
  constructor(
    protected readonly service: ParentService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Parent })
  @swagger.ApiBody({
    type: ParentCreateInput,
  })
  @nestAccessControl.UseRoles({
    resource: "Parent",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async createParent(@common.Body() data: ParentCreateInput): Promise<Parent> {
    return await this.service.createParent({
      data: data,
      select: {
        createdAt: true,
        id: true,
        name: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [Parent] })
  @ApiNestedQuery(ParentFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Parent",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async parents(@common.Req() request: Request): Promise<Parent[]> {
    const args = plainToClass(ParentFindManyArgs, request.query);
    return this.service.parents({
      ...args,
      select: {
        createdAt: true,
        id: true,
        name: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Parent })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Parent",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async parent(
    @common.Param() params: ParentWhereUniqueInput
  ): Promise<Parent | null> {
    const result = await this.service.parent({
      where: params,
      select: {
        createdAt: true,
        id: true,
        name: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Parent })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiBody({
    type: ParentUpdateInput,
  })
  @nestAccessControl.UseRoles({
    resource: "Parent",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async updateParent(
    @common.Param() params: ParentWhereUniqueInput,
    @common.Body() data: ParentUpdateInput
  ): Promise<Parent | null> {
    try {
      return await this.service.updateParent({
        where: params,
        data: data,
        select: {
          createdAt: true,
          id: true,
          name: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Parent })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Parent",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteParent(
    @common.Param() params: ParentWhereUniqueInput
  ): Promise<Parent | null> {
    try {
      return await this.service.deleteParent({
        where: params,
        select: {
          createdAt: true,
          id: true,
          name: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id/student")
  @ApiNestedQuery(StudentFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Student",
    action: "read",
    possession: "any",
  })
  async findStudent(
    @common.Req() request: Request,
    @common.Param() params: ParentWhereUniqueInput
  ): Promise<Student[]> {
    const query = plainToClass(StudentFindManyArgs, request.query);
    const results = await this.service.findStudent(params.id, {
      ...query,
      select: {
        age: true,
        createdAt: true,
        dob: true,
        email: true,
        id: true,
        name: true,
        updatedAt: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/student")
  @nestAccessControl.UseRoles({
    resource: "Parent",
    action: "update",
    possession: "any",
  })
  async connectStudent(
    @common.Param() params: ParentWhereUniqueInput,
    @common.Body() body: StudentWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      student: {
        connect: body,
      },
    };
    await this.service.updateParent({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/student")
  @nestAccessControl.UseRoles({
    resource: "Parent",
    action: "update",
    possession: "any",
  })
  async updateStudent(
    @common.Param() params: ParentWhereUniqueInput,
    @common.Body() body: StudentWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      student: {
        set: body,
      },
    };
    await this.service.updateParent({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/student")
  @nestAccessControl.UseRoles({
    resource: "Parent",
    action: "update",
    possession: "any",
  })
  async disconnectStudent(
    @common.Param() params: ParentWhereUniqueInput,
    @common.Body() body: StudentWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      student: {
        disconnect: body,
      },
    };
    await this.service.updateParent({
      where: params,
      data,
      select: { id: true },
    });
  }
}
