import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'visitor-entry',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'visitor-entry',
    loadChildren: () => import('./pages/visitor-entry/visitor-entry.module').then( m => m.VisitorEntryPageModule)
  },
  {
    path: 'visitor-log',
    loadChildren: () => import('./pages/visitor-log/visitor-log.module').then( m => m.VisitorLogPageModule)
  },
  {
    path: 'latest-news',
    loadChildren: () => import('./pages/latest-news/latest-news.module').then( m => m.LatestNewsPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
