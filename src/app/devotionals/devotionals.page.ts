import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-devotionals',
  templateUrl: './devotionals.page.html',
  styleUrls: ['./devotionals.page.scss']
})
export class DevotionalsPage implements OnInit {
  DevoList$: Observable<any>;

  constructor(public api: ApiService) {
    this.DevoList$ = this.api.getValues('DEVOTIONALS!A2:B10', 'ROWS');
  }

  ngOnInit() {}
}
