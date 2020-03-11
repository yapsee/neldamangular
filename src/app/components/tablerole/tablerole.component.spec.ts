import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableroleComponent } from './tablerole.component';

describe('TableroleComponent', () => {
  let component: TableroleComponent;
  let fixture: ComponentFixture<TableroleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableroleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableroleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
