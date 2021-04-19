import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PodcastDescriptionComponent } from './podcast-description.component';

describe('PodcastDescriptionComponent', () => {
  let component: PodcastDescriptionComponent;
  let fixture: ComponentFixture<PodcastDescriptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PodcastDescriptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PodcastDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
