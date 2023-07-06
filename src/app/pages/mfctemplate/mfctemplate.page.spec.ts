import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MfctemplatePage } from './mfctemplate.page';

describe('MfctemplatePage', () => {
  let component: MfctemplatePage;
  let fixture: ComponentFixture<MfctemplatePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MfctemplatePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
