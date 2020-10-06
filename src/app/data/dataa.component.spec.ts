import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataaComponent } from './dataa.component';

describe('DataaComponent', () => {
  let component: DataaComponent;
  let fixture: ComponentFixture<DataaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DataaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
