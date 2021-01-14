import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardModule } from 'src/dashboard/dashboard.module';
import { DashboardComponent } from 'src/dashboard/component/dashboard/dashboard.component';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DashboardModule,
    RouterModule.forRoot([
      { path: '', component: DashboardComponent },
      { path: 'dashboard', component: DashboardComponent },

    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
