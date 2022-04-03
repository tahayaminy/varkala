import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.scss']
})
export class ConfirmComponent implements OnInit {
  localtotal=localStorage.getItem("totalprice");
  localshipping=localStorage.getItem("shipping")
  constructor() { }

  ngOnInit(): void {
  }


}
