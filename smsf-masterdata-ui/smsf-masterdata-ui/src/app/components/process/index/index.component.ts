import { Component, OnInit, ViewChild } from '@angular/core';
import { Table } from 'primeng/table';
import { ConfirmationService, MessageService, LazyLoadEvent } from 'primeng/api';
import { ISidebarSwitch, CommonService, Paged, setPageAndFilter } from 'smsf-ui-layout';
import { ProcessControllerService } from 'src/app/masterdata-services/api/processController.service';
import { Process } from 'src/app/masterdata-services';
@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
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
  id: string;
  data: Process = {};

  constructor( private confirmationService: ConfirmationService,
    private processControllerService: ProcessControllerService,
    public cs: CommonService,
    private messageService: MessageService) { }

    ngOnInit() {
      this.tableCols = [
        { field: 'id', header: this.cs.L('process.field.id') },
        { field: 'name', header: this.cs.L('process.field.name') },
        { field: 'companyservicelevelName', header: this.cs.L('process.field.companyservicelevelName') },
      ];
      this.tableData = [];
      this.pageSizeArray = [5, 10, 20, 50, 100, 500];
    }
    filter() {
      this.loading = true;
      this.processControllerService.processFindByPagedUsingPOST(this.page, this.pageSize, this.data)
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

    queryreload(query: any): void {
      this.data = query;
      this.filter();
      this.table.reset();
    }

    reload() {
      this.table.reset();
      this.filter();
    }

    queryCompleted(newQuery: any): void {
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
        message: this.cs.L('process.message.deleteComfirmation', data),
        header: this.cs.L('process.message.title'),
        icon: 'fa ui-icon-warning',
        accept: () => {
          this.processControllerService.processDeleteUsingDELETE(data.id).subscribe(
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
