import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AboutPage } from './about.page';
import { IntroComponentModule } from './intro/intro.module';
import { MessageComponentModule } from './message/message.module';
import { ThemeComponentModule } from './theme/theme.module';
import { IntroComponent } from './intro/intro.component';
import { MessageComponent } from './message/message.component';
import { ThemeComponent } from './theme/theme.component';

const routes: Routes = [
  {
    path: '',
    component: AboutPage,
    children: [
      {
        path: '',
        redirectTo: 'intro',
        pathMatch: 'full'
      },
      {
        path: 'intro',
        component: IntroComponent
      },
      {
        path: 'message',
        component: MessageComponent
      },
      {
        path: 'theme',
        component: ThemeComponent
      }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    IntroComponentModule,
    MessageComponentModule,
    ThemeComponentModule
  ],
  declarations: [AboutPage]
})
export class AboutPageModule {}
