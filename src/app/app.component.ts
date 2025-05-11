import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CalendarOptions } from '@fullcalendar/core/index.js';
import dayGridPlugin from '@fullcalendar/daygrid';

import { FullCalendarModule } from '@fullcalendar/angular';
import interactionPlugin, { DateClickArg } from '@fullcalendar/interaction';
import moment from 'moment';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FullCalendarModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = signal('angular-latest-features');

  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    plugins: [dayGridPlugin, interactionPlugin],
    buttonText: { prev: 'Hello' },
    buttonHints: {
      prev: 'Hi'
    },
    events: [
      {
        title: 'event 1', color: 'red', date: '2025-05-09', overlap: true,

        backgroundColor: 'orange'
      },


      {
        title: 'event 4', color: 'blue', date: '2025-05-09', overlap: true
      },
      {

        title: 'event 2', color: 'green', date: '2025-05-09', overlap: true
      },
      // { title: 'event 3', start: moment('2025-05-04').startOf('day').add(12, 'hours'), end: moment('2025-05-04').endOf('day') },
      { title: 'event 3', date: '2025-05-02' }
    ],
    // eventLimit: true,
    slotEventOverlap: true,
    eventOverlap: true,
    // nowIndicator: true,
    height: 500,
    // viewHeight: 50,
    // eventAdd: (arg: unknown) => this.handleEventAdd(arg),
    // eventClick: (arg: unknown) => this.handleEventAdd(arg),

    dateClick: (arg) => this.handleDateClick(arg),
    eventContent: '',
    eventBackgroundColor: 'transparent'

    // contentHeight: 600
    //dateClick: (arg) => this.handleDateClick(arg)
  }

  // // Timeline view - Horizontal hour-by-hour view
  // calendarOptions: CalendarOptions = {
  //   plugins: [timelinePlugin],
  //   initialView: 'timelineWeek', // or timelineDay, timelineMonth, etc.
  //   events: [
  //     { title: 'Meeting', start: moment().startOf('day').add(12, 'hours').add(30, 'minutes').toDate(), end: moment().endOf('day').toDate() },
  //     // more events...
  //   ]
  // }

  handleDateClick(info: DateClickArg) {
    console.log('date clicked ', info);
    // Remove highlight from all cells
    document.querySelectorAll('.fc-day').forEach(function(cell) {
      cell.classList.remove('fc-day-selected');
    });
    // Add highlight to the clicked cell
    info.dayEl.classList.add('fc-day-selected');
  }

  handleEventAdd(info: unknown) {
    console.log('inof ==>', info);
  }
}

