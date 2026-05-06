import { Component, ChangeDetectorRef, OnInit } from '@angular/core';
import { SharedModules } from '../../shared/shared.module';
import { MatDialog } from '@angular/material/dialog';
import { Add } from '../../component/add/add';
import { ConvertPipe } from '../../pipes/convert-pipe';


interface TodoItem {
  title: string;
  selected: boolean;
}

@Component({
  selector: 'app-todo-page',
  imports: [...SharedModules, ConvertPipe],
  templateUrl: './todo-page.html',
  styleUrl: './todo-page.scss',
})

export class TodoPage implements OnInit {
  // public todoList: TodoItem[] = [
  //   { title: 'Buy groceries', selected: false },
  //   { title: 'Walk the cat', selected: true },
  //   { title: 'Pet the dog', selected: false },
  // ]
  public todoList: TodoItem[] = [];

  constructor(public dialog: MatDialog, private cdr: ChangeDetectorRef) { }

  ngOnInit() {
    const data: any = this.loadStorage('TODO') || [];
    this.todoList = data;
  }

  onSelected(index: number) {
    this.todoList[index].selected = !this.todoList[index].selected;
    this.saveStorage('TODO', this.todoList);
  }

  onAdd() {
    const dialogRef = this.dialog.open(Add);
    dialogRef.afterClosed().subscribe((result: any) => {
      if (result) {
        this.todoList.push({ title: result, selected: false });
        this.saveStorage('TODO', this.todoList);
        this.cdr.detectChanges();
      }
    });
  }

  onDelete(index: number) {
    let confirmation = confirm('Are you sure you want to delete this item?');
    if (confirmation) {
      this.todoList.splice(index, 1);
      this.saveStorage('TODO', this.todoList);
    }
  }

  onClear() {
    let confirmation = confirm('Are you sure you want to clear the list?');
    if (confirmation) {
      this.todoList = [];
      this.saveStorage('TODO', this.todoList);
    }
  }

  onEdit($index: number) {
    const todoItem = this.todoList[$index];
    const dialogRef = this.dialog.open(Add, { data: { title: todoItem.title } });
    dialogRef.afterClosed().subscribe((result: any) => {
      if (result) {
        this.todoList[$index].title = result;
        this.saveStorage('TODO', this.todoList);
        this.cdr.detectChanges();
      }
    });
  }

  saveStorage(key: string, value: any) {
    localStorage.setItem(key, JSON.stringify(value));
  }

  loadStorage(key: string) {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : null;
  }

}
