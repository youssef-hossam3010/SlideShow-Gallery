import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { Page1Component } from '../../src/app/components/page1/page1.component';
import { Page2Component } from '../../src/app/components/page2/page2.component';
import { FormsModule } from '@angular/forms';
import { CustomPipe } from './pipe/custom.pipe';

@NgModule({
  declarations: [
    AppComponent,
    Page1Component,
    Page2Component,
    CustomPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
