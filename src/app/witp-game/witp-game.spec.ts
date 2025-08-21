import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WitpGame } from './witp-game';

describe('WitpGame', () => {
  let component: WitpGame;
  let fixture: ComponentFixture<WitpGame>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WitpGame]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WitpGame);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
