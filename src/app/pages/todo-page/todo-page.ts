import { Component } from '@angular/core';
import { SharedModules } from '../../shared/shared.module';
import { MatDialog } from '@angular/material/dialog';
import { Add } from '../../component/add/add';
import { ChangeDetectorRef } from '@angular/core';

interface TodoItem {
  title: string;
  selected: boolean;
}

@Component({
  selector: 'app-todo-page',
  imports: [...SharedModules],
  templateUrl: './todo-page.html',
  styleUrl: './todo-page.scss',
})

export class TodoPage {
  public todoList: TodoItem[] = [
    { title: 'Buy groceries', selected: false },
    { title: 'Walk the cat', selected: true },
    { title: 'Pet the dog', selected: false },
  ]

  constructor(public dialog: MatDialog, private cdr: ChangeDetectorRef) { }

  onSelected(index: number) {
    this.todoList[index].selected = !this.todoList[index].selected;
  }

  onAdd() {
    const dialogRef = this.dialog.open(Add);
    dialogRef.afterClosed().subscribe((result: any) => {
      if (result) {
        this.todoList.push({ title: result, selected: false });
        this.cdr.detectChanges();
      }
    });
  }

  onDelete(index: number) {
    let confirmation = confirm('Are you sure you want to delete this item?');
    if (confirmation) {
      this.todoList.splice(index, 1);
    }
  }

  onClear() { }
}
