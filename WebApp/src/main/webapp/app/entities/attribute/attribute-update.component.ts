import { Component, OnInit } from '@angular/core';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { JhiAlertService } from 'ng-jhipster';
import { IAttribute, Attribute } from 'app/shared/model/attribute.model';
import { AttributeService } from './attribute.service';
import { IEmployers } from 'app/shared/model/employers.model';
import { EmployersService } from 'app/entities/employers';
import { ITypeofattribute } from 'app/shared/model/typeofattribute.model';
import { TypeofattributeService } from 'app/entities/typeofattribute';

@Component({
  selector: 'jhi-attribute-update',
  templateUrl: './attribute-update.component.html'
})
export class AttributeUpdateComponent implements OnInit {
  isSaving: boolean;

  employers: IEmployers[];

  typeofattributes: ITypeofattribute[];

  editForm = this.fb.group({
    id: [],
    value: [],
    idEmployers: [],
    idTypeofattribute: []
  });

  constructor(
    protected jhiAlertService: JhiAlertService,
    protected attributeService: AttributeService,
    protected employersService: EmployersService,
    protected typeofattributeService: TypeofattributeService,
    protected activatedRoute: ActivatedRoute,
    private fb: FormBuilder
  ) {}

  ngOnInit() {
    this.isSaving = false;
    this.activatedRoute.data.subscribe(({ attribute }) => {
      this.updateForm(attribute);
    });
    this.employersService
      .query()
      .pipe(
        filter((mayBeOk: HttpResponse<IEmployers[]>) => mayBeOk.ok),
        map((response: HttpResponse<IEmployers[]>) => response.body)
      )
      .subscribe((res: IEmployers[]) => (this.employers = res), (res: HttpErrorResponse) => this.onError(res.message));
    this.typeofattributeService
      .query()
      .pipe(
        filter((mayBeOk: HttpResponse<ITypeofattribute[]>) => mayBeOk.ok),
        map((response: HttpResponse<ITypeofattribute[]>) => response.body)
      )
      .subscribe((res: ITypeofattribute[]) => (this.typeofattributes = res), (res: HttpErrorResponse) => this.onError(res.message));
  }

  updateForm(attribute: IAttribute) {
    this.editForm.patchValue({
      id: attribute.id,
      value: attribute.value,
      idEmployers: attribute.idEmployers,
      idTypeofattribute: attribute.idTypeofattribute
    });
  }

  previousState() {
    window.history.back();
  }

  save() {
    this.isSaving = true;
    const attribute = this.createFromForm();
    if (attribute.id !== undefined) {
      this.subscribeToSaveResponse(this.attributeService.update(attribute));
    } else {
      this.subscribeToSaveResponse(this.attributeService.create(attribute));
    }
  }

  private createFromForm(): IAttribute {
    const entity = {
      ...new Attribute(),
      id: this.editForm.get(['id']).value,
      value: this.editForm.get(['value']).value,
      idEmployers: this.editForm.get(['idEmployers']).value,
      idTypeofattribute: this.editForm.get(['idTypeofattribute']).value
    };
    return entity;
  }

  protected subscribeToSaveResponse(result: Observable<HttpResponse<IAttribute>>) {
    result.subscribe((res: HttpResponse<IAttribute>) => this.onSaveSuccess(), (res: HttpErrorResponse) => this.onSaveError());
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

  trackTypeofattributeById(index: number, item: ITypeofattribute) {
    return item.id;
  }
}
