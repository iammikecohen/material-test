import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { MatInputModule } from '@angular/material';
import { MatListModule } from '@angular/material/list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';

import * as fromUser from './store/user.reducer';
import { UserListComponent, UserAddComponent } from './components';
import { UserService } from './user.service';
import { SharedModule } from '../../shared/shared.module';

const COMPONENTS = [
  UserListComponent,
  UserAddComponent
];

const MATERIAL_MODULES = [
  MatListModule,
  MatInputModule,
  MatFormFieldModule,
  MatButtonModule
];

@NgModule({
  imports: [
    CommonModule,
    ...MATERIAL_MODULES,
    SharedModule,
    StoreModule.forFeature('user', fromUser.reducer)
  ],
  declarations: [
    ...COMPONENTS
  ],
  exports: [
    ...COMPONENTS
  ],
  entryComponents: [
    UserAddComponent
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
