import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard, AuthCallbackComponent, ErrorComponent } from 'smsf-ui-layout';
import { HomeComponent } from './components/home/home.component';

export const routes: Routes = [
    { path: '', component: AuthCallbackComponent, pathMatch: 'full' },
    { path: 'company-service-level', canActivate: [AuthGuard],
        loadChildren: './components/company-service-level/company-service-level.module#CompanyServiceLevelModule'},
    { path: 'client-service-level', canActivate: [AuthGuard],
        loadChildren: './components/client-service-level/client-service-level.module#ClientServiceLevelModule'},
    { path: 'step', canActivate: [AuthGuard], loadChildren: './components/step/step.module#StepModule'},
    { path: 'cutoff-time', canActivate: [AuthGuard], loadChildren: './components/cutoff-time/cutoff-time.module#CutoffTimeModule'},
    { path: 'process', canActivate: [AuthGuard], loadChildren: './components/process/process.module#ProcessModule'},
    { path: 'nc-type', canActivate: [AuthGuard], loadChildren: './components/nc-type/nc-type.module#NcTypeModule'},
    { path: 'spt', canActivate: [AuthGuard], loadChildren: './components/spt/spt.module#SptModule'},
    { path: 'tat', canActivate: [AuthGuard], loadChildren: './components/tat/tat.module#TatModule'},
    { path: 'home', canActivate: [AuthGuard], component: HomeComponent },
    { path: 'error', component: ErrorComponent },
    { path: 'error/:code', component: ErrorComponent },
    { path: '**', redirectTo: '' },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
