import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CutoffTimeRoutingModule } from './cutoff-time-routing.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { SidebarModule, InputTextModule, ConfirmDialogModule, InputSwitchModule, DropdownModule, CalendarModule, TreeTableModule, TooltipModule, DialogModule, CardModule } from 'primeng/primeng';
import { LayoutModule } from 'smsf-ui-layout';
import { TranslateModule } from '@ngx-translate/core';
import { IndexComponent } from './index/index.component';
import { EditComponent } from './edit/edit.component';
import { SelectComponent } from './select/select.component';


@NgModule({
  imports: [
    CommonModule,
    CutoffTimeRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    TreeTableModule,
    TooltipModule,
    DialogModule,
    CardModule,
    TableModule,
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
  declarations: [IndexComponent, EditComponent, SelectComponent]
})
export class CutoffTimeModule { }
