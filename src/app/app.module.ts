import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StoreService } from './services/Store';
import { StoreModule } from '@ngrx/store';
import { counterReducer } from './reducers';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({count: counterReducer})
  ],
  providers: [StoreService],
  bootstrap: [AppComponent]
})
export class AppModule { }
