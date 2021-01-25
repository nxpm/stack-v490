import { Float, Query, Resolver } from '@nestjs/graphql'
import { ApiCoreDataAccessService } from '@stack-v490/api/core/data-access'

@Resolver()
export class ApiUserDataAccessService {
  constructor(private readonly data: ApiCoreDataAccessService) {}

  adminUsers() {
    return this.data.user.findMany()
  }

  adminUser(userId: string) {
    return this.data.user.findUnique({ where: { id: userId } })
  }
}
