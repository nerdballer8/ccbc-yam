import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-rules',
  templateUrl: './rules.page.html',
  styleUrls: ['./rules.page.scss']
})
export class RulesPage implements OnInit {
  Dos$: Observable<any>;
  Donts$: Observable<any>;
  Safety$: Observable<any>;

  constructor(public api: ApiService) {
    this.Dos$ = this.api.getValues('RULES!C5:C23', 'ROWS');
    this.Donts$ = this.api.getValues('RULES!C26:C30', 'ROWS');
    this.Safety$ = this.api.getValues('RULES!C33:C35', 'ROWS');
  }

  ngOnInit() {}
}
