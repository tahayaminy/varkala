import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'varkala';
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
