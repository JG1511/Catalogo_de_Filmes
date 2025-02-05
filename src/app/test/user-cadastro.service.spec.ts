import { TestBed } from '@angular/core/testing';

import { UserCadastroService } from '../services/user-cadastro.service';

describe('UserCadastroService', () => {
  let service: UserCadastroService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserCadastroService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
