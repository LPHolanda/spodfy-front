import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PodcastListaComponent } from './podcast-lista.component';

describe('PodcastListaComponent', () => {
  let component: PodcastListaComponent;
  let fixture: ComponentFixture<PodcastListaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PodcastListaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PodcastListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
