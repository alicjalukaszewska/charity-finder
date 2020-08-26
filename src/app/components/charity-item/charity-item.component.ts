import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-charity-item',
  templateUrl: './charity-item.component.html',
  styleUrls: ['./charity-item.component.scss']
})
export class CharityItemComponent implements OnInit {

  @Input() organization;

  constructor() { }

  ngOnInit(): void {
  }

}
