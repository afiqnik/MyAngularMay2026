import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { Toolbar } from './component/toolbar/toolbar';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule, Toolbar],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})

export class App {
  protected readonly title = signal('Week2Project');
}
