import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'about',
    pathMatch: 'full'
  },
  { path: 'about', loadChildren: './about/about.module#AboutPageModule' },
  {
    path: 'schedule',
    loadChildren: './schedule/schedule.module#SchedulePageModule'
  },
  {
    path: 'speakers',
    loadChildren: './speakers/speakers.module#SpeakersPageModule'
  },
  {
    path: 'devotionals',
    loadChildren: './devotionals/devotionals.module#DevotionalsPageModule'
  },
  { path: 'rules', loadChildren: './rules/rules.module#RulesPageModule' },
  { path: 'map', loadChildren: './map/map.module#MapPageModule' },
  {
    path: 'playlist',
    loadChildren: './playlist/playlist.module#PlaylistPageModule'
  },
  { path: 'staff', loadChildren: './staff/staff.module#StaffPageModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      preloadingStrategy: PreloadAllModules,
      // useHash: true
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
