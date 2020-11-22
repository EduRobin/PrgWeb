import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  title = 'basicWeb';
  search = '';
  block = false;

  options: SearchOption[] = [
    {title: 'Home', path: 'home'},
    {title: 'About', path: 'about'},
    {title: 'Contact', path: 'contact'}
  ];

  get filteredOptions(): SearchOption[] {
    const filteredOption = [];
    const search = this.search.toLowerCase();
    for (const option of this.options) {
      if (option.title.toLowerCase().includes(search)) {
        filteredOption.push(option);
      }
    }
    return filteredOption;
  }

  toggleOptions() {
    if (this.block === true) {
      this.block = false;
    } else {
      this.block = true;
    }
  }

  toggleOptionsOff() {
    this.block = false;
  }

  ngOnInit(): void {
  }

}


class SearchOption {
  title: string;
  path: string;
}
