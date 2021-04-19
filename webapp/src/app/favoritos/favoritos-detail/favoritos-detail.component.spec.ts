import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoritosDetailComponent } from './favoritos-detail.component';

describe('FavoritosDetailComponent', () => {
  let component: FavoritosDetailComponent;
  let fixture: ComponentFixture<FavoritosDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FavoritosDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FavoritosDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
