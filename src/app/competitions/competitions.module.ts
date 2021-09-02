import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompetitionsRoutingModule } from './competitions-routing.module';
import { CompetitionsComponent } from './list/competitions.component';
import { CompetitionsService } from './competitions.service';


@NgModule({
  declarations: [
    CompetitionsComponent
  ],
  imports: [
    CommonModule,
    CompetitionsRoutingModule,
  ],
  exports: [CompetitionsComponent],
  providers: [CompetitionsService]

})
export class CompetitionsModule { }
