import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatInputModule, MatDialogModule, MatDialogRef } from '@angular/material';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { Store } from '@ngrx/store';
import { of } from 'rxjs';

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
        MatCheckboxModule,
        SharedModule
      ],
      providers: [
        {provide : MatDialogRef, useValue : {}},
        {provide: MAT_DIALOG_DATA, useValue: {}},
        { provide: Store, useClass: MockStore}
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

export class MockStore {
  public dispatch(obj) { };
  select = jasmine.createSpy('storeSelect').and.returnValue(of({}));
  public subscribe() { };
  public pipe() { return new MockStore(); }
}
