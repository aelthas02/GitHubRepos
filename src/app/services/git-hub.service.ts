import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Repo } from './DTOs/Repo';

@Injectable({
  providedIn: 'root'
})
export class GitHubService {

  constructor(
    private http: HttpClient
  ) { }

  public getReposByNickname(nickname: string): Observable<Array<Repo>> {
    return this.http.get<any>(`https://api.github.com/users/${nickname}/repos?per_page=50`);
  }

  public getStarredReposByNickname(nickname: string): Observable<Array<Repo>> {
    return this.http.get<any>(`https://api.github.com/users/${nickname}/starred`);
  }

}
