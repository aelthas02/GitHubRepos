import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Owner } from 'src/app/services/DTOs/Owner';
import { GitHubService } from 'src/app/services/git-hub.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  public owner: Owner;
  public nickname: string;
  public loading = true;
  public selectedTab = 1;
  public totalPages = 0;

  constructor(
    private router: ActivatedRoute,
    private gitHubService: GitHubService,
    private toastrService: ToastrService
  ) { }

  public ngOnInit(): void {
    this.getNickname();
  }

  private getNickname(): void {
    this.router.queryParams.subscribe(
      queryParams => {
        this.nickname = queryParams.nickname;
        this.getGitHubOwner(this.nickname);
      }
    );
  }

  private getGitHubOwner(nickname: string): void {
    this.gitHubService.getGitHubOwner(nickname).subscribe(
      response => this.setOwnerObject(response),
      error => this.toastrService.error('Usuário não pôde ser encontrado.', 'Erro', error)
    );
  }

  private setOwnerObject(response): void {
    this.owner = {
      login: response.login,
      avatarUrl: response.avatar_url,
      url: response.html_url,
    };
    this.totalPages = Math.ceil(response.public_repos / 10);
    this.loading = false;
  }

  public setTab(value: number) {
    this.selectedTab = value;
  }
}
