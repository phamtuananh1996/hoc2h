import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Test } from '../model/test';
import { CreateService } from './create.service';
import { Router, NavigationEnd } from '@angular/router';
@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
  encapsulation: ViewEncapsulation.None,
  providers: [CreateService]
})
export class CreateComponent implements OnInit {

  constructor(private createService: CreateService, private router: Router) { }
  test= new Test();
  categorys= [];
  ngOnInit() {
    this.test.level = '';
    this.test.category_id = '';
    this.createService.getCategory().then(res => {
      this.categorys = res.json();
    });
  }
  public addTest() {
    this.createService.createTest(this.test).then(res => {
      this.router.navigate(['/test']);
    });
  }
}
