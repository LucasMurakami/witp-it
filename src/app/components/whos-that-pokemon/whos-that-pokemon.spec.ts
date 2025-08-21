import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhosThatPokemon } from './whos-that-pokemon';

describe('WhosThatPokemon', () => {
  let component: WhosThatPokemon;
  let fixture: ComponentFixture<WhosThatPokemon>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WhosThatPokemon]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WhosThatPokemon);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
