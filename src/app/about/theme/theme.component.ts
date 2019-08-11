import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-theme',
  templateUrl: './theme.component.html',
  styleUrls: ['./theme.component.scss']
})
export class ThemeComponent implements OnInit {
  Content$: Observable<any>;

  constructor(private api: ApiService) {
    this.Content$ = this.api.getValues('ABOUT ENDGAME!C3:C12');
  }

  ngOnInit() {}
}
