import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home-page',
  imports: [FormsModule],
  templateUrl: './home-page.html',
  styleUrl: './home-page.scss',
})
export class HomePage {
  public name: string = 'Angular';
  protected name2: string = 'React';
  private name3 = 'Vue';

  public inputText: string = '';

  btnClick() {
    this.name = this.inputText;
  }
}
