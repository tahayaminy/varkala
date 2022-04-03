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

  @Input() index!:boolean;
  Wishlist=this.itemService.Wishlist;

  localCart=localStorage.getItem("cart")!;

  Cart=JSON.parse(this.localCart).items;
  navbar:any;
  categories:any;
  price=localStorage.getItem("price");
  logged=false;
  dashboard?:User;
  Menu=false;
  @ViewChild('contMenu') menuCont!:ElementRef;

  constructor(public translate:TranslateService,public server:ServerService,public itemService:ItemService) {
  }

  ngOnInit(): void {
    this.itemService.list.subscribe(data=>{
      this.Cart=data;
    });
    this.itemService.single.subscribe(data=>{
      this.price=data;
    });
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
  translator(lang){
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
    this.price=localStorage.getItem("price");
    this.itemService.list.subscribe(data=>{
      this.Cart=data;
    })
  }
}
