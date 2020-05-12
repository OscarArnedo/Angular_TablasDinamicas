import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupMangaComponent } from './popup-manga.component';

describe('PopupMangaComponent', () => {
  let component: PopupMangaComponent;
  let fixture: ComponentFixture<PopupMangaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopupMangaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopupMangaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
