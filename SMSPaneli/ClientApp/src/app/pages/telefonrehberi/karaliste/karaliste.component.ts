import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-karaliste',
  templateUrl: './karaliste.component.html',
  styleUrls: ['./karaliste.component.scss']
})
export class KaralisteComponent implements OnInit {
  settings = {


    columns: {
      id: {
        title: 'ID',
        type: 'number',

      },
      isim: {
        title: 'Ad Soyad',
        type: 'string',
      },
      gsmno: {
        title: 'Gsm No',
        type: 'string',

      },

      aciklama: {
        title: 'Nedeni ?',
        type: 'string',

      },
    },

    add: {
      addButtonContent: '<i class="nb-plus"></i>',
      createButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    edit: {
      editButtonContent: '<i class="nb-edit"></i>',
      saveButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    delete: {
      deleteButtonContent: '<i class="nb-trash"></i>',
      confirmDelete: true,
    },

  }
  constructor() { }

  ngOnInit() {
  }

}
