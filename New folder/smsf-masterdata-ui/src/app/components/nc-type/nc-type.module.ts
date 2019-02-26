import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NcTypeRoutingModule } from './nc-type-routing.module';
import { EditComponent } from './edit/edit.component';
import { QueryComponent } from './query/query.component';
import { IndexComponent } from './index/index.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { SidebarModule } from 'primeng/sidebar';
import { InputTextModule } from 'primeng/inputtext';
import { ConfirmDialogModule, TreeTableModule } from 'primeng/primeng';
import { InputSwitchModule } from 'primeng/inputswitch';
import { DropdownModule } from 'primeng/dropdown';
import { CalendarModule } from 'primeng/calendar'
import { LayoutModule } from 'smsf-ui-layout';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    TreeTableModule,
    NcTypeRoutingModule,
    ReactiveFormsModule,
    TableModule,
    FormsModule,
    ButtonModule,
    SidebarModule,
    InputTextModule,
    ConfirmDialogModule,
    InputSwitchModule,
    DropdownModule,
    CalendarModule,
    LayoutModule,
    TranslateModule.forChild(),
  ],
  declarations: [EditComponent, QueryComponent, IndexComponent]
})
export class NcTypeModule { }
