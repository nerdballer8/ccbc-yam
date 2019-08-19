import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { DevotionalsPage } from './devotionals.page';
import { ReadComponent } from './read/read.component';

const routes: Routes = [
  {
    path: '',
    component: DevotionalsPage
  },
  {
    path: 'read/:id',
    component: ReadComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [DevotionalsPage, ReadComponent]
})
export class DevotionalsPageModule {}
