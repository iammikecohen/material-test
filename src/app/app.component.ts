import { Component, ViewEncapsulation } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { UserService } from './modules/user/user.service';
import { UserAddComponent } from './modules/user/containers';
const shortid = require('shortid');

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  constructor(
    private userService: UserService,
    public dialog: MatDialog
  ) { }

  openAddUserDialog(user) {
    const dialogRef = this.dialog.open(UserAddComponent, { data: user});
    dialogRef.afterClosed().subscribe(result => {
      if(result) {
        const user = result.id ? result : Object.assign(result, { id: shortid.generate() });
        this.userService.addUser(user);
      }
    });
  }

}
