import { Component, ElementRef, OnInit,ViewChild,ViewEncapsulation } from '@angular/core';
import { SwiperComponent } from 'swiper/angular';
import SwiperCore,{Autoplay,Navigation,Pagination, Parallax, Swiper} from 'swiper';
import {interval, Observable, Subscription} from 'rxjs';
import { TranslateService } from '@ngx-translate/core';
SwiperCore.use([Parallax,Navigation,Pagination]);

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss'],
  encapsulation: ViewEncapsulation.None,
})

export class IndexComponent implements OnInit {
  
  constructor(public translate:TranslateService) {
    translate.addLangs(['en','deu','fr']);
    translate.setDefaultLang('en');
    const browserLang=translate.getBrowserLang();
    translate.use(browserLang?.match(/en|deu|fr/) ? browserLang : 'en');
  }  
  data:number=0;
  day:number=0;
  hour:number=0;
  min:number=0;
  sec:number=0;
  timestamp=1647790406000;
  tracker!:Subscription;
  trackerShow:boolean=true;
  ngOnInit(): void {
    var tst=new Date(this.timestamp);
    console.log(tst);
    var obs=interval(1000);  
    this.tracker=obs.subscribe(()=>{
      var today=new Date().getTime();
      var distant=this.timestamp-today;
      this.day=Math.floor(distant/(24*60*60*1000));
      this.hour=Math.floor((distant%(24*60*60*1000))/(60*60*1000));      
      this.min=Math.floor((distant%(60*60*1000))/(60*1000));      
      this.sec=Math.floor(distant%(60*1000)/(1000));
      this.checkTracker();
    })
  }
    checkTracker(){
      if(this.day<0){
        this.tracker.unsubscribe();
        this.trackerShow=false;
      }
    }
}
