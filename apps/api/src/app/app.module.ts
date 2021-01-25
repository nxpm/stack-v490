import { ApiAuthFeatureModule } from '@stack-v490/api/auth/feature'
import { ApiCoreFeatureModule } from '@stack-v490/api/core/feature'
import { ApiUserFeatureModule } from '@stack-v490/api/user/feature'
import { Module } from '@nestjs/common'

@Module({
  imports: [ApiAuthFeatureModule, ApiCoreFeatureModule, ApiUserFeatureModule],
})
export class AppModule {}
