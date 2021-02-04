import { Component, Input } from '@angular/core';
import { Repo } from 'src/app/services/DTOs/Repo';
import { GitHubService } from 'src/app/services/git-hub.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-repos-table',
  templateUrl: './repos-table.component.html',
  styleUrls: ['./repos-table.component.scss']
})
export class ReposTableComponent {

  @Input() starred = false;
  @Input() totalPages = 0;
  @Input()
  set nickname(nickname: string) {
    this._nickname = nickname;
    this.selectList(nickname);
  }

  public _nickname: string;
  public repoList: Array<Repo>;
  public loading = true;
  public selectedPage = 1;

  constructor(
    private gitHubService: GitHubService,
    private toastrService: ToastrService
  ) { }

  private selectList(nickname: string): void {
    this.starred ?
    this.getRepoStarredListByNinkname(nickname) :
    this.getRepoListByNinkname(nickname);
  }

  private getRepoListByNinkname(nickname: string): void {
    this.gitHubService.getReposByNicknameAndPage(nickname, this.selectedPage).subscribe(
      response => this.repoList = this.setRepoObject(response),
      error => this.toastrService.error('A lista de repositórios não pôde ser carregada.', 'Erro', error)
    );
  }

  private getRepoStarredListByNinkname(nickname: string): void {
    this.gitHubService.getStarredReposByNickname(nickname, this.selectedPage).subscribe(
      response => this.repoList = this.setRepoObject(response),
      error => this.toastrService.error('A lista de repositórios favoritos não pôde ser carregada.', 'Erro', error)
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

  public selectPage(page: number): void {
    this.selectedPage = page;
    this.selectList(this._nickname);
  }

  public nextPage(): void {
    this.selectedPage++;
    this.selectList(this._nickname);
  }

  public previousPage(): void {
    this.selectedPage--;
    this.selectList(this._nickname);
  }

  public setPages(n: number): number[] {
    return Array(n + 1);
  }

}
