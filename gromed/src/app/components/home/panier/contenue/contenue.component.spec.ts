import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContenueComponent } from './contenue.component';

describe('ContenueComponent', () => {
  let component: ContenueComponent;
  let fixture: ComponentFixture<ContenueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContenueComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContenueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
