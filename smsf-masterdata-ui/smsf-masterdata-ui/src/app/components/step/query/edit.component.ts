import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MessageService } from 'primeng/api';
import { ISidebarSwitch, CommonService } from 'smsf-ui-layout';
import { ProcessControllerService } from 'src/app/masterdata-services';

@Component({
  selector: 'app-step-query',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})

export class QueryComponent implements OnInit, ISidebarSwitch {
  reload: EventEmitter<any>;
  @Output() queryreload = new EventEmitter();
  sidebarVisible = false;
  data: any = {};
  i18n: any;
  ctList: any[];
  flad: string;
  processOptions: any[];

  constructor(
    private processControllerService: ProcessControllerService,
    private messageService: MessageService,
    public cs: CommonService) { }

  ngOnInit() {

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
  /**
   * Open the role edit form
   * if id has value then edit else create
   * @param id role id
   */
  open(id?: string) {
    this.sidebarVisible = true;
  }

  /**
   * close the role edit form
   */
  close() {
    this.sidebarVisible = false;
  }

  Query() {
    this.close();
    this.queryreload.emit(this.data);
  }
}
