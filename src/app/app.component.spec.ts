import { TestBed, async } from '@angular/core/testing';
import { Store, StoreModule } from '@ngrx/store';

import { AppComponent } from './app.component';
import * as fromRoot from './reducers/index';

describe('AppComponent', () => {
  let store: Store<fromRoot.AppState>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot({
          ...fromRoot.reducers
        })
      ],
      declarations: [
        AppComponent,
        MockUserList
      ],
      providers: []
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});

import { Component, Input } from '@angular/core';
import { User } from './modules/user/store/user.model';

@Component({
  selector: 'app-user-list',
  template: ''
})

export class MockUserList{
  @Input() users: User[];

  constructor() { }
}
