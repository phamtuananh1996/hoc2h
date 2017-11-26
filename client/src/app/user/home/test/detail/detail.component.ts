import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DetailTestService } from './detail-test.service';
@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
  encapsulation: ViewEncapsulation.None,
  providers: [DetailTestService]
})
export class DetailComponent implements OnInit {
  id: string;
  test: any;
  constructor(private route: ActivatedRoute, private detailTestService: DetailTestService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params['id'];
    });
    this.detailTestService.getTestById(this.id).then(res => {
      this.test = res.json();
    });

  }

}
