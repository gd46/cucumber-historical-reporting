import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule }   from '@angular/router';

import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { FooterComponent } from './footer/footer.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DatatableComponent } from './datatable/datatable.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    BreadcrumbsComponent,
    FooterComponent,
    DashboardComponent,
    DatatableComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {
        path: '',
        redirectTo: '/dashboard/all',
        pathMatch: 'full'
      },
      {
        path: 'dashboard/all',
        component: DashboardComponent
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
