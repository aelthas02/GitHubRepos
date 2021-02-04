import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Repo } from './DTOs/Repo';
import { Owner } from './DTOs/Owner';

@Injectable({
  providedIn: 'root'
})
export class GitHubService {

  constructor(
    private http: HttpClient
  ) { }

  public getGitHubOwner(nickname: string): Observable<Owner> {
    return this.http.get<any>(`https://api.github.com/users/${nickname}`);
  }

  public getReposByNicknameAndPage(nickname: string, page?: number): Observable<Array<Repo>> {
    return this.http.get<any>(`https://api.github.com/users/${nickname}/repos?per_page=10&page=${page ? page : 1}`);
  }

  public getStarredReposByNickname(nickname: string, page?: number): Observable<Array<Repo>> {
    return this.http.get<any>(`https://api.github.com/users/${nickname}/starred?per_page=10&page=${page ? page : 1}`);
  }

}
