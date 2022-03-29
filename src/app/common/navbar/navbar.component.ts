import { Component, ElementRef, OnInit, ViewChild,Input } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ServerService } from 'src/app/server.service';
import { ItemService } from '../item.service';
import { User } from 'src/assets/server/models/User';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  @Input() index!:boolean;
  
  constructor(public translate:TranslateService,public server:ServerService,public itemService:ItemService) {    
  }
  Wishlist=this.itemService.Wishlist;
  Cart=this.itemService.Cart;
  navbar:any;
  categories:any;
  price=localStorage.getItem("price");
  logged=false;
  dashboard?:User;
  ngOnInit(): void {
    console.log(this.price)    
    this.translate.get('navbar').subscribe(val=>this.navbar=val);
    this.server.getDb().subscribe(val=>this.categories=val["categories"]);
    var profile=sessionStorage.getItem("userId");
    if(profile){
      let data=Number(profile);
      console.log(profile)
      console.log(data);
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
  }



  translator(lang){
    this.translate.use(lang);
    this.translate.get('navbar').subscribe(val=>this.navbar=val);
  }

  Menu=false;

  @ViewChild('contMenu') menuCont!:ElementRef;

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
  }
}
