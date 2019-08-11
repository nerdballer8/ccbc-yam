import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ThemeComponent } from './theme.component';

@NgModule({
  imports: [ CommonModule, FormsModule,IonicModule,],
  declarations: [ThemeComponent],
  exports: [ThemeComponent]
})
export class ThemeComponentModule {}
