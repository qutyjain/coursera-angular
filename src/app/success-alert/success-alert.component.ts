import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-success-alert',
  templateUrl: './success-alert.component.html',
  styles: [`h1{
    color: green
  }`]
})
export class SuccessAlertComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
