import {NgModule} from '@angular/core';

import {NgxEchartsModule} from 'ngx-echarts';

import {ThemeModule} from '../../@theme/theme.module';
import {DashboardComponent} from './dashboard.component';
import {StatusCardComponent} from './status-card/status-card.component';
import {ContactsComponent} from './contacts/contacts.component';


@NgModule({
  imports: [
    ThemeModule,
    NgxEchartsModule,
  ],
  declarations: [
    DashboardComponent,
    StatusCardComponent,
    ContactsComponent,

  ],
})
export class DashboardModule {
}
