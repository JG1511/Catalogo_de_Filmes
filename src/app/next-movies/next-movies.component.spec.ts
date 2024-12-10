import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NextMoviesComponent } from './next-movies.component';

describe('NextMoviesComponent', () => {
  let component: NextMoviesComponent;
  let fixture: ComponentFixture<NextMoviesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NextMoviesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NextMoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
