import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { DataModule } from './data/data.module';
import { SharedModule } from './shared/shared.module';
import { AppFooterComponent } from './layouts/app-footer/app-footer.component';
import { AppHeaderComponent } from './layouts/app-header/app-header.component';
import { AppMainComponent } from './layouts/app-main/app-main.component';
import { AppNavBarComponent } from './layouts/app-nav-bar/app-nav-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    AppFooterComponent,
    AppHeaderComponent,
    AppMainComponent,
    AppNavBarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    DataModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
