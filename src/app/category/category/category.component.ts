import { Component, OnInit } from '@angular/core';
import { ServerService } from 'src/app/server.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {

  constructor(public server:ServerService) { }
  
  categories:any;
  ngOnInit(): void {
    this.server.getDb().subscribe(val=>this.categories=val["categories"]);
  }
}
