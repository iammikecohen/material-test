import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { MatInputModule } from '@angular/material';
import { MatListModule } from '@angular/material/list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { StoreModule } from '@ngrx/store';

import * as fromUser from './store/user.reducer';
import { UserListComponent } from './components';
import { UserAddComponent } from './containers';
import { UserService } from './user.service';
import { SharedModule } from '../../shared/shared.module';
import { UserDetailsComponent } from './containers/user-details/user-details.component';

const COMPONENTS = [
  UserListComponent,
  UserAddComponent
];

const MATERIAL_MODULES = [
  MatListModule,
  MatInputModule,
  MatFormFieldModule,
  MatButtonModule,
  MatCheckboxModule
];


const routes: Routes = [
  { path: 'user/:id', component: UserDetailsComponent },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ...MATERIAL_MODULES,
    SharedModule,
    StoreModule.forFeature('user', fromUser.reducer)
  ],
  declarations: [
    ...COMPONENTS,
    UserDetailsComponent
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
