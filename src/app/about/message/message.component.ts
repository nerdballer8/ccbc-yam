import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent implements OnInit {
  Content$: Observable<any>;

  constructor(private api: ApiService) {
    this.Content$ = this.api.getValues('MESSAGE FROM CD!C4:C10');
  }

  ngOnInit() {}
}
