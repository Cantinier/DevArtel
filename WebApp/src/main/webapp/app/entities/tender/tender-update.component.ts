import { Component, OnInit } from '@angular/core';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { ITender, Tender } from 'app/shared/model/tender.model';
import { TenderService } from './tender.service';

@Component({
  selector: 'jhi-tender-update',
  templateUrl: './tender-update.component.html'
})
export class TenderUpdateComponent implements OnInit {
  isSaving: boolean;

  editForm = this.fb.group({
    id: [],
    nomertender: [],
    datarun: [],
    dataend: [],
    idUser: []
  });

  constructor(protected tenderService: TenderService, protected activatedRoute: ActivatedRoute, private fb: FormBuilder) {}

  ngOnInit() {
    this.isSaving = false;
    this.activatedRoute.data.subscribe(({ tender }) => {
      this.updateForm(tender);
    });
  }

  updateForm(tender: ITender) {
    this.editForm.patchValue({
      id: tender.id,
      nomertender: tender.nomertender,
      datarun: tender.datarun,
      dataend: tender.dataend,
      idUser: tender.idUser
    });
  }

  previousState() {
    window.history.back();
  }

  save() {
    this.isSaving = true;
    const tender = this.createFromForm();
    if (tender.id !== undefined) {
      this.subscribeToSaveResponse(this.tenderService.update(tender));
    } else {
      this.subscribeToSaveResponse(this.tenderService.create(tender));
    }
  }

  private createFromForm(): ITender {
    const entity = {
      ...new Tender(),
      id: this.editForm.get(['id']).value,
      nomertender: this.editForm.get(['nomertender']).value,
      datarun: this.editForm.get(['datarun']).value,
      dataend: this.editForm.get(['dataend']).value,
      idUser: this.editForm.get(['idUser']).value
    };
    return entity;
  }

  protected subscribeToSaveResponse(result: Observable<HttpResponse<ITender>>) {
    result.subscribe((res: HttpResponse<ITender>) => this.onSaveSuccess(), (res: HttpErrorResponse) => this.onSaveError());
  }

  protected onSaveSuccess() {
    this.isSaving = false;
    this.previousState();
  }

  protected onSaveError() {
    this.isSaving = false;
  }
}
