import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { AtividadeService } from 'src/app/shared/service/atividade.service';

@Component({
  selector: 'app-atividade-form',
  templateUrl: './atividade-form.component.html',
  styleUrls: ['./atividade-form.component.css']
})
export class AtividadeFormComponent implements OnInit {
  public atividadeForm: FormGroup = this.fb.group({descricao: ['', [Validators.required]]});;
  
  constructor(
    private fb: FormBuilder,
    private rest: AtividadeService,
    public dialogRef: MatDialogRef<AtividadeFormComponent>
  ) {}

  ngOnInit(): void {
    this.atividadeForm = this.fb.group({descricao: ['', [Validators.required]]});
  }

  cancelar(): void {
    this.dialogRef.close();
    this.atividadeForm.reset();
  }

  cadastrar(): void {
    this.rest.postAtividade(this.atividadeForm.value.descricao).subscribe(result => {});
    this.dialogRef.close();
    this.atividadeForm.reset();
    window.location.reload();
  }
}
