import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EndgameModal } from './endgame-modal';

describe('EndgameModal', () => {
  let component: EndgameModal;
  let fixture: ComponentFixture<EndgameModal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EndgameModal]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EndgameModal);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
