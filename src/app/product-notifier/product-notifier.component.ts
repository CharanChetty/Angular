import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Product } from '../product';

@Component({
  selector: 'app-product-notifier',
  templateUrl: './product-notifier.component.html',
  styleUrls: ['./product-notifier.component.css']
})
export class ProductNotifierComponent implements OnInit {
@Input('parentData')
product:Product;
@Output()
notify= new EventEmitter()


  constructor() { }

  ngOnInit() {
  }
  sendNotification()
  {
    this.notify.emit("u will be notified when prod bcms prime");
  }
}
