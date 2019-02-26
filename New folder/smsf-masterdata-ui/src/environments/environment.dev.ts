export const environment = {
  production: false,
  authConfig: {
    issuer: 'https://dlhpvva0002.dir.svc.accenture.com/smsf.identity',
    redirectUri: window.location.origin + '/smsf.authority.ui',
    silentRefreshRedirectUri: window.location.origin + '/smsf.authority.ui/assets/silent-refresh.html',
    clientId: 'angular',
    scope: 'openid profile user_profile',
    requireHttps: false,
    oidc: true
  },
  serverUri: 'http://localhost:10036',
  commonApiBasePath: 'https://dlhpvva0002.dir.svc.accenture.com/smsf',
  baseHref: '',
  applicationId: 'masterdata',
  tenantId: 'b'
};
