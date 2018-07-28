import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { UserService } from '../../modules/user/user.service';
import { UserAddComponent } from '../../modules/user/containers';
const shortid = require('shortid');

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent {
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
