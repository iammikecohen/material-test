import { Component, Inject } from '@angular/core';
import { FormBuilder, FormControl, FormArray } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { selectUserState } from '../../store/user.selections';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.scss']
})
export class UserAddComponent {
  user;
  users: any;

  constructor(
    public dialogRef: MatDialogRef<UserAddComponent>,
    private fb: FormBuilder,
    private store: Store<any>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.user = this.fb.group({
      hideRequired: false,
      floatLabel: 'auto',
      name: new FormControl(this.data ? this.data.name : ''),
      age: new FormControl(this.data ? this.data.age : ''),
      weight: new FormControl(this.data ? this.data.weight : ''),
      friends: this.fb.array([]),
      id:  new FormControl(this.data ? this.data.id : undefined)
    });
    this.users = this.store.select(selectUserState);
    if(this.data && this.data.friends) {
      const emailFormArray = <FormArray>this.user.controls.friends;
      this.data.friends.forEach(friendId => {
        emailFormArray.push(new FormControl(friendId));
      });
    }
  }
  get friends() {
    return this.user.get('friends') as FormArray;
  }
  addUser() {
    if(this.user.valid) {
      const { name, age, weight, id, friends} = this.user.value;
      this.dialogRef.close({
        name: name,
        age: age,
        weight: weight,
        friends: friends,
        id: id
      });
    }
  }

  updateStatus(friend: any, isChecked: boolean) {
    const emailFormArray = <FormArray>this.user.controls.friends;

    if (isChecked) {
      emailFormArray.push(new FormControl(friend));
    } else {
      const index = emailFormArray.controls.findIndex(x => x.value.id === friend.id);
      emailFormArray.removeAt(index);
    }
  }

  areFriends(id: string) {
    return this.user.controls.friends.controls.findIndex(x => x.value === id) !== -1;
  }
}
