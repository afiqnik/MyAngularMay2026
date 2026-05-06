import { Component, Inject } from '@angular/core';
import { SharedModules } from '../../shared/shared.module';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-add',
  imports: [...SharedModules],
  templateUrl: './add.html',
  styleUrl: './add.scss',
})

export class Add {
  public todoForm: any = FormGroup;

  constructor(private FormBuilder: FormBuilder,
    private dialogRef: MatDialogRef<Add>, @Inject(MAT_DIALOG_DATA) public data: any) {
    this.todoForm = this.FormBuilder.group({
      title: data?.title || '',
    });
  }

  onSubmit() {
    let formData = this.todoForm.value;
    let title = formData.title;
    if (title != '') this.dialogRef.close(title);
  }

  onCancel() {
    this.dialogRef.close();
  }

}
