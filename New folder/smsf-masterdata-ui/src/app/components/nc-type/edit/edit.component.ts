import { Component, OnInit, EventEmitter, Output, ViewChild } from '@angular/core';
import { NcTypeControllerService, NcType, ProcessControllerService } from 'src/app/masterdata-services';
import { MessageService } from 'primeng/api';
import { CommonService } from 'smsf-ui-layout';
import { Dropdown } from 'primeng/primeng';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {
  @ViewChild ('companyId') companyId: Dropdown;
  @Output() reload = new EventEmitter();
  sidebarVisible = false;
  id: string;
  i18n: any;
  ctList: any[];
  data: NcType = {};
  
  NcTypeOptions: any[];
  NcTypeOptionsbock: any[];
  parentId: string;
  ProcessOptions:any[];

  constructor(private ncTypeControllerService: NcTypeControllerService,
    private messageService: MessageService,
    private processControllerService: ProcessControllerService,
    public cs: CommonService) { }

  ngOnInit() {
    this.ncTypeControllerService.ncTypeListUsingGET().subscribe( res => {
      this.NcTypeOptions = [];
      this.NcTypeOptionsbock = [];
      this.NcTypeOptionsbock.push({label: 'ROOT', value: 'ROOT'});
      res.forEach(NcType => {
        const option = {label: NcType.typeName, value: NcType.id};
        this.NcTypeOptionsbock.push(option);
      });
    });

    this.processControllerService.processListUsingGET().subscribe( res => {
      this.ProcessOptions = [];
      res.forEach(process => {
        const option = {label: process.name, value: process.id};
        this.ProcessOptions.push(option);
      });
    });

    // this.companyServicelevelOptionsID = this.companyServicelevelOptions;
  }
  changeNcTypeOptions(event) {
    console.log('Company Service Level changes :' + event.value);
    if (event.value) {
      this.data.parentId = event.value;
    } else {
      this.data.parentId = undefined;
    }
  }

  changeProcessOptions(event) {
    console.log('Company Service Level changes :' + event.value);
    if (event.value) {
      this.data.processId = event.value;
    } else {
      this.data.processId = undefined;
    }
  }
  open(id?: any) {
   if (id) {
    // this.directManagerOptions = this.directManagerOptions.filter(option => option.value !== id);
    // this.directManagerId.options = this.directManagerOptions;
    this.NcTypeOptions = this.NcTypeOptionsbock.filter(option => option.value !== id);
    this.companyId.options =  this.NcTypeOptions;
      this.ncTypeControllerService.ncTypeFindUsingGET(id).subscribe(
        value => {
          this.data = value;
          this.id = id;
        }
      );
    } else {
      this.NcTypeOptions = this.NcTypeOptionsbock;
      this.data = {};
      this.id = undefined;
      this.companyId.options =  this.NcTypeOptionsbock;
    }
    this.sidebarVisible = true;
  }
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
  close() {
    this.sidebarVisible = false;
  }
  /**
   * call service, put the form data to api
   */
  private update() {
    this.ncTypeControllerService.ncTypeUpdateUsingPUT(this.data)
      .subscribe(res => {
        console.log(res);
        this.messageService.add({
          severity: 'success',
          summary: this.cs.L('nctype.message.updateSuccess'),
          detail: this.cs.L('nctype.message.updateSuccess')
        });
        this.close();
        this.reload.emit();
      });
  }

  /**
   * call service, post the form data to api
   */
  private create() {
    if(!this.data.parentId) {
      this.data.parentId = 'ROOT';
    this.ncTypeControllerService.ncTypeSaveUsingPOST(this.data)
      .subscribe(res => {
        console.log(res);
        this.messageService.add({
          severity: 'success',
          summary: this.cs.L('nctype.message.addSuccess'),
          detail: this.cs.L('nctype.message.addSuccess')
        });
        this.close();
        this.reload.emit();
      });
    }else{
       this.ncTypeControllerService.ncTypeSaveUsingPOST(this.data)
      .subscribe(res => {
        console.log(res);
        this.messageService.add({
          severity: 'success',
          summary: this.cs.L('nctype.message.addSuccess'),
          detail: this.cs.L('nctype.message.addSuccess')
        });
        this.close();
        this.reload.emit();
      });
    }
    
  }
}

