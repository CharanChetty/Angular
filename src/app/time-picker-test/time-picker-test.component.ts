import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-time-picker-test',
  templateUrl: './time-picker-test.component.html',
  styleUrls: ['./time-picker-test.component.css']
})
export class TimePickerTestComponent implements OnInit {
time={hour:0,minute:0,second:0};
  constructor() { }

  ngOnInit() {
  }

}
