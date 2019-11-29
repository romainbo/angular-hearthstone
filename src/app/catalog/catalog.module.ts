import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CatalogRoutingModule } from './catalog-routing.module';
import { ListComponent } from './list/list.component';
import { DetailComponent } from './detail/detail.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [ListComponent, DetailComponent],
  imports: [CommonModule, CatalogRoutingModule, HttpClientModule, FormsModule]
})
export class CatalogModule {}
