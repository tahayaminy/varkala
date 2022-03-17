import { Component, ElementRef, OnInit, ViewChild,Input } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ServerService } from 'src/app/server.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  @Input() index!:boolean;
  
  constructor(public translate:TranslateService,public server:ServerService) { 
    translate.addLangs(['en','deu','fr']);
    translate.setDefaultLang('en');
    const browserLang=translate.getBrowserLang();
    translate.use(browserLang?.match(/en|deu|fr/) ? browserLang : 'en');
  }
  
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
