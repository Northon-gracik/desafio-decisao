import { AtividadeFormComponent } from './atividade-form/atividade-form.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  constructor(
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
  }

  addAtividade(): void {
    const dialogRef = this.dialog.open(AtividadeFormComponent, {
      width: '250px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }


}
