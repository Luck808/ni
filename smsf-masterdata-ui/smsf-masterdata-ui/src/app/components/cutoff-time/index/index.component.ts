import { Component, OnInit, ViewChild } from '@angular/core';
import { Table } from 'primeng/table';
import { ConfirmationService, MessageService, LazyLoadEvent, TreeNode } from 'primeng/api';
import { ISidebarSwitch, CommonService, Paged, setPageAndFilter } from 'smsf-ui-layout';
import { CutoffTimeControllerService } from 'src/app/masterdata-services';
import { CutoffTime } from 'src/app/masterdata-services/model/cutoffTime';
import { TreeTable } from 'primeng/primeng';

@Component({
  templateUrl: './index.component.html'
})

export class IndexComponent implements OnInit, Paged {

  @ViewChild('table') table: TreeTable;
  @ViewChild('editSidebar') editSidebar: ISidebarSwitch;
  @ViewChild('querySidebar') querySidebar: ISidebarSwitch;

  treedatas: TreeNode[];
  selectedNodes: TreeNode[];
  totalRecords: number;
  page = 1;
  pageSize = 10;
  first = 0;
  loading = false;
  tableCols: any[];
  i18n: any;
  data: CutoffTime = {};
  event: LazyLoadEvent;
  pageSizeArray: number[];
  id: string;
  isOpened: boolean;
  cols: any[];
  display = false;
  paramId; // 传递参数
  oprationType; // 传递新增节点类型

  constructor(
    private cutoffTimeService: CutoffTimeControllerService,
    private confirmationService: ConfirmationService,
    private messageService: MessageService,
    public cs: CommonService) {}

    ngOnInit() {
      this.tableCols = [
        { field: 'id', header: this.cs.L('id') },
        { field: 'processId', header: this.cs.L('process') },
        { field: 'time', header: this.cs.L('time') }
      ];
      this.treedatas = [];
      this.pageSizeArray = [5, 10, 20, 50, 100, 500];
    }


    filter() {
      this.loading = true;
      // if (this.id) {
      // this.cutoffTimeService.cutoffTimeFindUsingGET(this.id).subscribe(
      //   value => {
      //     console.log(`role filter response:${value}`);
      //     this.data = value;
      //     this.treedatas = [this.data];
      //     // this.id = this.id;
      // }
      // );
      // } else {
      this.cutoffTimeService.cutoffTimeFindByPagedUsingPOST(this.data, this.page, this.pageSize)
        .subscribe(
          res => {
          if (res.list) {
            this.loading = false;
            this.treedatas = [];
            this.first = res.startRow;
            this.totalRecords = res.total;
            res.list.map(row => {
              const node = {
                data: {
                   id: row.id,
                   processName: row.processName,
                   time: row.time
                },
                leaf: false // row.isLeaf
              };

              this.treedatas.push(node);
            });
          }
        }, error => {
          console.log(error);
          this.messageService.add({
            severity: 'error',
            summary: this.cs.L('cutofftime.message.alertTitle'),
            detail: error
          });
        }
        );
    }

    onNodeExpand(event) {
      this.loading = true;
      const node = event.node;
      this.cutoffTimeService.cutoffTimeFindByUsingPOST(node.data).subscribe(res => {
        // console.log(JSON.stringify(res));
        this.loading = false;
        node.children = [];
        res.map(row => {
          const children = {
            data: {
              id: row.id,
              processId: row.processId,
              time: row.time
            },
            leaf: false // row.isLeaf
          };
          node.children.push(children);
        });

      this.treedatas = [...this.treedatas];
      });
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
          this.cutoffTimeService.cutoffTimeDeleteUsingDELETE(data.id).subscribe(
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
