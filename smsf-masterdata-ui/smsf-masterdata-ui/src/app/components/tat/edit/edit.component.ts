import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MessageService, SelectItem } from 'primeng/api';
import { CommonService } from 'smsf-ui-layout';
import { TatControllerService, Tat } from '../../../masterdata-services';
import { ProcessControllerService } from 'src/app/masterdata-services/api/processController.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

  @Output() reload = new EventEmitter();

  sidebarVisible = false;
  data: Tat = {};
  id: string;
  i18n: any;
  ctList: any[];

  processOptions: any[];

  constructor(
    private processControllerService: ProcessControllerService,
    private tatControllerService: TatControllerService,
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
      this.tatControllerService.tatFindUsingGET(id).subscribe(
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
    this.tatControllerService.tatUpdateUsingPUT(this.data)
      .subscribe(res => {
        console.log(res);
        this.messageService.add({
          severity: 'success',
          summary: this.cs.L('message.updateSuccess'),
          detail: this.cs.L('message.updateSuccess')
        });
        this.close();
        this.reload.emit();
      });
  }

  /**
   * call service, post the form data to api
   */
  private create() {
    this.tatControllerService.tatSaveUsingPOST(this.data)
      .subscribe(res => {
        console.log(res);
        this.messageService.add({
          severity: 'success',
          summary: this.cs.L('message.addSuccess'),
          detail: this.cs.L('message.addSuccess')
        });
        this.close();
        this.reload.emit();
      });
  }
}
