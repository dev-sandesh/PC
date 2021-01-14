import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { FormsModule } from '@angular/forms';
import { SearchPipe } from 'src/pipe/search.pipe';

@NgModule({
  declarations: [DashboardComponent,SearchPipe],
  imports: [
    CommonModule,
    FormsModule,
  ],
  exports:[
    DashboardComponent
  ]
})
export class DashboardModule { }
