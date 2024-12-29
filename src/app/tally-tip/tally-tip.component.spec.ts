import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TallyTipComponent } from './tally-tip.component';

describe('TallyTipComponent', () => {
  let component: TallyTipComponent;
  let fixture: ComponentFixture<TallyTipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TallyTipComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TallyTipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
