import { Component, OnInit, Output, EventEmitter, ViewChild } from '@angular/core';
import { CompanyServiceLevel, CompanyServiceLevelControllerService } from 'src/app/masterdata-services';
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
  data: CompanyServiceLevel = {};
  companyServicelevelOptions: any[];
  companyServicelevelOptionsbock: any[];
  parentId: string;
  

  constructor(private companyServiceLevelControllerService: CompanyServiceLevelControllerService,
    private messageService: MessageService,
    public cs: CommonService) { }

  ngOnInit() {
    this.companyServiceLevelControllerService.companyServiceLevelListUsingGET().subscribe( res => {
      this.companyServicelevelOptions = [];
      this.companyServicelevelOptionsbock = [];
      this.companyServicelevelOptionsbock.push({label: 'ROOT', value: 'ROOT'});
      res.forEach(companyservicelevel => {
        const option = {label: companyservicelevel.name, value: companyservicelevel.id};
        this.companyServicelevelOptionsbock.push(option);
      });
    });

    // this.companyServicelevelOptionsID = this.companyServicelevelOptions;
  }
  changeCompanyOptions(event) {
    console.log('Company Service Level changes :' + event.value);
    if (event.value) {
      this.data.parentId = event.value;
    } else {
      this.data.parentId = undefined;
    }
  }
  open(id?: any) {
   if (id) {
    // this.directManagerOptions = this.directManagerOptions.filter(option => option.value !== id);
    // this.directManagerId.options = this.directManagerOptions;
    this.companyServicelevelOptions = this.companyServicelevelOptionsbock.filter(option => option.value !== id);
    this.companyId.options =  this.companyServicelevelOptions;
      this.companyServiceLevelControllerService.companyServiceLevelFindUsingGET(id).subscribe(
        value => {
          this.data = value;
          this.id = id;
        }
      );
    } else {
      this.companyServicelevelOptions = this.companyServicelevelOptionsbock;
      this.data = {};
      this.id = undefined;
      this.companyId.options =  this.companyServicelevelOptionsbock;
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
    this.companyServiceLevelControllerService.companyServiceLevelUpdateUsingPUT(this.data)
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
    this.companyServiceLevelControllerService.companyServiceLevelSaveUsingPOST(this.data)
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
       this.companyServiceLevelControllerService.companyServiceLevelSaveUsingPOST(this.data)
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
