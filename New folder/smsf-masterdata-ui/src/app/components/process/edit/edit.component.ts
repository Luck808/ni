import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ProcessControllerService, Process, CompanyServiceLevelControllerService } from 'src/app/masterdata-services';
import { MessageService } from 'primeng/api';
import { CommonService } from 'smsf-ui-layout';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {
  @Output() reload = new EventEmitter();
  sidebarVisible = false;
  id: string;
  i18n: any;
  ctList: any[];
  data: Process = {};
  companyServicelevelOptions: any[];

  constructor(
    private companyServiceLevelControllerService: CompanyServiceLevelControllerService,
    private processControllerService: ProcessControllerService,
    private messageService: MessageService,
    public cs: CommonService) { }

  ngOnInit() {
      this.companyServiceLevelControllerService.companyServiceLevelListUsingGET().subscribe( res => {
        this.companyServicelevelOptions = [];
        res.forEach(companyservicelevel => {
          const option = {label: companyservicelevel.name, value: companyservicelevel.id};
          this.companyServicelevelOptions.push(option);
        });
      });
  }
  changeCompanyOptions(event) {
    console.log('Company Service Level changes :' + event.value);
    if (event.value) {
      this.data.companyServiceLevelId = event.value;
    } else {
      this.data.companyServiceLevelId = undefined;
    }
  }
  show() {
    this.sidebarVisible = true;
   }
  open(id?: any) {
   if (id) {
      this.processControllerService.processFindUsingGET(id).subscribe(
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
    this.processControllerService.processUpdateUsingPUT(this.data)
      .subscribe(res => {
        console.log(res);
        this.messageService.add({
          severity: 'success',
          summary: this.cs.L('process.message.updateSuccess'),
          detail: this.cs.L('process.message.updateSuccess')
        });
        this.close();
        this.reload.emit();
      });
  }

  /**
   * call service, post the form data to api
   */
  private create() {
    this.processControllerService.processSaveUsingPOST(this.data)
      .subscribe(res => {
        console.log(res);
        this.messageService.add({
          severity: 'success',
          summary: this.cs.L('process.message.addSuccess'),
          detail: this.cs.L('process.message.addSuccess')
        });
        this.close();
        this.reload.emit();
      });
  }
}

