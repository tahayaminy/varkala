import { Component, ElementRef, OnInit, ViewChild,Input } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ServerService } from 'src/app/server.service';
import { ItemService } from '../item.service';
import { User } from 'src/assets/server/models/User';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  langs=['en', 'deu', 'fr'];
  langId=0;
  @Input() index!:boolean;
  localWish=localStorage.getItem("wish")!;
  Wishlist=JSON.parse(this.localWish).items;
  localprice=localStorage.getItem("price")!;
  localCart=localStorage.getItem("cart")!;

  Cart=JSON.parse(this.localCart).items;
  navbar:any;
  categories:any;
  price='0';
  logged=false;
  dashboard?:User;
  Menu=false;
  @ViewChild('contMenu') menuCont!:ElementRef;

  constructor(public translate:TranslateService,public server:ServerService,public itemService:ItemService) {
  }

  ngOnInit(): void {
    if(localStorage.getItem("price")!==null){
      this.price=this.localprice;
    }
    this.itemService.list.subscribe(data=>{
      this.Cart=data;
    });
    this.itemService.wishes.subscribe(data=>{
      this.Wishlist=data;
    });
    this.itemService.pricew.subscribe(data=>{
      this.price=data;
    })
    this.translate.get('navbar').subscribe(val=>this.navbar=val);
    this.server.getDb().subscribe(val=>this.categories=val["categories"]);
    var profile=sessionStorage.getItem("userId");
    if(profile){
      let data=Number(profile);
      this.logged=true;
      this.server.getDb().subscribe(val=>{
        val["users"].map(user=>{
          if(user.id==data){
            this.dashboard=user;
          }
        })
      });
    }
  }
  exit(){
    sessionStorage.removeItem("userId");
    this.logged=false;
    window.location.replace('/');
  }
  translator(lang,id){
    this.langId=id;
    this.translate.use(lang);
    this.translate.get('navbar').subscribe(val=>this.navbar=val);
  }
  responsiveMenu(){
    this.Menu=!this.Menu;
    if(this.Menu){
      this.menuCont.nativeElement.style='height:auto;background-color:white;overflow-y:auto';
    }else{
      this.menuCont.nativeElement.style='height:0;background-color:transparent;';
    }
  }
  removeCart(data){
    this.itemService.removeCart(data);
    this.itemService.list.subscribe(data=>{
      this.Cart=data;
    })

  }
}
