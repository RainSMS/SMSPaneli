import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {GruplarComponent} from './gruplar/gruplar.component';
import {ThemeModule} from '../../@theme/theme.module';
import {Ng2SmartTableModule} from "ng2-smart-table";
import { NumarasepetiComponent } from './numarasepeti/numarasepeti.component';
import { KaralisteComponent } from './karaliste/karaliste.component';

import { BeyazlisteComponent } from './beyazliste/beyazliste.component';



@NgModule({
  declarations: [GruplarComponent, NumarasepetiComponent, KaralisteComponent, BeyazlisteComponent],
  imports: [
    ThemeModule,
    Ng2SmartTableModule,


  ],
})
export class TelefonrehberiModule {

}
