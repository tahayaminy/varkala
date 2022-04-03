import { Component, OnInit } from '@angular/core';
import { FormBuilder,Validators} from '@angular/forms';
import {Router} from "@angular/router";

@Component({
  selector: 'app-delivery',
  templateUrl: './delivery.component.html',
  styleUrls: ['./delivery.component.scss']
})
export class DeliveryComponent implements OnInit {
  local=localStorage.getItem("shoppingCart")!;
  items=JSON.parse(this.local).items;
  orderTotal=0;
  total=0;
  shipping=10;
  shippingName;
  constructor(private fb: FormBuilder,public router:Router) { }

  ngOnInit(): void {
    this.totalprice();
    console.log(this.deliverForm.value);
  }

  deliverForm=this.fb.group({
    deliver:['Upse next day',Validators.required]
  })

  totalprice(){
    this.orderTotal=0
    for(let item of this.items){
      this.orderTotal+=item.total;
    }
    this.total=this.orderTotal + this.shipping;
    console.log(this.total)
  }
  ship(e){
    let value=e.target.value;
    if(value == "Upse next day"){
      this.shipping=10;
      this.shippingName='Upse next day';
    }else if(value == "DHL"){
      this.shipping=15;
      this.shippingName='DHL';
    }else if(value == "PPL"){
      this.shipping=8;
      this.shippingName='PPL';
    }else if(value == "UPS"){
      this.shipping=20;
      this.shippingName='UPS';
    }
    this.totalprice();
  }
  form(){
    localStorage.setItem("shipping",`${(this.shippingName)}`);
    localStorage.setItem("totalprice",`${this.total}`);
    this.router.navigate(["shopping/form/confirm"]);
  }
}
