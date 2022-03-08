import { Component, OnInit, Inject, Optional,ViewEncapsulation } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

interface Sort{
  index:number
  value:string
}
@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class DialogComponent implements OnInit {
  
  fromPage!:string;
  fromDialog!:string;

  constructor(public dialogRef:MatDialogRef<DialogComponent>,@Optional() @Inject(MAT_DIALOG_DATA) public data:any) { }

  ngOnInit(): void {
    this.fromDialog = "I am from dialog land...";
  }

  closeDialog() { this.dialogRef.close({ event: 'close', data: this.fromDialog }); }
  sorts: Sort[] = [
    {index: 1,value: 'Default'},
    {index: 2,value: 'Rating'}
  ];
  selectedSort=1;
}
