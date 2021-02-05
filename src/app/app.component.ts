import { Component } from '@angular/core';
import { OAuthService } from 'angular-oauth2-oidc';
import { authCodeFlowConfig } from './sso.config';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public title = 'Prova';

  constructor(
    private oauthService: OAuthService
  ) {
    this.configureSingleSignOn();
  }

  private configureSingleSignOn(): void {
    this.oauthService.configure(authCodeFlowConfig);
    // this.oauthService.loadDiscoveryDocumentAndLogin();
  }
}
