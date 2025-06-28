import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecurityFooter } from './security-footer';

describe('SecurityFooter', () => {
  let component: SecurityFooter;
  let fixture: ComponentFixture<SecurityFooter>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SecurityFooter]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SecurityFooter);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
