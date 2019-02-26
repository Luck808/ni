import { Component } from '@angular/core';
import { OAuthService } from 'angular-oauth2-oidc';
import { environment } from '../environments/environment';
import { CommonService, LayoutService } from 'smsf-ui-layout';
import { TranslateService } from '@ngx-translate/core';
import { AppMenus } from './shared';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'app';

  constructor(private oauthService: OAuthService,
    private translate: TranslateService,
    // public layoutService: LayoutService,
    private commonService: CommonService
  ) {
    // Initial OAuthService
    this.initOAuth();

    // Initial translate
    // this.initTranslate();
    // layoutService.menuModel = AppMenus;
    this.commonService.initi18n('zh');
  }

  private initOAuth() {
    this.oauthService.configure(environment.authConfig);
    this.oauthService.setupAutomaticSilentRefresh();
    // Load Discovery Document and then try to login the user
    this.oauthService.loadDiscoveryDocumentAndTryLogin();
  }

  private initTranslate() {
    // console.log(translate.getBrowserLang());
    // translate.addLangs(['zh', 'en']);
    this.translate.setDefaultLang('zh');
    this.translate.use('zh');
    this.commonService.loadi18n();
    // console.log(this.commonService);
  }
}
