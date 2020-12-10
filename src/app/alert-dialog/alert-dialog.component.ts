import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-alert-dialog',
  templateUrl: './alert-dialog.component.html',
  styleUrls: ['./alert-dialog.component.css']
})
export class AlertDialogComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) 
    public data : any,
    public dialogRef: MatDialogRef<AlertDialogComponent>
  ) { }

  ngOnInit(): void {
  }

  onClickOkButton(): void {
    this.dialogRef.close();
  }

}