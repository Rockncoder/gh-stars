import {NgModule} from '@angular/core';

import {
  MdButtonModule,
  MdIconModule,
  MdInputModule,
  MdListModule,
  MdMenuModule,
  MdRadioModule,
} from '@angular/material';


@NgModule({
  imports: [
    MdButtonModule,
    MdListModule,
    MdIconModule,
    MdMenuModule,
    MdRadioModule,
  ],
  declarations: [],
  exports: [
    MdButtonModule,
    MdInputModule,
    MdListModule,
    MdIconModule,
    MdMenuModule,
    MdRadioModule,
  ],
})
export class AppMaterialModule {
}
