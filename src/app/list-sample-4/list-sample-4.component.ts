import { Component, OnInit } from '@angular/core';
import { IgxFilterOptions } from 'igniteui-angular';
@Component({
  selector: 'app-contact-list2',
  styleUrls: ['./list-sample-4.component.scss'],
  templateUrl: './list-sample-4.component.html'
})
export class ListSample4Component implements OnInit {
  public searchContact: string;

  public contacts = [
    {
      isFavorite: false,
      name: 'Terrance Orta',
      email: 'a.medjnoun@gmail.com',
      photo:
        'https://www.infragistics.com/angular-demos/assets/images/men/27.jpg'
    },
    {
      isFavorite: true,
      name: 'Richard Mahoney',
      email: 'Richar.mahoney@gmail.com',
      photo:
        'https://www.infragistics.com/angular-demos/assets/images/men/1.jpg'
    },
    {
      isFavorite: false,
      name: 'Donna Price',
      email: 'amine@gmail.com',
      photo:
        'https://www.infragistics.com/angular-demos/assets/images/women/50.jpg'
    },
    {
      isFavorite: false,
      name: 'chabha medjnoun',
      email: 'chabha.medjnoun@gmail.com',
      photo:
        'https://www.infragistics.com/angular-demos/assets/images/women/3.jpg'
    },
    {
      isFavorite: true,
      name: 'slim. Spencer',
      email: 'slim.medj@gmail.com',
      photo:
        'https://www.infragistics.com/angular-demos/assets/images/women/67.jpg'
    }
  ];

  public density = 'Person';
  public displayDensities;

  constructor() {}

  public ngOnInit() {
    this.displayDensities = [
      {
        label: 'Person List',
        selected: this.density === 'comfortable',
        togglable: true
      },
      {
        label: 'compact',
        selected: this.density === 'compact',
        togglable: true
      }
    ];
  }
//not used functions 
  public selectDensity(event) {
    this.density = this.displayDensities[event.index].label;
  }

  public toggleFavorite(contact: any) {
    contact.isFavorite = !contact.isFavorite;
  }

  get filterContacts() {
    const fo = new IgxFilterOptions();
    fo.key = 'name';
    fo.inputValue = this.searchContact;
    return fo;
  }
  //Delete item
  removeItem(index) {
    this.contacts.splice(index, 1);
  }
}
