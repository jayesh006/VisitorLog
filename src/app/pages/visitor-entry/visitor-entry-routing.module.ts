import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VisitorEntryPage } from './visitor-entry.page';

const routes: Routes = [
  {
    path: '',
    component: VisitorEntryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VisitorEntryPageRoutingModule {}
