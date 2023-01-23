import { TestBed } from '@angular/core/testing';

import { DispensadoresService } from './dispensadores.service';

describe('DispensadoresService', () => {
  let service: DispensadoresService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DispensadoresService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
