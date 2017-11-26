import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }
  tab: String;
  ngOnInit() {
    this.tab = 'new';
  }
  setSelectedTab(tab) {
    this.tab = tab;
  }
}
