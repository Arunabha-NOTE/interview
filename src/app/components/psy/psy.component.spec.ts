import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PsyComponent } from './psy.component';

describe('PsyComponent', () => {
  let component: PsyComponent;
  let fixture: ComponentFixture<PsyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PsyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PsyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
