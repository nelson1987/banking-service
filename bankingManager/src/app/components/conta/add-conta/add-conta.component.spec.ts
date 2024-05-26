import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddContaComponent } from './add-conta.component';

describe('AddContaComponent', () => {
  let component: AddContaComponent;
  let fixture: ComponentFixture<AddContaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddContaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddContaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
