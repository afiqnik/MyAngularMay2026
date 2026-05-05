import { Component } from '@angular/core';
import { SharedModules } from '../../shared/shared.module';

@Component({
  selector: 'app-home-page',
  imports: [...SharedModules],
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
