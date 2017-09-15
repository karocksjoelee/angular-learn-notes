import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InventoryManagmentComponent } from './inventory-managment.component';

describe('InventoryManagmentComponent', () => {
  let component: InventoryManagmentComponent;
  let fixture: ComponentFixture<InventoryManagmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InventoryManagmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InventoryManagmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
