import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {

  now: Date;
  day;
  month;
  nowMonth;
  year;
  monthNames = ['styczeń', 'luty', 'marzec', 'kwiecień', 'maj', 'czerwiec', 'lipiec', 'sierpień', 'wrzesień', 'październik', 'listopad', 'grudzień'];
  dayNames = ['Poniedziałek', 'Wtorek', 'Środa', 'Czwartek', 'Piątek', 'Sobota', 'Niedziela'];
  displayMonthAndYear: string;
  calendarCellsTable: CalendarDay[][] = [];

  constructor() {

  }

  ngOnInit() {


    this.now = new Date();

    this.day = this.now.getDate();
    this.month = this.now.getMonth();
    this.nowMonth = this.month;
    this.year = this.now.getFullYear();
    this.generateMonthName();
    this.generateTable();

  }

  generateMonthName() {
    this.displayMonthAndYear = this.monthNames[this.month] + ' ' + this.year;
  }

  generateTable() {
    const daysInMonth = new Date(this.year, this.month + 1, 0).getDate();
    const tempDate = new Date(this.year, this.month, 1);
    let firstMonthDay = tempDate.getDay();

    let daysInPrevMonth;

    if (this.month == 0) {
      daysInPrevMonth = new Date(this.year - 1, 12, 0).getDate();
    }
    else {
      daysInPrevMonth = new Date(this.year, this.month, 0).getDate();
    }

    if (firstMonthDay === 0) {
      firstMonthDay = 7;
    }
    const allCellsInMonth = daysInMonth + firstMonthDay - 1;
    this.calendarCellsTable = [];
    let calendarRow = [];
    for (let i = 0; i < allCellsInMonth; i++) {
      let day = new CalendarDay;

      if (i != 0 && i % 7 == 0) {
        this.calendarCellsTable.push(calendarRow);
        calendarRow = [];
      }
      if (i >= firstMonthDay - 1) {

        day.nowMonth = (this.month == this.nowMonth);
        day.date = this.year + '-' +this.addZero(this.month + 1) + '-' + this.addZero(i - firstMonthDay + 2);
        day.number = i - firstMonthDay + 2;
        if (this.year === this.now.getFullYear()
          && this.month === this.now.getMonth() && this.day === i - firstMonthDay + 2) {
          day.today = true;
        } else {
          day.today = false;
        }
        calendarRow.push(day); console.log(day)
      } else {
        day.nowMonth = false;
        day.today = false;
        day.number = daysInPrevMonth - firstMonthDay + 2 + i;
        if (this.month == 0) {
          day.date = (this.year - 1) + '-12-' + this.addZero(day.number);
        } else {
          day.date = (this.year) + '-' + this.addZero(this.month) + '-' + this.addZero(day.number);

        }
        calendarRow.push(day);console.log(day)
      }
    }
    const calendarRowlength = calendarRow.length;
    for (let i = calendarRowlength; i < 7; i++) {
      let day = new CalendarDay;
      day.number = i - calendarRowlength + 1;
      day.nowMonth = false;
      day.today = false;
      if (this.month == 11) {
        day.date = (this.year + 1) + '-01-' + this.addZero(day.number);
      }
      else {
        day.date = (this.year) + '-' + this.addZero(this.month + 2) + '-' +this.addZero(day.number);
      }
      calendarRow.push(day);console.log(day)
    }
    this.calendarCellsTable.push(calendarRow);
  }

  prevMonth() {
    this.month--;
    if (this.month < 0) {
      this.month = 11;
      this.year--;
    }
    this.generateMonthName();
    this.generateTable();
  }

  nextMonth() {
    this.month++;
    if (this.month > 11) {
      this.month = 0;
      this.year++;
    }
    this.generateMonthName();
    this.generateTable();
  }

  addZero(num){
    if(num<10)
    return '0'+num;
    else return num;
  }

}

class CalendarDay {
  number: number;
  date: string;
  nowMonth: boolean;
  today: boolean;
}


