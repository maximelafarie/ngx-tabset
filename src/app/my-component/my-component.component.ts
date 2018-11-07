import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-my-component',
  templateUrl: './my-component.component.html',
  styleUrls: ['./my-component.component.scss']
})
export class MyComponentComponent implements OnInit, OnDestroy {

  constructor() { }

  ngOnInit() {
    console.log('my-component init!');
  }

  ngOnDestroy() {
    console.log('my-component destroy!');
  }

}
