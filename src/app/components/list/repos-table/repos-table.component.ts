import { Component, Input } from '@angular/core';
import { Repo } from 'src/app/services/DTOs/Repo';
import { GitHubService } from 'src/app/services/git-hub.service';

@Component({
  selector: 'app-repos-table',
  templateUrl: './repos-table.component.html',
  styleUrls: ['./repos-table.component.scss']
})
export class ReposTableComponent {

  @Input() starred = false;
  @Input()
  set nickname(nickname: string) {
    this.starred ?
    this.getRepoStarredListByNinkname(nickname) :
    this.getRepoListByNinkname(nickname);
  }

  public repoList: Array<Repo>;
  public loading = true;

  constructor(
    private gitHubService: GitHubService
  ) { }

  private getRepoListByNinkname(nickname: string): void {
    this.gitHubService.getReposByNickname(nickname).subscribe(
      response => this.repoList = this.setRepoObject(response)
    );
  }

  private getRepoStarredListByNinkname(nickname: string): void {
    this.gitHubService.getStarredReposByNickname(nickname).subscribe(
      response => this.repoList = this.setRepoObject(response)
    );
  }

  private setRepoObject(response): Repo[] {
    const repoArray: Array<Repo> = response.map(
      element => ({
        name: element.name,
        description: element.description,
        url: element.html_url
      })
    );
    this.loading = false;
    return repoArray;
  }

}
