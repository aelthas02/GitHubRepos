import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public nickname = '';

  constructor(
    private router: Router
  ) {}

  public ngOnInit(): void {
  }

  public search(): void {
    this.nickname ?
    this.router.navigate(['/list'], { queryParams: { nickname: this.nickname }}) :
    this.router.navigate(['/home']);
  }

}
