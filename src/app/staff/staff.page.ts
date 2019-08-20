import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-staff',
  templateUrl: './staff.page.html',
  styleUrls: ['./staff.page.scss']
})
export class StaffPage implements OnInit {
  Staff$: Observable<any>;

  constructor(public api: ApiService) {
    this.Staff$ = this.api.getValues('STAFF!B2:E53', 'ROWS');
  }

  ngOnInit() {}
}
