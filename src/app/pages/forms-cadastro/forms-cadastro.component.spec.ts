import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsCadastroComponent } from './forms-cadastro.component';

describe('FormsCadastroComponent', () => {
  let component: FormsCadastroComponent;
  let fixture: ComponentFixture<FormsCadastroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormsCadastroComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormsCadastroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
