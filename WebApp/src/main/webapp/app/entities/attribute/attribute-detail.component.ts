import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { IAttribute } from 'app/shared/model/attribute.model';

@Component({
  selector: 'jhi-attribute-detail',
  templateUrl: './attribute-detail.component.html'
})
export class AttributeDetailComponent implements OnInit {
  attribute: IAttribute;

  constructor(protected activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.activatedRoute.data.subscribe(({ attribute }) => {
      this.attribute = attribute;
    });
  }

  previousState() {
    window.history.back();
  }
}
