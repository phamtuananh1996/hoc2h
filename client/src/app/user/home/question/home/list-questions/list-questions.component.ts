import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'list-questions',
  templateUrl: './list-questions.component.html',
  styleUrls: ['./list-questions.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ListQuestionsComponent implements OnInit {
  answers_count: number;
  votes_count: number;
  views_count: number;
  constructor() { }

  ngOnInit() {
    this.answers_count = 12;
    this.votes_count = 10;
    this.views_count = 122;
  }

}
