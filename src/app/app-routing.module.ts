import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GreetingComponent } from './greeting/greeting.component';
import { ProductListComponent } from './product-list/product-list.component';
import { DatePickerTestComponent } from './date-picker-test/date-picker-test.component';
import { TimePickerTestComponent } from './time-picker-test/time-picker-test.component';
import { SwitchTestComponent } from './switch-test/switch-test.component';
import { RatingTestComponent } from './rating-test/rating-test.component';
import { PipeTestComponent } from './pipe-test/pipe-test.component';
import { CarouselTestComponent } from './carousel-test/carousel-test.component';
import { ProductFormComponent } from './product-form/product-form.component';


const routes: Routes = [
  {path:'greet',component:GreetingComponent},
{path:'product',component:ProductListComponent},
{path:'date-picker',component:DatePickerTestComponent},
{path:'time-picker',component:TimePickerTestComponent},
{path:'switch',component:SwitchTestComponent},
{path:'rating',component:RatingTestComponent},
{path:'pipe',component:PipeTestComponent},
{path:'caro',component:CarouselTestComponent},
{path:'form',component:ProductFormComponent},
{path:'',redirectTo:'/greet',pathMatch:'full'},
{path:'**',redirectTo:'/greet',pathMatch:'full'}];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
