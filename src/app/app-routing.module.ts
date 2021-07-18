import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InsertComponent } from './insert/insert.component'
import { UpdateComponent } from './update/update.component'
import { ListComponent } from './list/list.component'

const routes: Routes = [
  {
    path: 'insert',
    component:InsertComponent
    },
    {
    path: 'update',
    component: UpdateComponent
    },
    {
    path: 'list',
    component: ListComponent
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
