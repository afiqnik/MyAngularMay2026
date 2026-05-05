import { Component } from '@angular/core';
import { SharedModules } from '../../shared/shared.module';

@Component({
  selector: 'app-calculator-page',
  imports: [...SharedModules],
  templateUrl: './calculator-page.html',
  styleUrl: './calculator-page.scss',
})
export class CalculatorPage {

  public num1: number = 0;
  public num2: number = 0;
  public result: number = 0;

  btnCalculate(operator: string) {
    if (operator == "+") {
      this.result = Number(this.num1) + Number(this.num2);
    } else {
      this.result = Number(this.num1) - Number(this.num2);
    }
    return this.result;
  }
}
