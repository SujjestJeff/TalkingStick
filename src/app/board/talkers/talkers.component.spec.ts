import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TalkersComponent } from './talkers.component';

describe('TalkersComponent', () => {
  let component: TalkersComponent;
  let fixture: ComponentFixture<TalkersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TalkersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TalkersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
