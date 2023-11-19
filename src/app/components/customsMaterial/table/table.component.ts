import { Component, Input, OnInit, SimpleChanges } from '@angular/core';

import { MatDialog } from '@angular/material/dialog';
import { DetailsModalComponent } from '../modals/details-modal/details-modal.component';
import { ChangeDetectionStrategy } from '@angular/core';



@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TableComponent implements OnInit {
  @Input() displayedColumns: any[] = [];
  @Input() data: any[] =  [{
    date
      :
      "19/11/2023",
    id
      :
      "Auful89j7FCab1q1JZoB",
    isTask
      :
      false,
    parentId
      :
      "fI0wrT5AY5biKc879dsa",
    startTime
      :
      "09:54:19",
    stopTime
      :
      "09:54:21",
    totalTime
      :
      "00:00:01"
  }];;
  
  dataSource: any[] =  [{
    date
      :
      "19/11/2023",
    id
      :
      "Auful89j7FCab1q1JZoB",
    isTask
      :
      false,
    parentId
      :
      "fI0wrT5AY5biKc879dsa",
    startTime
      :
      "09:54:19",
    stopTime
      :
      "09:54:21",
    totalTime
      :
      "00:00:01"
  }];;
  columnProps: any[] = [];

  resultsLength = 0

  constructor(
    public dialog: MatDialog
  ) { }
  ngOnInit(): void {
    console.log(this.data, 'data')
    this.dataSource = this.data;
    this.columnProps = this.displayedColumns.map(column => column.prop);
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.dataSource = this.data;
    this.columnProps = this.displayedColumns.map(column => column.prop);
  }

  handleEdit(element: any) {
    console.log(element)
    this.dialog.open(DetailsModalComponent, {
      width: '700px',
      height: '450px',
      data: { element: element },
    });
  }

  handleDetail(element: any) {
    console.log(element);
  }

  handleDelete(element: any) {
    console.log(element);
  }
}
