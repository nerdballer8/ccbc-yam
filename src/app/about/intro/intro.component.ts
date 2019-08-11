import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss']
})
export class IntroComponent implements OnInit {
  Content$: Observable<any>;

  constructor(private api: ApiService) {
    this.Content$ = this.api.getValues('ABOUT ENDGAME!C3:C11');
  }

  ngOnInit() {}
}
