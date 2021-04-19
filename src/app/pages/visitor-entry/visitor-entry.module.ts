import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VisitorEntryPageRoutingModule } from './visitor-entry-routing.module';

import { VisitorEntryPage } from './visitor-entry.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VisitorEntryPageRoutingModule
  ],
  declarations: [VisitorEntryPage]
})
export class VisitorEntryPageModule {}
