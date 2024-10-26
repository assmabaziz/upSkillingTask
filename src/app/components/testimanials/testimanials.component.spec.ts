import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestimanialsComponent } from './testimanials.component';

describe('TestimanialsComponent', () => {
  let component: TestimanialsComponent;
  let fixture: ComponentFixture<TestimanialsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestimanialsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TestimanialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
