import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'case',
  templateUrl: './case.component.html',
  styleUrls: ['./case.component.css']
})
export class CaseComponent implements OnInit {
  viewMode = 'map';
  constructor() { }

  ngOnInit(): void {
  }

  onChangeMode($event: string): void{
    this.viewMode = $event;
  }

}
