import { Component } from '@angular/core';
import {Subscription} from "rxjs";
import {TimerObservable} from "rxjs/observable/TimerObservable";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Chronometer';
  hh : number=0;
  mm : number=0;
  ss : number=0;
  private subscription: Subscription;

  start(){
    let timer = TimerObservable.create(0, 10);
    this.subscription = timer.subscribe(t => {
      this.ss+=1;
      if(this.ss==60){
        this.ss =0 ;
        this.mm+=1;
        if(this.mm==60){
          this.mm=0;
          this.hh=1;
        }
      }
   });
  }

  pause(){
    this.subscription.unsubscribe();
    this.ss=this.ss;
    this.mm=this.mm;
    this.hh=this.hh;
  }

  reset(){
    this.subscription.unsubscribe();
    this.hh=0;
    this.mm=0;
    this.ss=0;
  }
}
