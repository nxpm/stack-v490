import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { WebUiSidebarPageModule } from '@stack-v490/web/ui/sidebar-page'
import { WebAccountFeatureComponent } from './web-account-feature.component'

@NgModule({
  declarations: [WebAccountFeatureComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: WebAccountFeatureComponent,
        children: [
          { path: '', pathMatch: 'full', redirectTo: 'profile' },
          {
            path: 'profile',
            loadChildren: () => import('./account-profile/account-profile.module').then((m) => m.AccountProfileModule),
          },
        ],
      },
    ]),
    WebUiSidebarPageModule,
  ],
})
export class WebAccountFeatureModule {}
