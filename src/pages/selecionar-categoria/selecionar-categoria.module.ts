import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SelecionarCategoriaPage } from './selecionar-categoria';

@NgModule({
  declarations: [
    SelecionarCategoriaPage,
  ],
  imports: [
    IonicPageModule.forChild(SelecionarCategoriaPage),
  ],
})
export class SelecionarCategoriaPageModule {}
