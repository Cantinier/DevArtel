import { Component, OnInit } from '@angular/core';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { IEmployers, Employers } from 'app/shared/model/employers.model';
import { EmployersService } from './employers.service';

@Component({
  selector: 'jhi-employers-update',
  templateUrl: './employers-update.component.html'
})
export class EmployersUpdateComponent implements OnInit {
  isSaving: boolean;

  editForm = this.fb.group({
    id: [],
    inn: [],
    kpp: [],
    ogrn: [],
    datareg: [],
    isurlic: [],
    employname: [],
    description: []
  });

  constructor(protected employersService: EmployersService, protected activatedRoute: ActivatedRoute, private fb: FormBuilder) {}

  ngOnInit() {
    this.isSaving = false;
    this.activatedRoute.data.subscribe(({ employers }) => {
      this.updateForm(employers);
    });
  }

  updateForm(employers: IEmployers) {
    this.editForm.patchValue({
      id: employers.id,
      inn: employers.inn,
      kpp: employers.kpp,
      ogrn: employers.ogrn,
      datareg: employers.datareg,
      isurlic: employers.isurlic,
      employname: employers.employname,
      description: employers.description
    });
  }

  previousState() {
    window.history.back();
  }

  save() {
    this.isSaving = true;
    const employers = this.createFromForm();
    if (employers.id !== undefined) {
      this.subscribeToSaveResponse(this.employersService.update(employers));
    } else {
      this.subscribeToSaveResponse(this.employersService.create(employers));
    }
  }

  private createFromForm(): IEmployers {
    const entity = {
      ...new Employers(),
      id: this.editForm.get(['id']).value,
      inn: this.editForm.get(['inn']).value,
      kpp: this.editForm.get(['kpp']).value,
      ogrn: this.editForm.get(['ogrn']).value,
      datareg: this.editForm.get(['datareg']).value,
      isurlic: this.editForm.get(['isurlic']).value,
      employname: this.editForm.get(['employname']).value,
      description: this.editForm.get(['description']).value
    };
    return entity;
  }

  protected subscribeToSaveResponse(result: Observable<HttpResponse<IEmployers>>) {
    result.subscribe((res: HttpResponse<IEmployers>) => this.onSaveSuccess(), (res: HttpErrorResponse) => this.onSaveError());
  }

  protected onSaveSuccess() {
    this.isSaving = false;
    this.previousState();
  }

  protected onSaveError() {
    this.isSaving = false;
  }
}
