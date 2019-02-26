import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NcType, NcTypeControllerService, ProcessControllerService } from 'src/app/masterdata-services';
import { MessageService } from 'primeng/api';
import { CommonService } from 'smsf-ui-layout';

@Component({
  selector: 'app-query',
  templateUrl: './query.component.html',
  styleUrls: ['./query.component.scss']
})
export class QueryComponent implements OnInit {

  @Output() reload = new EventEmitter();
  sidebarVisible = false;
  title: string;
  data: NcType = {};
  NcTypeOptions : any[];
  ProcessOptions:any[];
  constructor(
    private ncTypeControllerService : NcTypeControllerService,
    private processControllerService : ProcessControllerService,
    private messageService: MessageService,
    public cs: CommonService) { }

  ngOnInit() {
    this.ncTypeControllerService.ncTypeListUsingGET().subscribe( res => {
      this.NcTypeOptions = [];
      this.NcTypeOptions.push({label: 'ROOT', value: 'ROOT'});
      res.forEach(nctype => {
        const option = {label: nctype.typeName, value: nctype.id};
        this.NcTypeOptions.push(option);
      });
    });
    
    this.processControllerService.processListUsingGET().subscribe( res => {
      this.ProcessOptions = [];
      res.forEach(process => {
        const option = {label: process.name, value: process.id};
        this.ProcessOptions.push(option);
      });
    });
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
