import { Component, OnInit } from '@angular/core';
import { ConfigActions } from '../../../ThemeOptions/store/config.actions';
import { ThemeOptions } from '../../../theme-options';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
})
export class FooterComponent implements OnInit {

  constructor(public globals: ThemeOptions,
    public configActions: ConfigActions) {
  }

  ngOnInit() {
    this.globals.toggleFixedFooter = false
  }

}
