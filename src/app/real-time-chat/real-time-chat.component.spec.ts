import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RealTimeChatComponent } from './real-time-chat.component';

describe('RealTimeChatComponent', () => {
  let component: RealTimeChatComponent;
  let fixture: ComponentFixture<RealTimeChatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RealTimeChatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RealTimeChatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
