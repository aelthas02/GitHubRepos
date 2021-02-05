import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GitHubService {

  constructor(
    private http: HttpClient
  ) { }

  public getGitHubOwner(nickname: string): Observable<any> {
    return this.http.get<any>(`https://api.github.com/users/${nickname}`);
  }

  public getReposByNicknameAndPage(nickname: string, page: number): Observable<any> {
    return this.http.get<any>(`https://api.github.com/users/${nickname}/repos?per_page=10&page=${page ? page : 1}`);
  }

  public getStarredReposByNickname(nickname: string): Observable<any> {
    return this.http.get<any>(`https://api.github.com/users/${nickname}/starred`);
  }

}
