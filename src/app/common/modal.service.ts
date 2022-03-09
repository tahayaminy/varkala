import { Injectable} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from './dialog/dialog.component';

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  
  
  constructor(public dialog: MatDialog) { }

  openTempDialog(param) {
    const myTempDialog = this.dialog.open(DialogComponent, { data: param,panelClass:'dialog',position:{top:'1.75rem'}});
}
}
