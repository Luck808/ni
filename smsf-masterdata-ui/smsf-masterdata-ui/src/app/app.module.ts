import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { LocationStrategy, HashLocationStrategy } from '@angular/common';

import { OAuthModule } from 'angular-oauth2-oidc';

import {
    ScrollPanelModule,
    PanelMenuModule,
    PanelMenuSub,
    BlockUIModule,
    ConfirmDialogModule
} from 'primeng/primeng';
import { ToastModule } from 'primeng/toast';

import {
    LayoutModule,
    AuthGuard,
    BASE_HREF
} from 'smsf-ui-layout';

import { Constants, AppMenus } from './shared';
import { environment } from '../environments/environment';
import { ApiModule, BASE_PATH, Configuration } from './masterdata-services';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './components/home/home.component';
import { AppComponent } from './app.component';
import {TreeDragDropService} from 'primeng/api';

export function ConfigurationFactory() {
    return new Configuration({ apiKeys: {} });
}

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        BrowserAnimationsModule,
        HttpClientModule,
        ConfirmDialogModule,
        OAuthModule.forRoot({
            resourceServer: {
                allowedUrls: [environment.serverUri],
                sendAccessToken: true
            }
        }),
        ApiModule.forRoot(ConfigurationFactory),
        AppRoutingModule,
        LayoutModule.forRoot({
            // Service请求自动注入tenantid和返回值自动解包
            serviceInterceptor: {
                basePath: environment.serverUri,
                tenantId: environment.tenantId,
            },
            /**
             * 国际化（多语言）配置
             */
            i18nConfig: {
                rootNode: 'masterdata',
                diableLangs: ['jp']
            },
            /**
             * 公共服务配置
             */
            commonModule: {
                apiBasePath: environment.commonApiBasePath
            },
            // 配置菜单服务
            menuServiceConfig: {
                menuServiceApiPath: environment.commonApiBasePath + '/menu',
                // 本服务名称（与后台menu_en.json配置一致）
                replaceLabel: 'MasterData'
            }
        })
    ],
    entryComponents: [
        PanelMenuSub
    ],
    providers: [
        // { provide: LocationStrategy, useClass: HashLocationStrategy },
        { provide: BASE_HREF, useValue: environment.baseHref },
        { provide: BASE_PATH, useValue: environment.serverUri },
        Constants,
        AuthGuard,
        TreeDragDropService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
