import { Component, ElementRef, OnInit, ViewChild,Input } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ServerService } from 'src/app/server.service';
import { ItemService } from '../item.service';

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
  ngOnInit(): void {    
    this.translate.get('navbar').subscribe(val=>this.navbar=val);
    this.server.getDb().subscribe(val=>this.categories=val["categories"]);
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

}
