import { Component, OnInit,Output, EventEmitter } from '@angular/core';
import { Options, ChangeContext } from '@angular-slider/ngx-slider';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit { 
  minValue: number = 40;
  maxValue: number = 110;
  options: Options = {
    floor: 0,
    ceil: 250
  };
  minPrice?:number=40;
  maxPrice?:number=110;
  @Output() public filters= new EventEmitter();
  subPanelOpen= [false,false,false];
  panelOpen=[false,false,false,false,false];

  constructor() {}

   setCategory(category){
    this.filters.emit(category);
  }
  
  onUserChangeStart(changeContext: ChangeContext): void {
    this.minPrice = this.getChangeContextString(changeContext)[0];
    this.maxPrice = this.getChangeContextString(changeContext)[1];
  }

  onUserChange(changeContext: ChangeContext): void {
    this.minPrice = this.getChangeContextString(changeContext)[0];
    this.maxPrice = this.getChangeContextString(changeContext)[1];
  }

  onUserChangeEnd(changeContext: ChangeContext): void {
    this.minPrice = this.getChangeContextString(changeContext)[0];
    this.maxPrice = this.getChangeContextString(changeContext)[1];
  }

  getChangeContextString(changeContext: ChangeContext): Array<any> {
           return [changeContext.value,changeContext.highValue]
  }

  ngOnInit(): void {
  }
    
}
