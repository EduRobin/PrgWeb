import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {


  name = '';
  email = '';
  text = '';


  constructor() { }

  ngOnInit() {
  }

  click(name: string, email: string, text: string) {
      this.name = name;
      this.email = email;
      this.text = text;
      console.log(name);
      console.log(email);
      console.log(text);
  }

}
