import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { padNumber } from '@ng-bootstrap/ng-bootstrap/util/util';
import { isNgbDatepickerValue } from 'src/app/helpers/functions';

@Component({
  selector: 'app-custom-date',
  templateUrl: './custom-date.component.html',
  styleUrls: ['./custom-date.component.scss']
})
export class CustomDateComponent implements OnInit {
  noteDate= new FormControl()
  constructor() { }

  ngOnInit() {
    this.getValueTitle()
  }

  getValueTitle(): string{
    if(isNgbDatepickerValue(this.noteDate.value)){
      return `${padNumber(this.noteDate.value.day)}/${padNumber(this.noteDate.value.month)}/${padNumber(this.noteDate.value.year)}`
    }
  }

}
