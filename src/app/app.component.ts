import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
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

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
