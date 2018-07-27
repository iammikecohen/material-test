import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { BehaviorSubject } from 'rxjs';

import { selectUserState } from './store/user.selections';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private storeUsers = new BehaviorSubject(null);
  constructor(private store: Store<any>) {
    this.store.select(selectUserState).subscribe(users => {
      this.storeUsers.next(users);
    });
  }

  get users() {
    return this.storeUsers.asObservable();
  }
}
