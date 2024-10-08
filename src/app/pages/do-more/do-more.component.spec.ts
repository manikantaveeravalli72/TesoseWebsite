import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoMoreComponent } from './do-more.component';

describe('DoMoreComponent', () => {
  let component: DoMoreComponent;
  let fixture: ComponentFixture<DoMoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DoMoreComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DoMoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
