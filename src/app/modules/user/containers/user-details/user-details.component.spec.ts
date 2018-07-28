import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { MatIconModule, MatToolbarModule } from '@angular/material';
import { Store } from '@ngrx/store';
import { of } from 'rxjs';

import { UserDetailsComponent } from './user-details.component';

describe('UserDetailsComponent', () => {
  let component: UserDetailsComponent;
  let fixture: ComponentFixture<UserDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        MatIconModule,
        MatToolbarModule
      ],
      providers: [
        { provide: Store, useClass: MockStore}
      ],
      declarations: [ UserDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});


export class MockStore {
  public dispatch(obj) { };
  select = jasmine.createSpy('storeSelect').and.returnValue(of({}));
  public subscribe() { };
  public pipe() { return new MockStore(); }
}

