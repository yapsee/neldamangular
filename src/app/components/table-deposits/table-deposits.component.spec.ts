import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableDepositsComponent } from './table-deposits.component';

describe('TableDepositsComponent', () => {
  let component: TableDepositsComponent;
  let fixture: ComponentFixture<TableDepositsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableDepositsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableDepositsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
