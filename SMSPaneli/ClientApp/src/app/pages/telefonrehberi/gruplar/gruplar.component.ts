import {Component, OnInit} from '@angular/core';
import { Ng2SmartTableModule, LocalDataSource } from 'ng2-smart-table';

@Component({
  selector: 'ngx-gruplar',
  templateUrl: './gruplar.component.html',
  styles: [`
    nb-card {
      transform: translate3d(0, 0, 0);
    }
  `],
})
export class GruplarComponent implements OnInit {

  settings = {


    columns: {
      id: {
        title: 'ID',
        type: 'number',

      },
      isim: {
        title: 'Grup İsmi',
        type: 'string',
      },
      toplam: {
        title: 'Toplam Kişi',
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
  data = [
    // ... our data here
  ];
  source: LocalDataSource = new LocalDataSource();
  constructor() {
    this.source = new LocalDataSource(this.data); // create the source

  }
  onDeleteConfirm(event): void {
    if (window.confirm('Seçtiğiniz Grupları Silmek İstediğinizden Eminmisiniz ?')) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }

  ngOnInit() {
  }

}
