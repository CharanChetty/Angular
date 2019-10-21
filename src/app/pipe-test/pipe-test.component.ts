import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe-test',
  templateUrl: './pipe-test.component.html',
  styleUrls: ['./pipe-test.component.css']
})
export class PipeTestComponent implements OnInit {
name:string="Charan Chetty"
date=new Date("1997/06/01");
  constructor() { }

  ngOnInit() {
  }

}
