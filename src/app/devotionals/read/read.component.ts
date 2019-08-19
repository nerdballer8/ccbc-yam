import { Component, OnInit, OnDestroy } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { untilDestroyed } from 'ngx-take-until-destroy';

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.scss']
})
export class ReadComponent implements OnInit, OnDestroy {
  DevoDetails$: Observable<any>;

  constructor(public api: ApiService, private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.params.pipe(untilDestroyed(this)).subscribe(params => {
      // add 2 to ID since info starts on 3rd excel sheet row
      const rowIndex = parseInt(params.id, 10) + 2;
      this.DevoDetails$ = this.api.getValues(
        `DEVOTIONALS!A${rowIndex}:H${rowIndex}`,
        'ROWS'
      );
    });
  }

  ngOnDestroy() {}
}
