import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProcessRoutingModule } from './process-routing.module';
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
import { EditComponent } from './edit/edit.component';
import { SelectComponent } from './select/select.component';

@NgModule({
  imports: [
    CommonModule,
    ProcessRoutingModule,
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
  declarations: [IndexComponent, EditComponent, SelectComponent]
})
export class ProcessModule { }
