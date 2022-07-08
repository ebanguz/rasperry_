import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HttpService } from './services/http.service';
import { HttpClientModule } from '@angular/common/http';
import { ComponentComponent } from './component/component.component';

@NgModule({
  declarations: [AppComponent, ComponentComponent],
  imports: [BrowserModule, HttpClientModule, FormsModule, ReactiveFormsModule],
  providers: [HttpService],
  bootstrap: [AppComponent],
})
export class AppModule {}
