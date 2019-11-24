import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { DashboardComponent } from './dashboard/dashboard.component';
import { MovieService } from './shared/movie.service';
import { MovieEffects } from './store/effects/movie.effects';
import { reducers } from './store/reducers';
import { environment } from '../environments/environment';
import { RatingComponent } from './shared/rating/rating.component'

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    RatingComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    StoreModule.forRoot(reducers),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    EffectsModule.forRoot([MovieEffects]),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
    })
  ],
  exports: [
    RatingComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
