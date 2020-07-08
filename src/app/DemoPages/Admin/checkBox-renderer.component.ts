import { Component, OnDestroy } from '@angular/core';

@Component({
  selector: 'checkbox-renderer',
  template: `
    <input
      type="checkbox"
      (click)="checkedHandler($event)"
      [checked]="params.value"
    />
`,
})
export class CheckboxRenderer implements OnDestroy {
  public params: any;

  agInit(params: any): void {
    this.params = params;
  }

  checkedHandler(event) {
    let checked = event.target.checked;
    let colId = this.params.column.colId;
    this.params.node.setDataValue(colId, checked);
  }

  ngOnDestroy(): void {
  }
}
