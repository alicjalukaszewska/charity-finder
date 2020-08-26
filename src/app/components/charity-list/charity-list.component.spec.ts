import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CharityListComponent } from './charity-list.component';
import { CharityService } from 'src/app/services/charity/charity.service';
import { CharityServiceStub } from 'src/app/services/charity/charity.service.spec';

describe('CharityListComponent', () => {
  let component: CharityListComponent;
  let fixture: ComponentFixture<CharityListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CharityListComponent ],
      providers: [{
        provide: CharityService,
        useClass: CharityServiceStub
      }],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CharityListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
