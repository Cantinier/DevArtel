import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ITypeofattribute } from 'app/shared/model/typeofattribute.model';

@Component({
  selector: 'jhi-typeofattribute-detail',
  templateUrl: './typeofattribute-detail.component.html'
})
export class TypeofattributeDetailComponent implements OnInit {
  typeofattribute: ITypeofattribute;

  constructor(protected activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.activatedRoute.data.subscribe(({ typeofattribute }) => {
      this.typeofattribute = typeofattribute;
    });
  }

  previousState() {
    window.history.back();
  }
}
