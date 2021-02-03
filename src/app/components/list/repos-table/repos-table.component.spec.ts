import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReposTableComponent } from './repos-table.component';

describe('StarredListComponent', () => {
  let component: ReposTableComponent;
  let fixture: ComponentFixture<ReposTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReposTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReposTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
