import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Owner } from 'src/app/services/DTOs/Owner';
import { Repo } from 'src/app/services/DTOs/Repo';
import { GitHubService } from 'src/app/services/git-hub.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  public owner: Owner;
  public nickname: string;

  constructor(
    private router: ActivatedRoute,
    private gitHubService: GitHubService
  ) { }

  public async ngOnInit(): Promise<void> {
    await this.getNickname();
  }

  private getNickname(): void {
    this.router.queryParams.subscribe(
      queryParams => {
        this.nickname = queryParams.nickname;
        this.getGitHubOwner(this.nickname);
      }
    );
  }

  private getGitHubOwner(nickname: string) {
    this.gitHubService.getGitHubOwner(nickname).subscribe(
      response => this.setOwnerObject(response)
    );
  }

  private setOwnerObject(response): void {
    this.owner = {
      login: response.login,
      avatarUrl: response.avatar_url,
      url: response.html_url,
    };
  }
}
