import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';

import { UserState } from '../../store/user.reducer';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent {
  @Input() users: Observable<UserState>;
  @Output() editUser = new EventEmitter();

  constructor() { }
}
