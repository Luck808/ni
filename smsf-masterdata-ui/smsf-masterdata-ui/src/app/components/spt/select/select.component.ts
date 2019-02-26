import { Component, OnInit, Output } from '@angular/core';
import { MessageService } from 'primeng/api';
import { ISidebarSwitch, CommonService } from 'smsf-ui-layout';
import { FormGroup, FormBuilder } from '@angular/forms';
import { EventEmitter } from '@angular/core';
import { Spt, ProcessControllerService, StepControllerService } from 'src/app/masterdata-services';
@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent implements OnInit {
  @Output() closed = new EventEmitter();
  sidebarVisible: boolean;
  formGroup: FormGroup;
  title: string;
  i18n: any;
  ctList: any[];
  data: Spt = {};
  processOptions: any[];
  stepOptions: any[];


  constructor( 
    private processService: ProcessControllerService,
    private stepService: StepControllerService,
    private fb: FormBuilder,
    public cs: CommonService) { }

  ngOnInit() {
    this.sidebarVisible = false;
    this.title = '';
    this.formGroup = this.fb.group({
    id: ['']
    });

    this.processService.processListUsingGET().subscribe(res => {
      this.processOptions = [];
      res.forEach( process => {
        const option = {label: process.name, value: process.id};
        this.processOptions.push(option);
      });
    });

    this.stepService.stepListUsingGET().subscribe(res => {
      this.stepOptions = [];
      res.forEach( step => {
        const option = {label: step.name, value: step.id};
        this.stepOptions.push(option);
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

  changeStepOptions(event) {
    console.log('Step changes:' + event.value);
    if (event.value) {
      this.data.stepId = event.value;
    } else {
      this.data.stepId = undefined;
    }
  }

  open(id?: any) {
   this.sidebarVisible = true;
  }

  onSubmit() {
    this.close();
    this.closed.emit(this.data);
  }

  close(): any {
    this.sidebarVisible = false;
  }
}
