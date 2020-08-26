import { Component, OnInit } from '@angular/core';
import { CharityService } from 'src/app/services/charity/charity.service';

@Component({
  selector: 'app-charity-list',
  templateUrl: './charity-list.component.html',
  styleUrls: ['./charity-list.component.scss']
})
export class CharityListComponent implements OnInit {
  organizationsList = [];

  constructor(private charityService: CharityService) { }

  ngOnInit(): void {
    this.charityService.requestResult().subscribe(res => {
      this.organizationsList = res.organization;
    })
  }

}
