import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AttributesRoutingModule } from './attributes-routing.module';
import { AttributesComponent } from './attributes.component';
import { CreateAttributeComponent } from './create-attribute/create-attribute.component';
import { CreatAttributeComponent } from './creat-attribute/creat-attribute.component';
import { EditAttributeComponent } from './edit-attribute/edit-attribute.component';
import { DeleteAttributeComponent } from './delete-attribute/delete-attribute.component';
import { ListAttributeComponent } from './list-attribute/list-attribute.component';
import { SubAttributeCreateComponent } from './sub-attribute-create/sub-attribute-create.component';
import { SubAttributeDeleteComponent } from './sub-attribute-delete/sub-attribute-delete.component';


@NgModule({
  declarations: [
    AttributesComponent,
    CreateAttributeComponent,
    CreatAttributeComponent,
    EditAttributeComponent,
    DeleteAttributeComponent,
    ListAttributeComponent,
    SubAttributeCreateComponent,
    SubAttributeDeleteComponent
  ],
  imports: [
    CommonModule,
    AttributesRoutingModule
  ]
})
export class AttributesModule { }
