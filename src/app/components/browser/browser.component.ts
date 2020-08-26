import { Component, OnInit } from '@angular/core';
import { CharityService } from 'src/app/services/charity/charity.service';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-browser',
  templateUrl: './browser.component.html',
  styleUrls: ['./browser.component.scss']
})
export class BrowserComponent implements OnInit {

  constructor(private charityService: CharityService) { }

  ngOnInit(): void {
  }

  getAllOrganizations() {
    this.charityService.requestResult().subscribe();
  }

}
