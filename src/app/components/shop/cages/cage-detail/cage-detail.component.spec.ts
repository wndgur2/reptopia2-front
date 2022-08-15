import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CageDetailComponent } from './cage-detail.component';

describe('CageDetailComponent', () => {
  let component: CageDetailComponent;
  let fixture: ComponentFixture<CageDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CageDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CageDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
