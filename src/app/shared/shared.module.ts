import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    BrowserAnimationsModule,
    MatIconModule,
    ReactiveFormsModule
  ],
  exports: [
    FormsModule,
    BrowserAnimationsModule,
    MatIconModule,
    ReactiveFormsModule
  ],
  declarations: []
})
export class SharedModule { }
