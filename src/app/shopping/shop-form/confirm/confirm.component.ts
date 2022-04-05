import {Component, OnDestroy, OnInit} from '@angular/core';

@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.scss']
})
export class ConfirmComponent implements OnInit,OnDestroy {
  localtotal=localStorage.getItem("totalprice");
  localshipping=localStorage.getItem("shipping")
  constructor() { }

  ngOnInit(): void {

  }
  ngOnDestroy() {
    localStorage.setItem("totalprice",'0');
    localStorage.setItem("cart",'{"items":[]}');
    localStorage.removeItem("shipping");
    localStorage.setItem("price",'0');
    localStorage.setItem("shoppingCart",'{"items":[]}');
  }

}
