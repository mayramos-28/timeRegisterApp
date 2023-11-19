import { Component, Input, OnInit } from '@angular/core';
import { TimeRegister } from 'src/app/interfaces/proyectsInterface';
import { TimeRegisterService } from 'src/app/services/time-register.service';
import { calculateTotalTime, formatTime } from 'src/app/utilities/calculateTIme';
import { ChangeDetectorRef } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DetailsModalComponent } from '../customsMaterial/modals/details-modal/details-modal.component';
import { DeleteModalComponent } from '../customsMaterial/modals/delete-modal/delete-modal.component';
import { UpdateModalComponent } from '../customsMaterial/modals/update-modal/update-modal.component';


@Component({
  selector: 'app-time-register',
  templateUrl: './time-register.component.html',
  styleUrls: ['./time-register.component.scss']
})
export class TimeRegisterComponent implements OnInit {
  @Input() idParent: string = '';
  timeRegister: any[] = [];
  allTimesRegisters: TimeRegister[] = [];
  data: any[] = [];
  displayedColumns: any[] = []
  date: string = '';
  startTime: string = '';
  stopTime: string = '';
  totalTime: string = ''; // Ahora se guarda como una cadena en formato hh:mm:ss
  initialValue: Date | null = null;
  finalValue: Date | null = null;

  constructor(private timeRegisterService: TimeRegisterService, private cdr: ChangeDetectorRef, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.date = new Date().toLocaleDateString();
    this.getTimesRegisters();
  }


  run() {
    this.initialValue = new Date();
    this.startTime = formatTime(this.initialValue);
    this.date = this.initialValue.toLocaleDateString();
  }

  stop() {
    if (!this.idParent) {
      return;
    }

    this.finalValue = new Date();
    this.stopTime = formatTime(this.finalValue);
    this.totalTime = calculateTotalTime(this.initialValue, this.finalValue);
    const newTimeRegister: TimeRegister = { parentId: this.idParent, isTask: false, date: this.date, startTime: this.startTime, stopTime: this.stopTime, totalTime: this.totalTime };
    this.timeRegister.push(newTimeRegister);
    this.timeRegisterService.addTimeRegister(newTimeRegister);
    this.startTime = '';
    this.stopTime = '';
    this.totalTime = '';
    this.initialValue = null;
    this.finalValue = null;

  }

  addTimeRegister(timeRegisters: TimeRegister[]) {
    this.timeRegisterService.addTimeRegister(timeRegisters[0]);
  }
  getTimesRegisters() {
    if (!this.idParent) {
      return;
    }
    this.timeRegisterService.getTimesRegisters(this.idParent).subscribe(timeRegisters => {
      this.allTimesRegisters = timeRegisters;


    });
  }

  update(id: any, timeRegister: TimeRegister){
    const data = this.allTimesRegisters.find(timeRegister => timeRegister.id === id);
    const onUpdate = (id:any, timeRegister:TimeRegister) => {
      this.onUpdate(id, timeRegister);
    };
    this.dialog.open(UpdateModalComponent, {
      width: '600px',
      height: '330px',

      data: {
        header: 'Editar registro',
        title: "Registro de "+ data?.date,
        information: data,
        rows: [          
          { field: 'startTime', label: 'Inicio' },
          { field: 'stopTime', label: 'Fin' },
        ],
        onUpdate: onUpdate,
      },
    })
  }
  onUpdate(id: any, timeRegister: TimeRegister){
    this.timeRegisterService.updateTimeRegister(id, timeRegister).then((r) => { alert('Actualizacion realizada correctamente' + r)  }).catch((error) => {});
  }

  delete(id: any) {
    const data = this.allTimesRegisters.find(timeRegister => timeRegister.id === id);
    const onDelete = () => {
      this.doDelete(id);
    };
    this.dialog.open(DeleteModalComponent, {
      width: '600px',
      height: '300px',

      data: {
        header: 'Eliminar registro',
        title: "Registro",
        information: data,
        rows: [
          { field: 'id', label: 'Id'},
          { field: 'date', label: 'Fecha' },
        ],
        onDelete: onDelete,
      },
    })

  }
  doDelete(id: any) {
    const idString = id.toString();
    this.timeRegisterService.deleteTimeRegister(idString).then((r) => {
      alert('Registro eliminado');
    }).catch((error) => {});

  }


  getDetails(id: any) {
    const data = this.allTimesRegisters.find(timeRegister => timeRegister.id === id);
    console.log(data, 'data')
    this.dialog.open(DetailsModalComponent, {
      width: '600px',
      height: '300px',

      data: {
        header: 'Detalles de registro',
        title: "Pruebas",
        information: data,
        rows: [
          { field: 'date', label: 'Fecha' },
          { field: 'startTime', label: 'Inicio' },
          { field: 'stopTime', label: 'Fin' },
          { field: 'totalTime', label: 'Total' }
        ],
      },
    })
  }

}
