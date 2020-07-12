import { Component, OnInit } from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {FormService} from "../../../../services/form.service";
import {FormResponse, ListResponse, TableDetailsResponse} from "../../../../models/user";
import {GeneralService} from "../../../../services/general.service";
import {CheckboxRenderer} from "../../checkBox-renderer.component";
import {ChartDataSets, ChartOptions} from "chart.js";
import {Color, Label} from "ng2-charts";

@Component({
  selector: 'app-table-charts',
  templateUrl: './table-charts.component.html',
  styleUrls: ['./table-charts.component.css']
})
export class TableChartsComponent implements OnInit {
  id;
  constructor(
      private activatedRoute: ActivatedRoute,
      private router: Router,
      private generalService: GeneralService
  ) {
  }

  public lineChartData: ChartDataSets[] = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: 'Province A' },
  ];
  public lineChartLabels: Label[] = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  public lineChartColors: Color[] = [
    {
      borderColor: 'black',
      backgroundColor: 'rgba(255,0,0,0.3)',
    },
  ];
  public lineChartLegend = true;
  public lineChartType = 'line';
  public lineChartPlugins = [];


  public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public barChartLabels = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
  public barChartType = 'bar';
  public barChartLegend = true;
  public barChartData = [
    {data: [65, 59, 80, 81, 56, 55, 40], label: 'Municipality A'},
    {data: [28, 48, 40, 19, 86, 27, 90], label: 'Municipality B'}
  ];

  public pieChartLabels = ['Municipality M1', 'Municipality M2', 'Municipality M3', 'Municipality M4'];
  public pieChartData = [120, 150, 180, 90];
  public pieChartType = 'pie';

  public doughnutChartLabels = ['Municipality Q1', 'Municipality Q2', 'Municipality Q3', 'Municipality Q4'];
  public doughnutChartData = [120, 150, 180, 90];
  public doughnutChartType = 'doughnut';


  ngOnInit(): void {
    this.activatedRoute.params.subscribe(paramsId => {
      this.id = paramsId.id;
    });
  }

  navigateToDetailsTables(){
    this.router.navigate(['admin/tables/details/'+this.id])
  }

}
