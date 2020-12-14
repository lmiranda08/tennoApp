import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddPage } from './add.page';
import { AddPageRoutingModule } from './add-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    AddPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [AddPage]
})
export class AddPageModule {}
