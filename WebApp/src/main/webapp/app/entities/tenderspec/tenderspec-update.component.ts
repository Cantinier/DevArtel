import { Component, OnInit } from '@angular/core';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { JhiAlertService } from 'ng-jhipster';
import { ITenderspec, Tenderspec } from 'app/shared/model/tenderspec.model';
import { TenderspecService } from './tenderspec.service';
import { IEmployers } from 'app/shared/model/employers.model';
import { EmployersService } from 'app/entities/employers';
import { ITender } from 'app/shared/model/tender.model';
import { TenderService } from 'app/entities/tender';

@Component({
  selector: 'jhi-tenderspec-update',
  templateUrl: './tenderspec-update.component.html'
})
export class TenderspecUpdateComponent implements OnInit {
  isSaving: boolean;

  employers: IEmployers[];

  tenders: ITender[];

  editForm = this.fb.group({
    id: [],
    numberofdock: [],
    description: [],
    employers: [],
    tender: []
  });

  constructor(
    protected jhiAlertService: JhiAlertService,
    protected tenderspecService: TenderspecService,
    protected employersService: EmployersService,
    protected tenderService: TenderService,
    protected activatedRoute: ActivatedRoute,
    private fb: FormBuilder
  ) {}

  ngOnInit() {
    this.isSaving = false;
    this.activatedRoute.data.subscribe(({ tenderspec }) => {
      this.updateForm(tenderspec);
    });
    this.employersService
      .query()
      .pipe(
        filter((mayBeOk: HttpResponse<IEmployers[]>) => mayBeOk.ok),
        map((response: HttpResponse<IEmployers[]>) => response.body)
      )
      .subscribe((res: IEmployers[]) => (this.employers = res), (res: HttpErrorResponse) => this.onError(res.message));
    this.tenderService
      .query()
      .pipe(
        filter((mayBeOk: HttpResponse<ITender[]>) => mayBeOk.ok),
        map((response: HttpResponse<ITender[]>) => response.body)
      )
      .subscribe((res: ITender[]) => (this.tenders = res), (res: HttpErrorResponse) => this.onError(res.message));
  }

  updateForm(tenderspec: ITenderspec) {
    this.editForm.patchValue({
      id: tenderspec.id,
      numberofdock: tenderspec.numberofdock,
      description: tenderspec.description,
      employers: tenderspec.employers,
      tender: tenderspec.tender
    });
  }

  previousState() {
    window.history.back();
  }

  save() {
    this.isSaving = true;
    const tenderspec = this.createFromForm();
    if (tenderspec.id !== undefined) {
      this.subscribeToSaveResponse(this.tenderspecService.update(tenderspec));
    } else {
      this.subscribeToSaveResponse(this.tenderspecService.create(tenderspec));
    }
  }

  private createFromForm(): ITenderspec {
    const entity = {
      ...new Tenderspec(),
      id: this.editForm.get(['id']).value,
      numberofdock: this.editForm.get(['numberofdock']).value,
      description: this.editForm.get(['description']).value,
      employers: this.editForm.get(['employers']).value,
      tender: this.editForm.get(['tender']).value
    };
    return entity;
  }

  protected subscribeToSaveResponse(result: Observable<HttpResponse<ITenderspec>>) {
    result.subscribe((res: HttpResponse<ITenderspec>) => this.onSaveSuccess(), (res: HttpErrorResponse) => this.onSaveError());
  }

  protected onSaveSuccess() {
    this.isSaving = false;
    this.previousState();
  }

  protected onSaveError() {
    this.isSaving = false;
  }
  protected onError(errorMessage: string) {
    this.jhiAlertService.error(errorMessage, null, null);
  }

  trackEmployersById(index: number, item: IEmployers) {
    return item.id;
  }

  trackTenderById(index: number, item: ITender) {
    return item.id;
  }
}
