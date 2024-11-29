import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilmeServiceComponent } from './filme-service.component';

describe('FilmeServiceComponent', () => {
  let component: FilmeServiceComponent;
  let fixture: ComponentFixture<FilmeServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FilmeServiceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FilmeServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
