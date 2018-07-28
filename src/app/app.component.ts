import { Component, ViewEncapsulation } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { UserService } from './modules/user/user.service';
import { UserAddComponent } from './modules/user/components';
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

  openAddUserDialog() {
    const dialogRef = this.dialog.open(UserAddComponent);
    dialogRef.afterClosed().subscribe(result => {
      this.userService.addUser(Object.assign(result, { id: shortid.generate() }));
    });
  }

}
