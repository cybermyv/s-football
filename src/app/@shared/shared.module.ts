import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { MatTabsModule } from '@angular/material/tabs';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';

const THIRD_PARTY_MODULES: any[] = [
  MatTabsModule,
  MatSidenavModule,
  MatTableModule,
  MatToolbarModule,
  MatIconModule,
  MatListModule,
  MatButtonModule,
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
    ...THIRD_PARTY_MODULES
  ],
  exports: [
    HttpClientModule,
    ...THIRD_PARTY_MODULES
  ]
})
export class SharedModule { }
