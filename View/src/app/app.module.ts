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

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    HeaderComponent,
    FooterComponent,
    LayoutComponent,
    ListViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCheckboxModule,
    MatButtonModule,
    MatInputModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
