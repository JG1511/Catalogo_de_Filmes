import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaioresNotasComponent } from './maiores-notas.component';

describe('MaioresNotasComponent', () => {
  let component: MaioresNotasComponent;
  let fixture: ComponentFixture<MaioresNotasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MaioresNotasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaioresNotasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
