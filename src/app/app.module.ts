import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { MatDialogModule } from '@angular/material/dialog';
import { RouterModule, Routes } from '@angular/router';

import { environment } from '../environments/environment';
import { AppComponent } from './app.component';
import { reducers, metaReducers } from './reducers';
import { UserModule } from './modules/user';
import { SharedModule } from './shared/shared.module';
import { LandingComponent } from './components/landing/landing.component';

const MATERIAL_MODULES = [
  MatDialogModule
];

const routes: Routes = [
  {path: '', component: LandingComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    ...MATERIAL_MODULES,
    SharedModule,
    UserModule.forRoot(),
    StoreModule.forRoot(reducers, { metaReducers }),
    !environment.production ? StoreDevtoolsModule.instrument() : []
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
