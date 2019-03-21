import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CriarPostPage } from './criar-post';

@NgModule({
  declarations: [
    CriarPostPage,
  ],
  imports: [
    IonicPageModule.forChild(CriarPostPage),
  ],
})
export class CriarPostPageModule {}
