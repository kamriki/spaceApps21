import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { HeaderComponent } from 'src/app/components/header/header.component';

const components = [
  HeaderComponent
];
const modules = [
  CommonModule, IonicModule, RouterModule,
  FormsModule, ReactiveFormsModule
];

@NgModule({
declarations: [...components],
imports: [...modules],
exports: [...components, ...modules]
})
export class SharedModule { }
