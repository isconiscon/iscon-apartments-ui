import { NgModule } from '@angular/core';

import { TableModule } from 'primeng/table';
import { CardModule } from 'primeng/card';
import { DialogModule } from 'primeng/dialog';
import { DropdownModule } from 'primeng/dropdown';
import { CheckboxModule } from 'primeng/checkbox';

const modules = [
  TableModule,
  CardModule,
  DialogModule,
  DropdownModule,
  CheckboxModule,
];

@NgModule({
  imports: modules,
  exports: modules,
})
export class PrimengModule {}
