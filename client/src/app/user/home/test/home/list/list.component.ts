import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ListService } from './list.service';
import { Test } from '../../model/test';

@Component({
  selector: 'app-list-test',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
  encapsulation: ViewEncapsulation.None,
  providers: [ListService]
})
export class ListComponent implements OnInit {
  tests = [];
  users: any;
  constructor(private listservice: ListService) { }

  ngOnInit() {
    this.listservice.getall().then(res => {
      this.tests = res.json();
    });
  }

 diffTime(date) {
   let delta: any;
   delta =  Math.round((Date.now() - new Date(date).getTime()) / 1000) ;


  const minute = 60,
      hour = minute * 60,
      day = hour * 24,
      week = day * 7;
  let fuzzy;

  if (delta < 30) {
      fuzzy = 'just then.';
  } else if (delta < minute) {
      fuzzy = delta + ' seconds ago.';
  } else if (delta < 2 * minute) {
      fuzzy = 'a minute ago.';
  } else if (delta < hour) {
      fuzzy = Math.floor(delta / minute) + ' minutes ago.';
  } else if (Math.floor(delta / hour) === 1) {
      fuzzy = '1 hour ago.';
  } else if (delta < day) {
      fuzzy = Math.floor(delta / hour) + ' hours ago.';
  } else if (delta < day * 2) {
      fuzzy = 'yesterday';
  }else if (delta < week) {
      fuzzy = Math.floor(delta / day) + ' day ago.';
  }else {
     fuzzy = Math.floor(delta / week) + ' week ago.';
  }
  return fuzzy;
 }

}
