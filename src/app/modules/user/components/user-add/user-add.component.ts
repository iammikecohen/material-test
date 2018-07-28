import { Component, Inject } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.scss']
})
export class UserAddComponent {
  options;

  constructor(
    public dialogRef: MatDialogRef<UserAddComponent>,
    private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.options = this.fb.group({
      hideRequired: false,
      floatLabel: 'auto',
      name: new FormControl(this.data ? this.data.name : ''),
      age: new FormControl(this.data ? this.data.age : ''),
      weight: new FormControl(this.data ? this.data.weight : ''),
      id:  new FormControl(this.data ? this.data.id : undefined)
    });
  }
  addUser() {
    if(this.options.valid) {
      this.dialogRef.close(this.options.value);
    }
  }
}
