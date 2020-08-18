import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrowserComponent } from './browser.component';
import { CharityService } from 'src/app/services/charity/charity.service';
import { TranslateModule } from '@ngx-translate/core';

describe('BrowserComponent', () => {
  let component: BrowserComponent;
  let fixture: ComponentFixture<BrowserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrowserComponent ],
      providers: [{
        provide: CharityService,
        useClass: CharityServiceStub
      },
    ],
    imports: [ TranslateModule.forRoot()]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrowserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

class CharityServiceStub {
  getAllOrganizations: () => {}
}
