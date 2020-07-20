import { Component, OnInit } from '@angular/core';
import { Router} from "@angular/router";
import { AngularEditorConfig } from '@kolkov/angular-editor';
import {GeneralService} from "../../../services/general.service";
import {SinglePageResponse, TableStateResponse} from "../../../models/user";
import Swal from "sweetalert2";

@Component({
  selector: 'app-admin-pages',
  templateUrl: './pages.component.html',
  styles: []
})
export class PagesComponent implements OnInit {

  selectedPage = 'data';
  selectedPageContent;
  selectedPageId;

  editorConfig: AngularEditorConfig = {
    editable: true,
    spellcheck: true,
    height: '400px',
    minHeight: '0',
    maxHeight: 'auto',
    width: 'auto',
    minWidth: '0',
    translate: 'yes',
    enableToolbar: true,
    showToolbar: true,
    placeholder: 'Enter text here...',
    defaultParagraphSeparator: '',
    defaultFontName: '',
    defaultFontSize: '',
    fonts: [
      {class: 'arial', name: 'Arial'},
      {class: 'times-new-roman', name: 'Times New Roman'},
      {class: 'calibri', name: 'Calibri'},
      {class: 'comic-sans-ms', name: 'Comic Sans MS'}
    ],
    uploadUrl: 'v1/image',
  };

  constructor(
    private router: Router,
    private generalService: GeneralService
  ) {
  }

  ngOnInit(): void {
    console.log("On init");
    this.generalService.getPage(this.selectedPage).subscribe((response: SinglePageResponse) => {
      this.selectedPageId = response.data._id;
      this.selectedPageContent = response.data.content;
    })
  }

  changePage(){
    this.generalService.getPage(this.selectedPage).subscribe((response: SinglePageResponse) => {
      this.selectedPageId = response.data._id;
      this.selectedPageContent = response.data.content;
    })
  }

  saveData(){
    console.log("save data");
    console.log(this.selectedPage);
    console.log(this.selectedPageContent);

    let data = {
      _id: this.selectedPageId,
      slug: this.selectedPage,
      content: this.selectedPageContent
    }

    const currentData = {
      data: data
    };
    console.log(currentData);

    this.generalService.savePage(currentData).subscribe((response: TableStateResponse) => {
      this.selectedPageId = response.data[0]._id;
      this.showAlert("Page saved successfully");
    })
  }

  showAlert(message){
    this.swalSuccess(message);
  }

  swalSuccess(message) {
    Swal.fire({
      icon: 'success',
      title: message,
      showConfirmButton: false,
      timer: 1500
    });
  }
}
