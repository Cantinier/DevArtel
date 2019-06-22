import { Component, OnInit } from '@angular/core';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { ITypeofattribute, Typeofattribute } from 'app/shared/model/typeofattribute.model';
import { TypeofattributeService } from './typeofattribute.service';

@Component({
  selector: 'jhi-typeofattribute-update',
  templateUrl: './typeofattribute-update.component.html'
})
export class TypeofattributeUpdateComponent implements OnInit {
  isSaving: boolean;

  editForm = this.fb.group({
    id: [],
    name: [],
    datatype: []
  });

  constructor(
    protected typeofattributeService: TypeofattributeService,
    protected activatedRoute: ActivatedRoute,
    private fb: FormBuilder
  ) {}

  ngOnInit() {
    this.isSaving = false;
    this.activatedRoute.data.subscribe(({ typeofattribute }) => {
      this.updateForm(typeofattribute);
    });
  }

  updateForm(typeofattribute: ITypeofattribute) {
    this.editForm.patchValue({
      id: typeofattribute.id,
      name: typeofattribute.name,
      datatype: typeofattribute.datatype
    });
  }

  previousState() {
    window.history.back();
  }

  save() {
    this.isSaving = true;
    const typeofattribute = this.createFromForm();
    if (typeofattribute.id !== undefined) {
      this.subscribeToSaveResponse(this.typeofattributeService.update(typeofattribute));
    } else {
      this.subscribeToSaveResponse(this.typeofattributeService.create(typeofattribute));
    }
  }

  private createFromForm(): ITypeofattribute {
    const entity = {
      ...new Typeofattribute(),
      id: this.editForm.get(['id']).value,
      name: this.editForm.get(['name']).value,
      datatype: this.editForm.get(['datatype']).value
    };
    return entity;
  }

  protected subscribeToSaveResponse(result: Observable<HttpResponse<ITypeofattribute>>) {
    result.subscribe((res: HttpResponse<ITypeofattribute>) => this.onSaveSuccess(), (res: HttpErrorResponse) => this.onSaveError());
  }

  protected onSaveSuccess() {
    this.isSaving = false;
    this.previousState();
  }

  protected onSaveError() {
    this.isSaving = false;
  }
}
