import { Component, Input, OnInit } from '@angular/core';
import { Repo } from 'src/app/services/DTOs/Repo';
import { GitHubService } from 'src/app/services/git-hub.service';

@Component({
  selector: 'app-repos-table',
  templateUrl: './repos-table.component.html',
  styleUrls: ['./repos-table.component.scss']
})
export class ReposTableComponent implements OnInit {

  @Input() nickname: string;
  @Input() starred = false;

  public repoList: Array<Repo>;
  public loading = true;

  constructor(
    private gitHubService: GitHubService
  ) { }

  ngOnInit() {
    this.starred ?
    this.getRepoStarredListByNinkname() :
    this.getRepoListByNinkname();
  }

  private getRepoListByNinkname() {
    this.gitHubService.getReposByNickname(this.nickname).subscribe(
      response => this.repoList = this.setRepoObject(response)
    );
  }

  private getRepoStarredListByNinkname() {
    this.gitHubService.getStarredReposByNickname(this.nickname).subscribe(
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
    this.loading = false;
    return repoArray;
  }

}
