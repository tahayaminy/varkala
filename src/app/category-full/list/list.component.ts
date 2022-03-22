import {
  Component,
  ElementRef,
  OnInit,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';
import AOS from 'aos';
import { ServerService } from 'src/app/server.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ListComponent implements OnInit {
  constructor(public server: ServerService) {}

  products: any;
  srcProduct: any;
  firstIndex = 1;
  lastIndex?: number;
  paginatorShow = false;
  page = 0;
  itemInPage?: number;
  limitUp = 4;
  limitDown = 0;
  @ViewChild('all') all!: ElementRef;

  ngOnInit(): void {
    AOS.init();
    this.server.getDb().subscribe((val) => {
      this.srcProduct = val['products'];
      this.products = val['products'];
      this.lastIndex = this.products.length;
    });
  }

  sortBaseDefault() {
    this.server.getDb().subscribe((val) => {
      this.srcProduct = val['products'];
      this.products = val['products'];
      this.lastIndex = this.products.length;
    });
    this.allItem();
  }
  sortBaseRate() {
    this.allItem();
    for (let loop = 0; loop < this.products.length; loop++) {
      for (let index = 0; index < this.products.length; index++) {
        if (
          this.products[index]?.['reviews'] >
          this.products[index + 1]?.['reviews']
        ) {
          let changing = this.products[index + 1];
          this.products[index + 1] = this.products[index];
          this.products[index] = changing;
        }
      }
    }
  }

  itemPerPage(per) {
    this.all.nativeElement.classList.remove('dark-1');
    this.itemInPage = per;
    this.products = [];
    var index = 0;
    var arr: any = [];

    for (index; index < this.srcProduct.length; index += per + 1) {
      for (let i = 0; i <= per; i++) {
        arr.push(this.srcProduct[i + index]);
      }
      this.products.push(arr);
      arr = [];
    }
    this.lastIndex = (per + 1) * this.page;
    this.paginatorShow = true;
    this.pagination(0);
    this.limitDown = 0;
    this.limitUp = 4;
  }
  allItem() {
    this.all.nativeElement.classList.add('dark-1');
    this.itemInPage = undefined;
    this.products = this.srcProduct;

    this.lastIndex = this.products.length;
    this.paginatorShow = false;
  }

  pagination(page) {
    this.lastIndex = (this.itemInPage! + 1) * (page + 1);
    this.firstIndex = this.lastIndex - this.itemInPage!;
    this.page = page;
    if (page == this.limitUp - 1 && page != this.products.length - 1) {
      this.limitUp++;
      this.limitDown++;
    } else if (page == this.limitDown && page != 0) {
      this.limitUp--;
      this.limitDown--;
    }
  }
  nextPage() {
    if (this.page + 1 < this.products.length) {
      this.page++;
      this.lastIndex = (this.itemInPage! + 1) * (this.page + 1);
      this.firstIndex = this.lastIndex - this.itemInPage!;

      if (
        this.page == this.limitUp - 1 &&
        this.page != this.products.length - 1
      ) {
        this.limitUp++;
        this.limitDown++;
      }
    }
  }
  prevPage() {
    if (this.page - 1 >= 0) {
      this.page--;
      this.lastIndex = (this.itemInPage! + 1) * (this.page + 1);
      this.firstIndex = this.lastIndex - this.itemInPage!;
      if (this.page == this.limitDown && this.page != 0) {
        this.limitUp--;
        this.limitDown--;
      }
    }
  }
}
