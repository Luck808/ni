import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { EditComponent } from './edit/edit.component';
import { QueryComponent } from './query/edit.component';
import { FormsModule } from '@angular/forms';
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
import { StepRoutingModule } from './step-routing.module';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    StepRoutingModule,
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
    // ToastModule
  ],
  declarations: [IndexComponent, EditComponent, QueryComponent]
})
export class StepModule { }
