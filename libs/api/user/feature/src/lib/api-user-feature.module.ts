import { Module } from '@nestjs/common'
import { ApiUserDataAccessModule } from '@stack-v490/api/user/data-access'

import { ApiUserFeatureAdminResolver } from './api-user-feature-admin.resolver'

@Module({
  imports: [ApiUserDataAccessModule],
  providers: [ApiUserFeatureAdminResolver],
})
export class ApiUserFeatureModule {}
