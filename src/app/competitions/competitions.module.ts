import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompetitionsRoutingModule } from './competitions-routing.module';
import { CompetitionsComponent } from './list/competitions.component';
import { CompetitionsService } from './competitions.service';
import { SharedModule } from '@shared/shared.module';


@NgModule({
  declarations: [
    CompetitionsComponent
  ],
  imports: [
    CommonModule,
    CompetitionsRoutingModule,
    SharedModule
  ],
  exports: [CompetitionsComponent],
  providers: [CompetitionsService]

})
export class CompetitionsModule { }
