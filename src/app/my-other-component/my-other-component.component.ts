import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-my-other-component',
  templateUrl: './my-other-component.component.html',
  styleUrls: ['./my-other-component.component.scss']
})
export class MyOtherComponentComponent implements OnInit, OnDestroy {

  constructor() { }

  ngOnInit() {
    console.log('my-other-component init!');
  }

  ngOnDestroy() {
    console.log('my-other-component destroy!');
  }

}
