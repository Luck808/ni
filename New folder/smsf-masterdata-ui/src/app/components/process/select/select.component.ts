import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CommonService } from 'smsf-ui-layout';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Process, CompanyServiceLevelControllerService } from 'src/app/masterdata-services';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent implements OnInit {
  @Output() closed = new EventEmitter;
  sidebarVisible: boolean;
  data: Process = {};
  title: string;
  companyServicelevelOptions: any[];

  constructor( private fb: FormBuilder,
    public cs: CommonService,
    private companyServiceLevelControllerService: CompanyServiceLevelControllerService) { }

  ngOnInit() {
    this.sidebarVisible = false;
    this.title = '';
    this.companyServiceLevelControllerService.companyServiceLevelListUsingGET().subscribe( res => {
      this.companyServicelevelOptions = [];
      res.forEach(companyservicelevel=>{
        const option = {label: companyservicelevel.name , value: companyservicelevel.id};
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
