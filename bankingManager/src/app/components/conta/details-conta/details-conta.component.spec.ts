import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsContaComponent } from './details-conta.component';

describe('DetailsContaComponent', () => {
  let component: DetailsContaComponent;
  let fixture: ComponentFixture<DetailsContaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DetailsContaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DetailsContaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
