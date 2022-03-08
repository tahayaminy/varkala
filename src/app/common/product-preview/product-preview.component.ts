import { Component, OnInit } from '@angular/core';
import { ModalService } from '../modal.service';

@Component({
  selector: 'app-product-preview',
  templateUrl: './product-preview.component.html',
  styleUrls: ['./product-preview.component.scss']
})
export class ProductPreviewComponent implements OnInit {

  constructor(public modal:ModalService) { }

  ngOnInit(): void {
  }
  myFooList = ['1 Item', '2 Second', '3 In Row', '4 to write', '5 To Do']
  modalOpen(){
    this.modal.openTempDialog(this.myFooList);
  }

}
