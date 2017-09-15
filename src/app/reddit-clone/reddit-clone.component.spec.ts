import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RedditCloneComponent } from './reddit-clone.component';

describe('RedditCloneComponent', () => {
  let component: RedditCloneComponent;
  let fixture: ComponentFixture<RedditCloneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RedditCloneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RedditCloneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
