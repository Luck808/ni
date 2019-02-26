import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CommonService } from 'smsf-ui-layout';
import { MessageService } from 'primeng/api';
import { Tat, ProcessControllerService } from '../../../masterdata-services';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent implements OnInit {
  @Output() reload = new EventEmitter();
  sidebarVisible = false;
  title: string;
  data: Tat = {};
  processOptions: any[];

  constructor(
    private messageService: MessageService,
    private processControllerService: ProcessControllerService,
    public cs: CommonService) { }

  ngOnInit() {
    this.data = {};
    this.processControllerService.processListUsingGET().subscribe(res => {
        this.processOptions = [];
        res.forEach( process => {
          const option = {label: process.name, value: process.id};
          this.processOptions.push(option);
        });
      });
  }

  changeProcessOptions(event) {
    console.log('Process changes:' + event.value);
    if (event.value) {
      this.data.processId = event.value;
    } else {
      this.data.processId = undefined;
    }
  }
  open(id?: any) {
   this.sidebarVisible = true;
  }

  onSubmit() {
    this.close();
    this.reload.emit(this.data);
  }

  close(): any {
    this.sidebarVisible = false;
  }
}
