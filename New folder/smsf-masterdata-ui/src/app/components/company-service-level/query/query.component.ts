import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { MessageService } from 'primeng/api';
import { CommonService } from 'smsf-ui-layout';
import { CompanyServiceLevel, CompanyServiceLevelControllerService } from 'src/app/masterdata-services';

@Component({
  selector: 'app-query',
  templateUrl: './query.component.html',
  styleUrls: ['./query.component.scss']
})
export class QueryComponent implements OnInit {
  @Output() reload = new EventEmitter();
  sidebarVisible = false;
  title: string;
  data: CompanyServiceLevel = {};
  companyServicelevelOptions : any[];
  constructor(
    private companyServiceLevelControllerService : CompanyServiceLevelControllerService,
    private messageService: MessageService,
    public cs: CommonService) { }

  ngOnInit() {
    this.companyServiceLevelControllerService.companyServiceLevelListUsingGET().subscribe( res => {
      this.companyServicelevelOptions = [];
      this.companyServicelevelOptions.push({label: 'ROOT', value: 'ROOT'});
      res.forEach(companyservicelevel => {
        const option = {label: companyservicelevel.name, value: companyservicelevel.id};
        this.companyServicelevelOptions.push(option);
      });
    });
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
   this.sidebarVisible = true;
  }
  onSubmit() {
    this.close();
    if(!this.data.parentId){
    this.data.parentId='ROOT'
    this.reload.emit(this.data);}
    else{
      this.reload.emit(this.data);
    }
  }

  close(): any {
    this.sidebarVisible = false;
  }
}
