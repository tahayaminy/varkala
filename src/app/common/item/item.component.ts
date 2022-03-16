import { Component, OnInit } from '@angular/core';
import { ServerService } from 'src/app/server.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {

  constructor(public item:ServerService) { }

  ngOnInit(): void {
    //this.item.getDb().subscribe(val=>console.log(val["products"]));
  }

}
