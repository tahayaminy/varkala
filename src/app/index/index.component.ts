import { Component, ElementRef, OnInit,ViewChild,ViewEncapsulation } from '@angular/core';
import { SwiperComponent } from 'swiper/angular';
import SwiperCore,{Autoplay,Navigation,Pagination, Parallax, Swiper} from 'swiper';

SwiperCore.use([Parallax,Navigation,Pagination]);

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
