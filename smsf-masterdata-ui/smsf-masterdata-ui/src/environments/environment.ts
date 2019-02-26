import { AuthConfig } from 'angular-oauth2-oidc';

// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  authConfig: {
    issuer: 'https://dlhpvva0002.dir.svc.accenture.com/smsf.identity',
    redirectUri: window.location.origin,
    silentRefreshRedirectUri: window.location.origin + '/assets/silent-refresh.html',
    clientId: 'angular',
    scope: 'openid profile user_profile',
    requireHttps: false,
    oidc: true
  },
  serverUri: 'http://localhost:10045',
  commonApiBasePath: 'https://dlhpvva0002.dir.svc.accenture.com/smsf',
  baseHref: '',
  applicationId: 'masterdata',
  tenantId: 'b',
};
