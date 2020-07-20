import { Component, OnInit } from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {FormService} from "../../../../services/form.service";
import {ChartsResponse, DataResponse, FormResponse, ListResponse, TableDetailsResponse} from "../../../../models/user";
import {GeneralService} from "../../../../services/general.service";
import {CheckboxRenderer} from "../../checkBox-renderer.component";
import {ChartDataSets, ChartOptions} from "chart.js";
import {Color, Label} from "ng2-charts";
import {parse} from "date-fns";

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

  apiData;
  row_headers;
  index_cols;
  col_headers = [];
  filter_data = [];
  aggregate_function='sum';
  subOptions = [];
  selectedIndexCol;
  selectedOption;

  public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public barChartLabels = [];
  public barChartType = 'bar';
  public barChartLegend = true;
  public barChartData = [
    {data: [65, 59, 80, 81, 56, 55, 40], label: 'Municipality A'},
    // {data: [28, 48, 40, 19, 86, 27, 90], label: 'Municipality B'}
  ];


  ngOnInit(): void {
    this.activatedRoute.params.subscribe(paramsId => {
      this.id = paramsId.id;

      this.generalService.getTableCharts(this.id).subscribe((response: ChartsResponse) => {
        this.row_headers = response.config.rows_headers;
        this.index_cols  = response.config.index_cols;
        this.col_headers = response.config.col_headers;
        this.apiData      = response.data;
        this.row_headers.indicators.forEach(indicator => {
          this.barChartLabels.push(indicator.title);
        })

        this.col_headers.forEach(col_header => {
          col_header.chartsData = [];
        })

        this.renderCharts();
      })
    });
  }

  navigateToDetailsTables(){
    this.router.navigate(['admin/tables/details/'+this.id])
  }

  changeFilters(index_col, selectedValue){
    let exists = false;
    this.filter_data.forEach(data => {
      if(data.col_id == index_col.col_id){
        data.value = selectedValue.value;
        exists = true;
      }
    })

    if(exists == false){
      this.filter_data.push({
        col_id: index_col.col_id,
        value: selectedValue.value
      })
    }

    this.renderCharts();

  }

  processDataForCharts(){
    var result = this.apiData.filter((x) => {
      let match_status = false;
      /*if((this.selectedIndexCol == null) && (this.selectedOption == null)){
        return x;
      }

      if(this.selectedIndexCol != null){
        if(x[this.selectedIndexCol.col_id]){
          match_status = true;
        }
      }

      if(match_status == true){
        if(this.selectedOption != null){
          if(x[this.selectedIndexCol.col_id] == this.selectedOption.id){
            match_status = true;
          }
          else{
            match_status = false;
          }
        }
      }

      if(match_status == true){
        return x;
      }*/


      // console.log(this.selectedOption);
      // if(this.selectedIndexCol)

      if(this.filter_data.length == 0){
        return x;
      }

      this.filter_data.forEach(datum => {
        if(match_status == true){
          return;
        }

        if(x[datum.col_id] == parseInt(datum.value)){
          match_status = true;
        }
      })

      // @ts-ignore
      if(match_status == true){
        return x;
      }
    })

    return result;
  }

  renderCharts(){
    let chartsInitialData = this.processDataForCharts();
    this.col_headers.forEach(col_header => {

    })
    // this.row_headers.indicators
    console.log(chartsInitialData);
    this.col_headers.forEach(col_header => {
      let chartsFinalData = [];
      col_header.chartsData = [];

      if(col_header.type == 'string'){
        return;
      }

      this.row_headers.indicators.forEach(indicator => {
        let is_row_match = false;
        let chartValue = 0;
        let count = 0;
        chartsInitialData.forEach(x => {
          if(indicator.id == x['row']){
            if(this.aggregate_function == 'sum'){
              chartValue +=  +x[col_header.id];
            }
            else if(this.aggregate_function == 'mean'){
              chartValue += +x[col_header.id];
              count++;
            }
            else if(this.aggregate_function == 'count'){
              chartValue++;
            }
            else if(this.aggregate_function == 'min'){
              if(chartValue == 0){
                chartValue = parseFloat(x[col_header.id]);
              }

              if(chartValue > parseFloat(x[col_header.id])){
                chartValue = parseFloat(x[col_header.id]);
              }
            }
            else if(this.aggregate_function == 'max'){
              if(chartValue < parseFloat(x[col_header.id])){
                chartValue = parseFloat(x[col_header.id]);
              }
            }
            is_row_match = true;
          }
        })

        if(this.aggregate_function == 'mean'){
          if(count != 0){
            chartValue = chartValue/count;
          }
        }

        if(is_row_match == false){
          chartsFinalData.push(0);
        }
        else {
          chartsFinalData.push(chartValue);
        }
      })
      col_header.chartsData.push({
        'data': chartsFinalData,
        'label': col_header.title
      })
    })
  }

  buildOptions($event){
    this.subOptions = [];
    this.index_cols.forEach(index_col => {
      if(index_col.col_id == this.selectedIndexCol.col_id){
        this.subOptions = index_col.options;
      }
    })

    this.renderCharts();
  }

}
