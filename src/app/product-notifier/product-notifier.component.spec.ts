import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductNotifierComponent } from './product-notifier.component';

describe('ProductNotifierComponent', () => {
  let component: ProductNotifierComponent;
  let fixture: ComponentFixture<ProductNotifierComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductNotifierComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductNotifierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
