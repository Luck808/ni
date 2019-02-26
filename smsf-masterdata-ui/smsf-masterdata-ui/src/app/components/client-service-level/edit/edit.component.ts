import { Component, OnInit, Output, EventEmitter, ViewChild } from '@angular/core';
import { MessageService } from 'primeng/api';
import { ISidebarSwitch, CommonService } from 'smsf-ui-layout';
import { ClientServiceLevel, ClientServiceLevelControllerService, ProcessControllerService } from 'src/app/masterdata-services';
import { Dropdown } from 'primeng/dropdown';

@Component({
  selector: 'app-clientServiceLevel-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit, ISidebarSwitch {

  @Output() reload = new EventEmitter();
  @ViewChild ('parentId') parentId: Dropdown;
  sidebarVisible = false; // 边栏可见
  data: ClientServiceLevel = {};
  id: string;
  i18n: any;
  ctList: any[];
  processOptions: any[];
  clientServiceLevelOptions: any[];
  clientServiceLevelOptionsBak: any[];

  constructor(
    private processControllerService: ProcessControllerService,
    private clientServiceLevelControllerService: ClientServiceLevelControllerService,
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

    // this.clientServiceLevelControllerService.clientServiceLevelListUsingGET().subscribe( res => {
    //   this.clientServiceLevelOptions = [];
    //   this.clientServiceLevelOptionsBak = [];
    //   const root = {
    //     label: 'ROOT',
    //     value: 'ROOT'
    //   };
    //   // this.clientServiceLevelOptions.push(root);
    //   this.clientServiceLevelOptions = [root];
    //   res.forEach(clientservicelevel => {
    //     const option = {label: clientservicelevel.name, value: clientservicelevel.id};
    //     this.clientServiceLevelOptionsBak.push(option);
    //   });
    // });


    this.clientServiceLevelControllerService.clientServiceLevelListUsingGET().subscribe( res => {
      this.clientServiceLevelOptions = [];
      this.clientServiceLevelOptionsBak = [];
      this.clientServiceLevelOptionsBak.push({label: 'ROOT', value: 'ROOT'});
      res.forEach(clientservicelevel => {
        const option = {label: clientservicelevel.name, value: clientservicelevel.id};
        this.clientServiceLevelOptionsBak.push(option);
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
  changeclientOptions(event) {
    console.log('Process changes:' + event.value);
    if (event.value) {
      this.data.parentId = event.value;
    } else {
      this.data.parentId = undefined;
    }
  }

  /**
   * Open the role edit form
   * if id has value then edit else create
   * @param id role id
   */
  open(id?: any ) {
    if (id) {
      // get by id
      this.clientServiceLevelOptions = this.clientServiceLevelOptionsBak.filter(option => option.value !== id);
      this.parentId.options = this.clientServiceLevelOptions;
      this.clientServiceLevelControllerService.clientServiceLevelFindUsingGET(id).subscribe(
        value => {
          this.data = value;
          this.id = id;
        }
      );
    } else {
      this.clientServiceLevelOptions = this.clientServiceLevelOptionsBak;
      this.data = {};
      this.id = undefined;
      this.parentId.options = this.clientServiceLevelOptionsBak;
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

    if (!this.data.name) {
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
    this.clientServiceLevelControllerService
      .clientServiceLevelUpdateUsingPUT(this.data)
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
    if(!this.data.parentId){
      this.data.parentId='ROOT';
      this.clientServiceLevelControllerService.clientServiceLevelSaveUsingPOST(this.data)
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
    }else{   this.clientServiceLevelControllerService.clientServiceLevelSaveUsingPOST(this.data)
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
}