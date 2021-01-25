import { Args, Query, Resolver } from '@nestjs/graphql'
import { UseGuards } from '@nestjs/common'
import { ApiUserDataAccessService, User } from '@stack-v490/api/user/data-access'
import { CtxUser, GqlAuthAdminGuard } from '@stack-v490/api/auth/util'

@Resolver()
@UseGuards(GqlAuthAdminGuard)
export class ApiUserFeatureAdminResolver {
  constructor(private readonly service: ApiUserDataAccessService) {}

  @Query(() => [User], { nullable: true })
  adminUsers() {
    return this.service.adminUsers()
  }

  @Query(() => [User], { nullable: true })
  adminUser(@Args('userId') userId: string) {
    return this.service.adminUser(userId)
  }
}
