import { TestBed } from '@angular/core/testing';

import { FilmesService } from '../services/filme.service';

describe('FilmeService', () => {
  let service: FilmesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FilmesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
