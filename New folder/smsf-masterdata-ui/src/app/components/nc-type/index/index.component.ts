import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonService, ISidebarSwitch, Paged, setPageAndFilter } from 'smsf-ui-layout';
import { MessageService, LazyLoadEvent, TreeNode, ConfirmationService} from 'primeng/api';
import { TreeTable } from 'primeng/primeng';
import { NcType, NcTypeControllerService } from 'src/app/masterdata-services';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit, Paged {
  @ViewChild('table') table: TreeTable;
  @ViewChild('editSidebar') editSidebar: ISidebarSwitch;
  @ViewChild('querySidebar') querySidebar: ISidebarSwitch;
  totalRecords: number;
  page = 1;
  pageSize = 10;
  first = 0;
  loading = true;
  tableData: any[];
  tableCols: any[];
  i18n: any;
  event: LazyLoadEvent;
  pageSizeArray: number[];
  data: NcType = {parentId: 'ROOT'};
  parentId: string;


  treedatas: TreeNode[];
  selectedNodes: TreeNode[];
  isOpened: boolean;
  display = false;
  paramId; // 传递参数
  oprationType; // 传递新增节点类型

  constructor(public cs: CommonService,
    private ncTypeControllerService: NcTypeControllerService,
    private confirmationService: ConfirmationService,
    private messageService: MessageService) { }

    ngOnInit() {
      this.tableCols = [
        { field: 'id', header: this.cs.L('company.query.id') },
        { field: 'parentId', header: this.cs.L('company.query.parentId') },
        { field: 'id', header: this.cs.L('company.query.code') },
        { field: 'name', header: this.cs.L('company.query.name') }
      ];
      this.treedatas = [];
      this.pageSizeArray = [5, 10, 20, 50, 100, 500];
    }

    filter() {
      this.loading = true;
      this.ncTypeControllerService.ncTypeFindByPagedUsingPOST(this.data, this.page, this.pageSize)
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
                    typeName: row.typeName,
                    parentId: row.parentId,
                    processName: row.processName,
                    processId: row.processId
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

    loadNodes(event) {
      if (0 !== event.rows && 0 !== event.first) {
        this.page = Math.floor(event.rows / event.first) + 1;
      } else {
        this.page = 1;
      }

      this.filter();
    }

    onNodeExpand(event) {
      this.loading = true;
      const node = event.node;
      this.data.parentId = node.data.id;
      this.ncTypeControllerService.ncTypeFindByUsingPOST(this.data).subscribe(res => {
        // console.log(JSON.stringify(res));
        this.loading = false;
        node.children = [];
        res.map(row => {
          const children = {
            data: {
             id: row.id,
             parentId: row.parentId,
             typeName: row.typeName,
             processName: row.processName,
             processId: row.processId
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
        message: this.cs.L('nctype.message.deleteComfirmation', data),
        header: this.cs.L('nctype.message.title'),
        icon: 'fa ui-icon-warning',
        accept: () => {
          this.ncTypeControllerService.ncTypeDeleteUsingDELETE(data.id).subscribe(
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
