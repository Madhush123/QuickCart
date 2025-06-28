import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecurityHeader } from './security-header';

describe('SecurityHeader', () => {
  let component: SecurityHeader;
  let fixture: ComponentFixture<SecurityHeader>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SecurityHeader]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SecurityHeader);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
