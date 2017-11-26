import { Component, OnInit } from '@angular/core';
import {ListQuestionsComponent} from './list-questions/list-questions.component';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }
  tab:number;
  ngOnInit() {
    this.tab = 1;
  }
  
  setSelectedTab(tab:number){
    this.tab = tab;
  }

}
