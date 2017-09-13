import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RxChatComponent } from './rx-chat.component';

describe('RxChatComponent', () => {
  let component: RxChatComponent;
  let fixture: ComponentFixture<RxChatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RxChatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RxChatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
