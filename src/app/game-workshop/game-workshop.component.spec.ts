import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GameWorkshopComponent } from './game-workshop.component';

describe('GameWorkshopComponent', () => {
  let component: GameWorkshopComponent;
  let fixture: ComponentFixture<GameWorkshopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GameWorkshopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GameWorkshopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
