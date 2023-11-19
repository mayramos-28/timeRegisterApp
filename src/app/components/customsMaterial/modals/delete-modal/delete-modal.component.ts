import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-delete-modal',
  templateUrl: './delete-modal.component.html',
  styleUrls: ['./delete-modal.component.scss']
})
export class DeleteModalComponent {
  constructor(
    public dialog: MatDialog,
    public dialogRef: MatDialogRef<any>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }
  confirmDelete(): void {
    if (this.data && this.data.onDelete) {
      this.data.onDelete(); // Llama a la función onDelete proporcionada
    }
    this.dialogRef.close();
  }
  close() {
    this.dialogRef.close();
  }
}
