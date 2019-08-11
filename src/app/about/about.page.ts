import { Component, OnInit, OnDestroy } from '@angular/core';
import { ApiService } from '../services/api.service';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-about',
  templateUrl: './about.page.html',
  styleUrls: ['./about.page.scss']
})
export class AboutPage implements OnInit, OnDestroy {
  public AboutValues$: Observable<any>;

  constructor(public api: ApiService) {}

  ngOnInit() {}

  ngOnDestroy() {}
}
