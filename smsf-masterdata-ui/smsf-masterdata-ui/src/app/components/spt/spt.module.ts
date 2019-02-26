import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SptRoutingModule } from './spt-routing.module';
import { IndexComponent } from './index/index.component';
import { SelectComponent } from './select/select.component';
import { EditComponent } from './edit/edit.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { SidebarModule, InputTextModule, ConfirmDialogModule, InputSwitchModule, DropdownModule, CalendarModule } from 'primeng/primeng';
import { LayoutModule } from 'smsf-ui-layout';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    SptRoutingModule,
    ReactiveFormsModule,
    FormsModule,
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
  declarations: [IndexComponent, SelectComponent, EditComponent]
})
export class SptModule { }
