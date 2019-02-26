import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TatRoutingModule } from './tat-routing.module';
import { EditComponent } from './edit/edit.component';
import { IndexComponent } from './index/index.component';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { SidebarModule } from 'primeng/sidebar';
import { InputTextModule } from 'primeng/inputtext';
import { ConfirmDialogModule } from 'primeng/primeng';
import { InputSwitchModule } from 'primeng/inputswitch';
import { DropdownModule } from 'primeng/dropdown';
import { CalendarModule } from 'primeng/calendar';
import { TranslateModule } from '@ngx-translate/core';
import { LayoutModule } from 'smsf-ui-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SelectComponent } from './select/select.component';
@NgModule({
  imports: [
    CommonModule,
    TatRoutingModule,
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
  declarations: [EditComponent, IndexComponent, SelectComponent]
})
export class TatModule { }
