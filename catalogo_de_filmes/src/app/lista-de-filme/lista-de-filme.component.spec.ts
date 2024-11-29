import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaDeFilmeComponent } from './lista-de-filme.component';

describe('ListaDeFilmeComponent', () => {
  let component: ListaDeFilmeComponent;
  let fixture: ComponentFixture<ListaDeFilmeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListaDeFilmeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaDeFilmeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
