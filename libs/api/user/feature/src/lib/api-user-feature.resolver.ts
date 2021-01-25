import { Resolver } from '@nestjs/graphql'
import { ApiUserDataAccessService } from '@stack-v490/api/user/data-access'

@Resolver()
export class ApiUserFeatureResolver {
  constructor(private readonly service: ApiUserDataAccessService) {}
}
