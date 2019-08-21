import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { untilDestroyed } from 'ngx-take-until-destroy';

@Component({
  selector: 'app-day',
  templateUrl: './day.component.html',
  styleUrls: ['./day.component.scss']
})
export class DayComponent implements OnInit, OnDestroy {
  eventIndex: number;
  events = {
    1: [
      {
        name: 'Registration',
        time: '5:30 AM - 6:30 AM'
      },
      {
        name: 'Travel to CCT',
        time: '6:30 AM - 10:00 AM'
      },
      {
        name: 'Orientation',
        time: '10:00 AM - 12:00 PM'
      },
      {
        name: 'Lunch',
        time: '12:00 PM - 1:00 PM'
      },
      {
        name: 'Check-in',
        time: '1:00 PM - 2:00 PM'
      },
      {
        name: 'Free Time',
        time: '2:00 PM - 3:00 PM'
      },
      {
        name: 'Session 1',
        time: '3:00 PM - 5:00 PM'
      },
      {
        name: 'Free Time',
        time: '5:00 PM - 6:00 PM'
      },
      {
        name: 'Dinner',
        time: '6:00 PM - 7:00 PM'
      },
      {
        name: 'Session 2',
        time: '7:00 PM - 9:00 PM'
      },
      {
        name: 'Free Time',
        time: '9:00 PM - 10:00 PM'
      },
      {
        name: 'Sleeping Time',
        time: '10:00 PM - 6:00 AM'
      }
    ],
    2: [
      {
        name: 'Devotion',
        time: '6:00 AM - 7:00 AM'
      },
      {
        name: 'Breakfast',
        time: '7:00 AM - 8:00 AM'
      },
      {
        name: 'Free Time',
        time: '8:00 AM - 9:00 AM'
      },
      {
        name: 'Session 3',
        time: '9:00 AM - 12:00 PM'
      },
      {
        name: 'Lunch',
        time: '12:00 PM - 1:00 PM'
      },
      {
        name: 'Free Time',
        time: '1:00 PM - 2:00 PM'
      },
      {
        name: 'Session 4',
        time: '2:00 PM - 5:00 PM'
      },
      {
        name: 'Free Time',
        time: '5:00 PM - 6:00 PM'
      },
      {
        name: 'Dinner',
        time: '6:00 PM - 7:00 PM'
      },
      {
        name: 'Free Time',
        time: '7:00 PM - 7:30 PM'
      },
      {
        name: 'TBA',
        time: '7:30 PM - 9:00 PM'
      },
      {
        name: 'Free Time',
        time: '9:00 PM - 10:00 PM'
      },
      {
        name: 'Sleeping Time',
        time: '10:00 PM - 5:00 AM'
      }
    ],
    3: [
      {
        name: 'Dawn Challenge',
        time: '5:00 AM - 6:00 AM'
      },
      {
        name: 'Free Time',
        time: '6:00 AM - 7:00 AM'
      },
      {
        name: 'Breakfast',
        time: '7:00 AM - 8:00 AM'
      },
      {
        name: 'Session 5',
        time: '8:00 AM - 10:00 AM'
      },
      {
        name: 'Group Photo',
        time: '10:00 AM - 10:30 AM'
      },
      {
        name: 'Checkout',
        time: '10:30 AM - 12:00 PM'
      },
      {
        name: 'Lunch',
        time: '12:00 PM - 1:00 PM'
      },
      {
        name: 'Session 6',
        time: '1:00 PM - 2:00 PM'
      },
      {
        name: 'Departure',
        time: '2:00 PM - 3:00 PM'
      },
      {
        name: 'Travel to CCBC',
        time: '3:00 PM - 6:30 PM'
      },
      {
        name: 'Arrival',
        time: '6:30 PM - 7:00 PM'
      }
    ]
  };

  constructor(public routes: ActivatedRoute) {}

  ngOnInit() {
    this.routes.params.pipe(untilDestroyed(this)).subscribe(params => {
      this.eventIndex = params.id;
    });
  }

  ngOnDestroy() {}
}
