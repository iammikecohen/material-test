import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatToolbarModule,
    ReactiveFormsModule
  ],
  exports: [
    FormsModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatToolbarModule,
    ReactiveFormsModule
  ],
  declarations: []
})
export class SharedModule { }
