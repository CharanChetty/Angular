import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `<h5>&copy; Zensar online Shopping</h5>
  <h6>All rights reserved</h6>`,
  styles: ['h5{background-color:red;}','h6{font-style:italic;}']
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
