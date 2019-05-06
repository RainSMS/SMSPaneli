import { Component, OnInit } from '@angular/core';
import { Ng2SmartTableModule, LocalDataSource } from 'ng2-smart-table';
@Component({
  selector: 'ngx-numarasepeti',
  templateUrl: './numarasepeti.component.html',
  styleUrls: ['./numarasepeti.component.scss']
})
export class NumarasepetiComponent implements OnInit {

  settings = {


    columns: {
      id: {
        title: 'ID',
        type: 'number',

      },
      isim: {
        title: 'İsim',
        type: 'string',
      },
      soyisim: {
        title: 'Soyisim',
        type: 'string',
      },
      gsmno: {
        title: 'Gsm No',
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
  constructor() {

  }

  ngOnInit() {
  }

}
