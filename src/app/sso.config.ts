import { AuthConfig } from 'angular-oauth2-oidc';

export const authCodeFlowConfig: AuthConfig = {
  issuer: 'https://github.com/login/oauth/authorize',
  redirectUri: window.location.origin,
  clientId: '42dd624c5ee65acd93eb',

};
