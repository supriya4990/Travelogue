import { TestBed, inject } from '@angular/core/testing';

import { TravelougueService } from './travelougue.service';

describe('TravelougueService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TravelougueService]
    });
  });

  it('should be created', inject([TravelougueService], (service: TravelougueService) => {
    expect(service).toBeTruthy();
  }));
});
