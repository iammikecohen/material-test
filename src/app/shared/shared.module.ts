import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatToolbarModule,
    ReactiveFormsModule
  ],
  exports: [
    FormsModule,
    RouterModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatToolbarModule,
    ReactiveFormsModule
  ],
  declarations: []
})
export class SharedModule { }
