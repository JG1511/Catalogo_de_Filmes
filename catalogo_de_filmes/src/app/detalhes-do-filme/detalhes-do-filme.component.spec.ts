import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalhesDoFilmeComponent } from './detalhes-do-filme.component';

describe('DetalhesDoFilmeComponent', () => {
  let component: DetalhesDoFilmeComponent;
  let fixture: ComponentFixture<DetalhesDoFilmeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetalhesDoFilmeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetalhesDoFilmeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
