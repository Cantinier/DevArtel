import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ITenderspec } from 'app/shared/model/tenderspec.model';

@Component({
  selector: 'jhi-tenderspec-detail',
  templateUrl: './tenderspec-detail.component.html'
})
export class TenderspecDetailComponent implements OnInit {
  tenderspec: ITenderspec;

  constructor(protected activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.activatedRoute.data.subscribe(({ tenderspec }) => {
      this.tenderspec = tenderspec;
    });
  }

  previousState() {
    window.history.back();
  }
}
