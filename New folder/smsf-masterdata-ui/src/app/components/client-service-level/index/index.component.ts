import { Component, OnInit, ViewChild } from '@angular/core';
import { TreeNode } from 'primeng/api';
import { TreeTable } from 'primeng/primeng';
import { ConfirmationService, MessageService, LazyLoadEvent } from 'primeng/api';
import { CommonService, ISidebarSwitch, Paged, setPageAndFilter } from 'smsf-ui-layout';
import { ClientServiceLevelControllerService, ClientServiceLevel, ProcessControllerService } from 'src/app/masterdata-services';


@Component({
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})

export class IndexComponent implements OnInit, Paged {

  @ViewChild('table') table: TreeTable;
  @ViewChild('editSidebar') editSidebar: ISidebarSwitch;
  @ViewChild('querySidebar') querySidebar: ISidebarSwitch;
  totalRecords: number;
  page = 1;
  pageSize = 10;
  first = 0;
  loading = false;
  i18n: any;
  event: LazyLoadEvent;
  pageSizeArray: number[];
  data: ClientServiceLevel = {parentId: 'ROOT'};
  treedatas: TreeNode[];
  selectedNodes: TreeNode[];

  constructor(
    private processControllerService: ProcessControllerService,
    private clientServiceLevelControllerService: ClientServiceLevelControllerService,
    private confirmationService: ConfirmationService,
    private messageService: MessageService,
    public cs: CommonService) {
  }

  ngOnInit() {
    this.pageSizeArray = [5, 10, 20, 50, 100, 500];
  }

  filter() {
    this.loading = true;
      this.clientServiceLevelControllerService.clientServiceLevelFindByPagedUsingPOST(this.data, this.page, this.pageSize)
      .subscribe(res => {
          if (res.list) {
            this.loading = false;
            this.treedatas = [];
            this.first = res.startRow;
            this.totalRecords = res.total;
            res.list.map(row => {
              const node = {
                data: {
                  id: row.id,
                  name: row.name,
                  code: row.code,
                  ety: row.ety,
                  parentId: row.parentId,
                  processName: row.processName,
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
            summary: this.cs.L('xchange.message.alertTitle'),
            detail: error
          });
        });
  }

  onNodeExpand(event) {
    this.loading = true;
    const node = event.node;
    this.clientServiceLevelControllerService.clientServiceLevelFindByUsingPOST({parentId: node.data.id}).subscribe(res => {
      this.loading = false;
      node.children = [];
      res.map(row => {
        const children = {
          data: {
            id: row.id,
            name: row.name,
            code: row.code,
            ety: row.ety,
            parentId: row.parentId,
            processName: row.processName,
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

  // 重新加载数据
  // 刷新的方法
  reload() {
    this.table.reset(); // 重置当前数据
    this.filter(); // 加载
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
        this.clientServiceLevelControllerService.clientServiceLevelDeleteUsingDELETE(data.id).subscribe(
          () => {
            this.messageService.add({
              severity: 'success',
              summary: this.cs.L('clientServiceLevel.message.alertTitle'),
              detail: this.cs.L('message.deleteSuccessful')
            });
            this.reload();
          },
          () => this.messageService.add({
            severity: 'error',
            summary: this.cs.L('clientServiceLevel.message.alertTitle'),
            detail: this.cs.L('message.deleteFailed')
          })
        );
      }
    });
    event.preventDefault();
  }
}
