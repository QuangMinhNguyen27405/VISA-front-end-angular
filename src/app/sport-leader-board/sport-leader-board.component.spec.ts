import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SportLeaderBoardComponent } from './sport-leader-board.component';

describe('SportLeaderBoardComponent', () => {
  let component: SportLeaderBoardComponent;
  let fixture: ComponentFixture<SportLeaderBoardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SportLeaderBoardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SportLeaderBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
