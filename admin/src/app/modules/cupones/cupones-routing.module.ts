import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateCuponeComponent } from './create-cupone/create-cupone.component';
import { CuponesComponent } from './cupones.component';
import { EditCuponeComponent } from './edit-cupone/edit-cupone.component';
import { ListCuponeComponent } from './list-cupone/list-cupone.component';

const routes: Routes = [

  {
    path: '',
    component: CuponesComponent,
    children: [
      {
        path: 'register',
        component: CreateCuponeComponent
      },
      {
        path: 'list',
        component: ListCuponeComponent
      }
      ,
      {
        path: 'list/edit/:id',
        component: EditCuponeComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CuponesRoutingModule { }
