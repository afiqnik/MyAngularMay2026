import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { Data } from '../../services/data';

interface ToolbarItems {
  route: string;
  title: string;
}

@Component({
  selector: 'app-toolbar',
  imports: [MatButtonModule, MatToolbarModule],
  templateUrl: './toolbar.html',
  styleUrl: './toolbar.scss',
})

export class Toolbar {

  public toolbarItems: ToolbarItems[] = [
    { route: '/home', title: 'Home' },
    { route: '/calculator', title: 'Calculator' },
    { route: '/todo', title: 'Todo' },
    { route: '/reports', title: 'Reports' }

  ]

  constructor(private router: Router, private data: Data) { }

  navigatePage(item: any) {
    this.router.navigateByUrl(item.route);
    this.data.publishEvent(item.title);
  }
}
