export const environment = {
  production: true,
  authConfig: {
    issuer: 'https://dlhpvva0002.dir.svc.accenture.com/smsf.identity',
    redirectUri: window.location.origin + '/smsf.masterdata.ui',
    silentRefreshRedirectUri: window.location.origin + '/smsf.masterdata.ui/assets/silent-refresh.html',
    clientId: 'angular',
    scope: 'openid profile user_profile',
    requireHttps: false,
    oidc: true
  },

  serverUri: 'https://dlhpvva0002.dir.svc.accenture.com/smsf/masterdata',
  commonApiBasePath: 'https://dlhpvva0002.dir.svc.accenture.com/smsf',
  baseHref: '',
  applicationId: 'masterdata',
  tenantId: 'b'
};
