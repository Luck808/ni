export const environment = {
  production: false,
  authConfig: {
    issuer: 'https://esouat.accenture.com/smsf.identity',
    redirectUri: window.location.origin + '/smsf.authority.ui',
    silentRefreshRedirectUri: window.location.origin + '/smsf.authority.ui/assets/silent-refresh.html',
    clientId: 'angular',
    scope: 'openid profile user_profile',
    requireHttps: false,
    oidc: true
  },
  serverUri: 'https://esouat.accenture.com/smsf/masterdata',
  commonApiBasePath: 'https://esouat.accenture.com/smsf',
  baseHref: '/smsf.masterdata.ui/',
  applicationId: 'masterdata',
  tenantId: 'b'
};
