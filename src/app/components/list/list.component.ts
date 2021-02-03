import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Repo } from 'src/app/services/DTOs/Repo';
import { GitHubService } from 'src/app/services/git-hub.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  public repoList: Array<Repo>;

  constructor(
    private router: ActivatedRoute,
    private gitHubService: GitHubService
  ) { }

  public async ngOnInit(): Promise<void> {
    await this.getRepoList();
  }

  private async getRepoList(): Promise<void> {
    await this.router.queryParams.subscribe(
      queryParams => this.getRepoListByNinkname(queryParams.nickname)
    );
  }

  private getRepoListByNinkname(nickname: string) {
    this.gitHubService.getReposByNickname(nickname).subscribe(
      response => this.repoList = this.setRepoObject(response)
    );
  }

  private setRepoObject(response): Repo[] {
    const repoArray: Array<Repo> = response.map(
      element => ({
        avatarUrl: element.owner.avatar_url,
        ownerName: element.owner.login,
        htmlUrl: element.owner.html_url,
        name: element.name,
        description: element.description,
        url: element.url
      })
    );
    return repoArray;
  }
}
