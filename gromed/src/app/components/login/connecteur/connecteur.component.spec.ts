import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConnecteurComponent } from './connecteur.component';

describe('ConnecteurComponent', () => {
  let component: ConnecteurComponent;
  let fixture: ComponentFixture<ConnecteurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConnecteurComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConnecteurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
