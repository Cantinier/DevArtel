import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { IEmployers } from 'app/shared/model/employers.model';

@Component({
  selector: 'jhi-employers-detail',
  templateUrl: './employers-detail.component.html'
})
export class EmployersDetailComponent implements OnInit {
  employers: IEmployers;

  constructor(protected activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.activatedRoute.data.subscribe(({ employers }) => {
      this.employers = employers;
    });
  }

  previousState() {
    window.history.back();
  }
}
