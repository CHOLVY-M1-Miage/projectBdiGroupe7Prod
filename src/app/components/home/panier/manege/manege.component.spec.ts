import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManegeComponent } from './manege.component';

describe('ManegeComponent', () => {
  let component: ManegeComponent;
  let fixture: ComponentFixture<ManegeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManegeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManegeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
