import { Component, OnInit, ViewChild } from '@angular/core';
import { Table } from 'primeng/table';
import { ConfirmationService, MessageService, LazyLoadEvent } from 'primeng/api';
import { ISidebarSwitch, CommonService, Paged, setPageAndFilter } from 'smsf-ui-layout';
import { SptControllerService } from 'src/app/masterdata-services';
import { SelectComponent } from '../select/select.component';
import { Spt } from 'src/app/masterdata-services/model/spt';
@Component({
  templateUrl: './index.component.html'
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
  data: Spt = {};
  event: LazyLoadEvent;
  pageSizeArray: number[];
  id: string;

  constructor(
    private sptService: SptControllerService,
    private confirmationService: ConfirmationService,
    private messageService: MessageService,
    public cs: CommonService) {}

    ngOnInit() {
      this.tableCols = [
        { field: 'id', header: this.cs.L('spt.field.id') },
        { field: 'processId', header: this.cs.L('spt.field.process') },
        { field: 'spt', header: this.cs.L('spt.field.spt') },
        { field: 'stepId', header: this.cs.L('spt.field.step') }
      ];
      this.tableData = [];
      this.pageSizeArray = [5, 10, 20, 50, 100, 500];
    }


    filter() {
      this.loading = true;
      this.sptService.sptFindByPagedUsingPOST(this.page, this.pageSize , this.data)
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

    queryreload(query: any): void {
      this.data = query;
      this.filter();
      this.table.reset();
    }

    queryCompleted(newQuery: any): void {
        // this.query = newQuery;
        this.table.reset();
        this.filter();
    }

    showQuery(): void {
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
        message: this.cs.L('cutofftime.message.deleteComfirmation', data),
        header: this.cs.L('application.message.alertTitle'),
        icon: 'fa ui-icon-warning',
        accept: () => {
          this.sptService.sptDeleteUsingDELETE(data.id).subscribe(
            () => {
              this.messageService.add({
                severity: 'success',
                summary: this.cs.L('message.deleteSuccessful'),
                detail: this.cs.L('message.deleteSuccessful')
              });
              this.reload();
            },
            () => this.messageService.add({
              severity: 'error',
              summary: this.cs.L('message.deleteFailed'),
              detail: this.cs.L('message.deleteFailed')
            })
          );
        }
      });
      event.preventDefault();
    }
  }
