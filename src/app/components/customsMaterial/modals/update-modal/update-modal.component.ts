import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-update-modal',
  templateUrl: './update-modal.component.html',
  styleUrls: ['./update-modal.component.scss']
})
export class UpdateModalComponent implements OnInit {
  information: any;
  title: string | null = null;
  rows: any;
  constructor(
    private formBuilder: FormBuilder,
    public dialog: MatDialog,
    public dialogRef: MatDialogRef<any>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }
  ngOnInit(): void {
    this.information = this.data.information;
    this.rows = this.data.rows;
    this.title = this.data.title;
    this.getValuesToChange();
  }

  close() {
    this.dialogRef.close();

  }

  formRegister: FormGroup = this.formBuilder.group({
    id: ['', [Validators.required]],
    date: ['', [Validators.required]],
    isTask: ['', [Validators.required]],
    parentId: ['', [Validators.required]],
    startTime: ['', [Validators.required]],
    stopTime: ['', [Validators.required]],
    totalTime: ['', [Validators.required]],
  });

  getValuesToChange(){
    this.formRegister.get('id')?.setValue(this.information.id);
    this.formRegister.get('date')?.setValue(this.information.date);
    this.formRegister.get('isTask')?.setValue(this.information.isTask);
    this.formRegister.get('parentId')?.setValue(this.information.parentId);
    this.formRegister.get('startTime')?.setValue(this.information.startTime);
    this.formRegister.get('stopTime')?.setValue(this.information.stopTime);
    this.formRegister.get('totalTime')?.setValue(this.information.totalTime);

  }

  confirmUpdate() {
    console.log('this.formRegister', this.formRegister.value)
    if(this.formRegister.invalid){
      return;
    }
    if (this.data && this.data.onUpdate) {
      this.data.onUpdate(this.information.id,this.formRegister.value); 
      this.dialogRef.close();
    }
  }
  
}
