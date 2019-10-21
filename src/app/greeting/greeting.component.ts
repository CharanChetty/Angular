import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-greeting',
  templateUrl: './greeting.component.html',
  styleUrls: ['./greeting.component.css']
})
export class GreetingComponent implements OnInit {
message: string="welcome to greeting component"
msg:"By charan"
msg1: string="By charan"

textColor="text-col"
textBgColor="text-bgcolor"
greetingStyle=[this.textColor,this.textBgColor]

  constructor() { }

  ngOnInit() {
  }

  sayGreet(event){
   console.log(event);
   this.message = "Good Morning"+" "+event.type;
  

  }
  s1=true;
  s2='Blue'
  toggleColor1(){
    //console.log(event);
    this.msg1 = "Happy Diwali"+" "+event.type;
    this.s1=!this.s1;
    this.s2=this.s2 ?'orange':'green';
    
  
  }
    
   
 
   }
   
  
