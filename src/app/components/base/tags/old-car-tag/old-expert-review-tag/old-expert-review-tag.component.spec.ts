import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { OldExpertReviewTagComponent } from './old-expert-review-tag.component';

describe('OldExpertReviewTagComponent', () => {
  let component: OldExpertReviewTagComponent;
  let fixture: ComponentFixture<OldExpertReviewTagComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ OldExpertReviewTagComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(OldExpertReviewTagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
