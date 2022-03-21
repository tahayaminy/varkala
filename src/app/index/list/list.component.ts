import {
  Component,
  ElementRef,
  Input,
  OnInit,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';
import AOS from 'aos';
import { ServerService } from 'src/app/server.service';
interface Sort {
  index: number;
  value: string;
}

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ListComponent implements OnInit {
  constructor(public server: ServerService) {}
  products: any[] = [];
  ngOnInit(): void {
    AOS.init();
    this.server.getDb().subscribe((val) => (this.products = val['products']));
  }
  sorts: Sort[] = [
    { index: 1, value: 'Default' },
    { index: 2, value: 'Rating' },
  ];
  selectedSort = 1;
  productFilter(filter) {
    switch (filter) {
      case 'all':
        this.server
          .getDb()
          .subscribe((val) => (this.products = val['products']));
        break;
      case 'cloth':
        this.products = [];
        this.server.getDb().subscribe((val) => {
          val['products'].map((obj) => {
            if (
              !(
                obj.category == 12 ||
                obj.category == 11 ||
                obj.category == 10 ||
                obj.category == 9 ||
                obj.category == 6
              )
            ) {
              this.products.push(obj);
            }
          });
        });
        break;
      case 'bag':
        this.products = [];
        this.server.getDb().subscribe((val) => {
          val['products'].map((obj) => {
            if (obj.category == 10) {
              this.products.push(obj);
            }
          });
        });
        break;
        case 'underwear':
        this.products = [];
        this.server.getDb().subscribe((val) => {
          val['products'].map((obj) => {
            if (obj.category == 8) {
              this.products.push(obj);
            }
          });
        });
        break;
        case 'ex':
        this.products = [];
        this.server.getDb().subscribe((val) => {
          val['products'].map((obj) => {
            if (obj.category == 12 || obj.category == 6 || obj.category == 9 || obj.category == 10 || obj.category == 11) {
              this.products.push(obj);
            }
          });
        });
        break;
    }
  }
}
