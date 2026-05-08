import { ChangeDetectorRef, Component } from '@angular/core';
import { SharedModules } from '../../shared/shared.module';
import { MatTableDataSource } from '@angular/material/table';
import { Router, RouterLink } from '@angular/router';
import { OnInit } from '@angular/core';
import { Api } from '../../services/api';

interface reportItem {
  title: string;
  category: string;
  date: string;
}

@Component({
  selector: 'app-reports',
  imports: [...SharedModules, RouterLink],
  templateUrl: './reports-page.html',
  styleUrl: './reports-page.scss',
})

export class ReportsPage implements OnInit {
  public reportList: reportItem[] = [
    {
      title: 'Sample report 1',
      category: 'Sample category 1',
      date: '01/01/1978'
    },
    {
      title: 'Sample report 2',
      category: 'Sample category 2',
      date: '01/01/1979'
    }
  ];
  public dataSource: any = new MatTableDataSource(this.reportList);
  public displayedColumns: string[] = ['no', 'title', 'date', 'actions'];

  constructor(
    private router: Router,
    private apiServices: Api,
    private cdr: ChangeDetectorRef
  ) { }

  async ngOnInit() {
    try {
      let response: any = await this.apiServices.httpGet('/reports');
      console.log(response);
      this.reportList = response.data;
      this.dataSource = new MatTableDataSource(this.reportList);
      this.dataSource.data = this.dataSource.data.map((report: any) => ({ ...report }));
      this.cdr.detectChanges();
    } catch (error) {

    }
  }


}
