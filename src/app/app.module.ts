import { NgModule, ErrorHandler, ApplicationInitStatus, ApplicationRef } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { DefaultDataServiceConfig, EntityDataModule,EntityDataModuleWithoutEffects } from '@ngrx/data';
import { entityConfig } from './entity-metadata';
import { environment } from 'src/environments/environment';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { ReportingErrorHandler } from './reporting-error-handler';
import { WindowToken, windowProvider } from './window';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientInMemoryWebApiModule, InMemoryDbService } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    HttpClientModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    EntityDataModule.forRoot(entityConfig),
    environment.production ? [] : StoreDevtoolsModule.instrument(),
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {
      dataEncapsulation: false,
      delay: 100,
      passThruUnknownUrl: true
    })
  ],
  providers: [
    { provide: ErrorHandler, useClass: ReportingErrorHandler },
    { provide: WindowToken, useFactory: windowProvider },
    { provide: InMemoryDataService, useExisting: InMemoryDbService }
  ],bootstrap: [ AppComponent ]
})
export class AppModule {}