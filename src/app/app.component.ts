import { Component, ViewEncapsulation } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { UserService } from './modules/user/user.service';
import { UserAddComponent } from './modules/user/containers/user-add/user-add.component';

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
      console.log(`Dialog result`, result);
    });
  }

}
