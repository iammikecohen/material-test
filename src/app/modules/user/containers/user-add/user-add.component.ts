import { Component } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.scss']
})
export class UserAddComponent {
  options;

  constructor(
    public dialogRef: MatDialogRef<UserAddComponent>,
    private fb: FormBuilder
  ) {
    this.options = this.fb.group({
      hideRequired: false,
      floatLabel: 'auto',
      name: new FormControl(''),
      age: new FormControl(''),
      weight: new FormControl('')
    });
  }
  addUser() {
    if(this.options.valid) {
      console.log('adding user', this.options);
      this.dialogRef.close(this.options.value);
    }
  }
}
