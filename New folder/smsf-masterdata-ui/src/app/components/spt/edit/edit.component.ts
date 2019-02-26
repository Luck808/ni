import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MessageService } from 'primeng/api';
import { ISidebarSwitch, CommonService } from 'smsf-ui-layout';
import { SptControllerService, ProcessControllerService, StepControllerService  } from '../../../masterdata-services';
import { Spt } from 'src/app/masterdata-services/model/spt';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {
  @Output() reload = new EventEmitter();

  sidebarVisible = false;
  data: Spt = {};
  id: string;
  i18n: any;
  ctList: any[];
  processOptions: any[];
  stepOptions: any[];


  constructor(
    private processService: ProcessControllerService,
    private stepService: StepControllerService,
    private sptService: SptControllerService,
    private messageService: MessageService,
    public cs: CommonService) { }

  ngOnInit() {
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

  show() {
    this.sidebarVisible = true;
  }

  /**
   * Open the role edit form
   * if id has value then edit else create
   * @param id role id
   */
  open(id?: any) {
    if (id) {
      // get by id
      this.sptService.sptFindUsingGET(id).subscribe(
        value => {
          this.data = value;
          this.id = id;
        }
      );
    } else {
      this.data = {};
      this.id = undefined;
    }
    this.sidebarVisible = true;
  }
  /**
   * close the role edit form
   */
  close() {
    this.sidebarVisible = false;
  }

  /**
   * if id has value then update else create
   */
  save() {
    if (!this.data) {
      this.messageService.add({
        severity: 'error',
        summary: this.cs.L('application.message.alertTitle'),
        detail: this.cs.L('message.inValidData')
      });
      return;
    }

    if (!this.data) {
      this.messageService.add({
        severity: 'error',
        summary: this.cs.L('application.message.alertTitle'),
        detail: this.cs.L('application.message.nameIsNotNull'),
      });
      return;
    }

    if (this.id) {
      this.update();
    } else {
      this.create();
    }
  }

  /**
   * call service, put the form data to api
   */
  private update() {
    this.sptService.sptUpdateUsingPUT(this.data)
      .subscribe(res => {
        console.log(res);
        this.messageService.add({
          severity: 'success',
          summary: this.cs.L('spt.message.updateSuccess'),
          detail: this.cs.L('spt.message.updateSuccess')
        });
        this.close();
        this.reload.emit();
      });
  }

  /**
   * call service, post the form data to api
   */
  private create() {
    this.sptService.sptSaveUsingPOST(this.data)
      .subscribe(res => {
        console.log(res);
        this.messageService.add({
          severity: 'success',
          summary: this.cs.L('spt.message.addSuccess'),
          detail: this.cs.L('spt.message.addSuccess')
        });
        this.close();
        this.reload.emit();
      });
  }
}
