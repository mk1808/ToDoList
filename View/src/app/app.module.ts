import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LayoutComponent } from './layout/layout.component';
import { ListViewComponent } from './list-view/list-view.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCheckboxModule, MatButtonModule } from '@angular/material';
import {MatInputModule} from '@angular/material/input';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ManyListsViewComponent } from './many-lists-view/many-lists-view.component';
import { FlexLayoutModule } from "@angular/flex-layout";
import {  HttpClientModule } from '@angular/common/http';
import { CalendarComponent } from './calendar/calendar.component';
import { DayComponent } from './calendar/day/day.component';
import { RouterModule } from '@angular/router';
import { ParallaxModule, ParallaxConfig } from 'ngx-parallax';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    HeaderComponent,
    FooterComponent,
    LayoutComponent,
    ListViewComponent,
    ManyListsViewComponent,
    CalendarComponent,
    DayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    BrowserAnimationsModule,
    MatCheckboxModule,
    MatButtonModule,
    MatInputModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    HttpClientModule,
    FormsModule,
    ParallaxModule
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
