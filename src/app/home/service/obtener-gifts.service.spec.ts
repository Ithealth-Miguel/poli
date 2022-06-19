import { TestBed } from '@angular/core/testing';

import { ObtenerGiftsService } from './obtener-gifts.service';

describe('ObtenerGiftsService', () => {
  let service: ObtenerGiftsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ObtenerGiftsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
