import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ApelidoPage } from './apelido';

@NgModule({
  declarations: [
    ApelidoPage,
  ],
  imports: [
    IonicPageModule.forChild(ApelidoPage),
  ],
})
export class ApelidoPageModule {}
