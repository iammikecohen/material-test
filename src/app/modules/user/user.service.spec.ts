import { TestBed, inject } from '@angular/core/testing';
import { Store } from '@ngrx/store';
import { of } from 'rxjs';

import { UserService } from './user.service';

describe('UserService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        UserService,
        { provide: Store, useClass: MockStore}
      ]
    });
  });

  it('should be created', inject([UserService], (service: UserService) => {
    expect(service).toBeTruthy();
  }));
});

export class MockStore {
  public dispatch(obj) { };
  select = jasmine.createSpy('storeSelect').and.returnValue(of({}));
  public subscribe() { };
  public pipe() { return new MockStore(); }
}
