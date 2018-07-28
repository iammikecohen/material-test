import { async, TestBed } from '@angular/core/testing';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDialogModule } from '@angular/material';
import { StoreModule } from '@ngrx/store';

import { LandingComponent } from './landing.component';
import * as fromRoot from '../../reducers';

describe('AppComponent', () => {

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MatIconModule,
        MatToolbarModule,
        MatDialogModule,
        StoreModule.forRoot({
          ...fromRoot.reducers
        })
      ],
      declarations: [
        LandingComponent,
        MockUserList
      ],
      providers: []
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(LandingComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});

import { Component, Input } from '@angular/core';
import { User } from '../../modules/user/store/user.model';

@Component({
  selector: 'app-user-list',
  template: ''
})

export class MockUserList{
  @Input() users: User[];

  constructor() { }
}
