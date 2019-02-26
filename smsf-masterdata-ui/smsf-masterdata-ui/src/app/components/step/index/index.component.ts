import { Component, OnInit, ViewChild } from '@angular/core';
import { Table } from 'primeng/table';
import { ConfirmationService, MessageService, LazyLoadEvent } from 'primeng/api';
import { ISidebarSwitch, CommonService, Paged, setPageAndFilter } from 'smsf-ui-layout';
import { StepControllerService, Step } from 'src/app/masterdata-services';

@Component({
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})

export class IndexComponent implements OnInit, Paged {
  @ViewChild('table') table: Table;
  @ViewChild('editSidebar') editSidebar: ISidebarSwitch;
  @ViewChild('querySidebar') querySidebar: ISidebarSwitch;

  totalRecords: number;
  page = 1;
  pageSize = 10;
  first = 0;
  loading = false;
  tableData: any[];
  tableCols: any[];
  i18n: any;
  event: LazyLoadEvent;
  pageSizeArray: number[];
  data: Step = {};

  constructor(
    private stepControllerServic: StepControllerService,
    private confirmationService: ConfirmationService,
    private messageService: MessageService,
    public cs: CommonService) {

  }

  ngOnInit() {
    this.tableCols = [
      { field: 'id', header: this.cs.L('step.field.id') },
      { field: 'name', header: this.cs.L('step.field.name') },
      { field: 'process', header: this.cs.L('step.field.process') }
    ];
    this.tableData = [];
    this.pageSizeArray = [5, 10, 20, 50, 100, 500];
  }


  filter() {
    this.loading = true;
    this.stepControllerServic.stepFindByPagedUsingPOST(this.page, this.pageSize, this.data)
      .subscribe(
        res => {
          console.log(`role filter response:${res}`);
          this.tableData = res.list;
          this.totalRecords = res.total;
          this.loading = false;
        }
      );
  }

  loadPage(event) {
    setPageAndFilter(event, this);
  }

  reload() {
    this.table.reset();
    this.filter();
  }
  queryreload(dto: any) {
    this.table.reset();
    this.data = dto;
    this.filter();

  }

  queryCompleted(newQuery: any): void {
      this.table.reset();
      this.filter();
  }

  query() {
    this.querySidebar.open();
  }

  add() {
    this.editSidebar.open();
  }

  edit(event: Event, id: string) {
    this.editSidebar.open(id);
    event.preventDefault();
  }

  delete(event: Event, data: any) {
   this.confirmationService.confirm({
      message: this.cs.L('message.deleteComfirmation', data),
      header: this.cs.L('application.message.alertTitle'),
      icon: 'fa ui-icon-warning',
      accept: () => {
        this.stepControllerServic.stepDeleteUsingDELETE(data.id).subscribe(
          () => {
            this.messageService.add({
              severity: 'success',
              summary: this.cs.L('application.message.success'),
              detail: this.cs.L('message.deleteSuccessful')
            });
            this.reload();
          },
          () => this.messageService.add({
            severity: 'error',
            summary: this.cs.L('application.message.error'),
            detail: this.cs.L('message.deleteFailed')
          })
        );
      }
    });
    event.preventDefault();
  }
}
