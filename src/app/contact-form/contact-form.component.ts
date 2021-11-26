import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {

  contactMethods = [
    {id: 1, Name: 'Email'},
    {id: 2, Name: 'Phone'},
    {id: 3, Name: 'Sms'}
  ];

  constructor() { }

  ngOnInit(): void {
  }

  log(x: any): void{
    console.log(x);
  }

  submit(f: any): void{
    console.log(f);
    console.log(f.value.firstName);
  }

}
