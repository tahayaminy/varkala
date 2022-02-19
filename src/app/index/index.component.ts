import { Component, OnInit,ViewEncapsulation } from '@angular/core';
import { SwiperComponent } from 'swiper/angular';
import SwiperCore,{Autoplay,Navigation,Pagination} from 'swiper';

SwiperCore.use([Autoplay,Navigation,Pagination]);

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class IndexComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
