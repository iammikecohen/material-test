import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { MatListModule } from '@angular/material/list';

import * as fromUser from './store/user.reducer';
import { UserListComponent } from './components';
import { UserService } from './user.service';
import { UserAddComponent } from './containers/user-add/user-add.component';

const COMPONENTS = [
  UserListComponent,
  UserAddComponent
]

@NgModule({
  imports: [
    CommonModule,
    MatListModule,
    StoreModule.forFeature('user', fromUser.reducer)
  ],
  declarations: [
    ...COMPONENTS
  ],
  exports: [
    ...COMPONENTS
  ]
})
export class UserModule {
  public static forRoot(): ModuleWithProviders {
    return {
      ngModule: UserModule,
      providers: [
        UserService
      ]
    }
  }
}
