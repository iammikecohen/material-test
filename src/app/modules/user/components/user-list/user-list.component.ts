import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs';

import { UserService } from '../../user.service';
import { User } from '../../store/user.model';
import { UserState } from '../../store/user.reducer';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent {
  @Input() users: Observable<UserState>;

  constructor() { }
}
