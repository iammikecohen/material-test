import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserListComponent } from './user-list.component';

describe('UserListComponent', () => {
  let component: UserListComponent;
  let fixture: ComponentFixture<UserListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        UserListComponent,
        HostComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should display a list of users as long as the input', () => {

  });
  it('should display the number of friends a user has', () => {

  });
  it('should display the user\'s age', () => {

  });
  it('should display the user\'s weight', () => {

  });
  it('should emit an event when clicked', () => {

  });
});

import { Component } from '@angular/core';
import { Observable, of } from 'rxjs';

import { UserState } from '../../store';

@Component({
  selector: 'test-host',
  template: '<app-user-list [users]="users"></app-user-list>'
})

export class HostComponent {
  users: Observable<UserState>;
  constructor() {
    this.users = of({
      ids: ['1', '5', '7'],
      entities: {
        1: {
          id: '1',
          weight: 180,
          age: 32,
          name: 'Franklin',
          friends: ['5']
        },
        5: {
          id: '5',
          weight: 210,
          age: 42,
          name: 'Biff',
          friends: ['1', '5', '7']
        },
        7: {
          id: '7',
          weight: 165,
          age: 21,
          name: 'Ralph',
          friends: ['5', '1']
        }
      }
    })
  }
}
