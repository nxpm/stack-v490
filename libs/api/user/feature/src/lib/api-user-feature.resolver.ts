import { Args, Query, Resolver } from '@nestjs/graphql'
import { ApiUserDataAccessService, User } from '@stack-v490/api/user/data-access'
import { ApiUserFeatureService } from './api-user-feature.service'

@Resolver()
export class ApiUserFeatureResolver {
  constructor(private readonly service: ApiUserDataAccessService) {}
}
