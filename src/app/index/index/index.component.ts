import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import SwiperCore, { Navigation, Pagination, Parallax } from 'swiper';
import { interval, Subscription } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';
SwiperCore.use([Parallax, Navigation, Pagination]);

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class IndexComponent implements OnInit {
  data: number = 0;
  day: number = 0;
  hour: number = 0;
  min: number = 0;
  sec: number = 0;
  timestamp = 1647790406000;
  tracker!: Subscription;
  trackerShow: boolean = true;

  constructor(public translate: TranslateService) {
    translate.addLangs(['en', 'deu', 'fr']);
    translate.setDefaultLang('en');
    const browserLang = translate.getBrowserLang();
    translate.use(browserLang?.match(/en|deu|fr/) ? browserLang : 'en');
  }

  ngOnInit(): void {
    var obs = interval(1000);
    this.tracker = obs.subscribe(() => {
      var today = new Date().getTime();
      var distant = this.timestamp - today;
      this.day = Math.floor(distant / (24 * 60 * 60 * 1000));
      this.hour = Math.floor(
        (distant % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000)
      );
      this.min = Math.floor((distant % (60 * 60 * 1000)) / (60 * 1000));
      this.sec = Math.floor((distant % (60 * 1000)) / 1000);
      this.checkTracker();
    });
  }
  checkTracker() {
    if (this.day < 0) {
      this.tracker.unsubscribe();
      this.trackerShow = false;
    }
  }
}
