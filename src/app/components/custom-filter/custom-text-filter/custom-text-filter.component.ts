import { Component, OnChanges, OnInit, SimpleChanges, ViewEncapsulation } from '@angular/core';
import { FormControl } from '@angular/forms';
import { DefaultFilter } from 'ng2-smart-table';
import { AutoUnsubscribe } from 'ngx-auto-unsubscribe';
import { Constants } from '../../contants';

@Component({
  selector: 'app-custom-text-filter',
  templateUrl: './custom-text-filter.component.html',
  encapsulation: ViewEncapsulation.None
})
export class CustomTextFilterComponent extends DefaultFilter implements OnInit, OnChanges {
  inputControl = new FormControl();

  constructor() {
    super();
  }

  ngOnInit() {
    this.inputControl.valueChanges
      .subscribe((value) => {
        if (value) {
          const newValue = value.replace(Constants.Configure.SPECIAL_CHARACTERS_REGEX, '');
          this.inputControl.setValue(newValue, { emitEvent: false });
        } else {
          this.query = '';
          this.setFilter();
        }
      });
  }

  onChange() {
    this.query = this.inputControl.value.toString();
    this.setFilter();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.query) {
      this.query = changes.query.currentValue;
      this.inputControl.setValue(this.query);
    }
  }
}
