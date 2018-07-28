import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatInputModule, MatDialogModule, MatDialogRef } from '@angular/material';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

import { UserAddComponent } from './user-add.component';
import { SharedModule } from '../../../../shared/shared.module';

describe('UserAddComponent', () => {
  let component: UserAddComponent;
  let fixture: ComponentFixture<UserAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MatInputModule,
        MatFormFieldModule,
        MatDialogModule,
        SharedModule
      ],
      providers: [
        {provide : MatDialogRef, useValue : {}},
        {provide: MAT_DIALOG_DATA, useValue: {}}
      ],
      declarations: [ UserAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
