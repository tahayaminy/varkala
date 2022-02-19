import { Component, ElementRef, OnInit, ViewChild,Input } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  @Input() index!:boolean;
  constructor() { }

  ngOnInit(): void {
  }
  Menu=false;
  @ViewChild('contMenu') menuCont!:ElementRef;
  responsiveMenu(){
    this.Menu=!this.Menu;
    console.log('run')
    if(this.Menu){
      this.menuCont.nativeElement.style.height='auto';
    }else{
      this.menuCont.nativeElement.style.height=0;
    }
  }
}
