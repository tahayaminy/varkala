import { Component, OnInit } from '@angular/core';
import { Options, ChangeContext, PointerType } from '@angular-slider/ngx-slider';

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

  constructor() { }

  ngOnInit(): void {
  }
  panelOpenState1 = false;
  panelOpenState2 = false;
  panelOpenState3 = false;
}
