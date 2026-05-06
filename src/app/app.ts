import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { Toolbar } from './component/toolbar/toolbar';
import { Data } from './services/data';
import { MatButtonModule } from '@angular/material/button';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule, Toolbar, MatButtonModule],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})

export class App implements OnInit {
  public pageTitle: string = 'Home';

  constructor(private data: Data) { };

  ngOnInit(): void {
    this.data.observeEvent().subscribe((data: any) => {
      this.pageTitle = data;
    });
  }
}
