import { Component, OnInit, OnDestroy } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';
import { untilDestroyed } from 'ngx-take-until-destroy';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  public appPages = [
    {
      title: 'About',
      url: 'about',
      icon: 'information-circle'
    },
    {
      title: 'Devotionals',
      url: 'devotionals',
      icon: 'bookmarks'
    },
    {
      title: 'Schedule',
      url: 'schedule',
      icon: 'calendar'
    },
    // {
    //   title: 'Speakers',
    //   url: 'speakers',
    //   icon: 'microphone'
    // },
    {
      title: 'Rules & Guidelines',
      url: 'rules',
      icon: 'paper'
    },
    {
      title: 'Map',
      url: 'map',
      icon: 'pin'
    },
    // {
    //   title: 'Playlist',
    //   url: 'playlist',
    //   icon: 'play-circle'
    // },
    {
      title: 'Staff',
      url: 'staff',
      icon: 'people'
    }
  ];

  constructor(private swUpdate: SwUpdate) {}

  ngOnInit() {
    if (this.swUpdate.isEnabled) {
      this.swUpdate.available.pipe(untilDestroyed(this)).subscribe(() => {
        if (confirm('New version is available. Load New Version?')) {
          window.location.reload();
        }
      });
    }
  }

  ngOnDestroy() {}
}
