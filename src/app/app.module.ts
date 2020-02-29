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
import { HttpClientInMemoryWebApiModule,InMemoryDbService } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';
import { HerosComponent } from './heros/heros.component';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { ModalComponent } from './modal/modal.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './material/material-module';
import { HeroListComponent } from './heros-list/heros-list.component';
const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'heroes' },
  { path: 'heroes',pathMatch: 'full', component:HerosComponent}
];
@NgModule({
  declarations:[HerosComponent,AppComponent, ModalComponent, HeroDetailComponent,HeroListComponent],
  imports: [
    ReactiveFormsModule,
    MaterialModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    EntityDataModule.forRoot(entityConfig),
    RouterModule.forRoot(routes),
    //environment.production ? [] : StoreDevtoolsModule.instrument(),
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {
      dataEncapsulation: false,
      delay: 100,
      passThruUnknownUrl: true
    })
  ],
  providers: [
    { provide: InMemoryDataService, useExisting: InMemoryDbService },
    { provide: ErrorHandler, useClass: ReportingErrorHandler },
    { provide: WindowToken, useFactory: windowProvider },
   
  ],bootstrap: [ AppComponent ]
})
export class AppModule {}