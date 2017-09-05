import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RxCrudServiceComponent } from './rx-crud-service.component';

describe('RxCrudServiceComponent', () => {
  let component: RxCrudServiceComponent;
  let fixture: ComponentFixture<RxCrudServiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RxCrudServiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RxCrudServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
