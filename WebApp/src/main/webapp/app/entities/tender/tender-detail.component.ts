import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ITender } from 'app/shared/model/tender.model';

@Component({
  selector: 'jhi-tender-detail',
  templateUrl: './tender-detail.component.html'
})
export class TenderDetailComponent implements OnInit {
  tender: ITender;

  constructor(protected activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.activatedRoute.data.subscribe(({ tender }) => {
      this.tender = tender;
    });
  }

  previousState() {
    window.history.back();
  }
}
