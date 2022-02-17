import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'varkala';
  Menu=false;
  submenuPage=false;
  @ViewChild('contMenu') menuCont!:ElementRef;
  @ViewChild('pageSub') pageSub!:ElementRef;
  responsiveMenu(){
    this.Menu=!this.Menu;
    console.log('run')
    if(this.Menu){
      this.menuCont.nativeElement.style.height='auto';
    }else{
      this.menuCont.nativeElement.style.height=0;
    }
  }
  togglePage(){
    this.submenuPage=!this.submenuPage;
    if(this.submenuPage){
      this.pageSub.nativeElement.classList.add('mt-32');
      this.pageSub.nativeElement.classList.remove('mt-44');
      this.pageSub.nativeElement.style.opacity=1;
      this.pageSub.nativeElement.style.pointerEvents='all';
    }else{
      this.pageSub.nativeElement.classList.add('mt-44');
      this.pageSub.nativeElement.classList.remove('mt-32');
      setTimeout(()=>{
        this.pageSub.nativeElement.style.opacity=0;
        this.pageSub.nativeElement.style.pointerEvents='none';
      },100)
    }
  }
  
}
