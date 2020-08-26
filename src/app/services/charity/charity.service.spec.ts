import { TestBed, getTestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { CharityService } from './charity.service';
import { Observable, of } from 'rxjs';

export class CharityServiceStub {
  getAllOrganizations: () => {}
  requestResult() {
    return of( [{id: 1}] )
  }
}

describe('CharityService', () => {
  let injector: TestBed;
  let service: CharityService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [CharityService]
    });
    injector = getTestBed();
    service = injector.get(CharityService);
    httpMock = injector.get(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

