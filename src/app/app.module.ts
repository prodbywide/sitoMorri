import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { InfoPageComponent } from './info-page/info-page.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import routes from './app.routing';
import { LoadingPageComponent } from './loading-page/loading-page.component';
import { BachecaComponent } from './info-page/bacheca/bacheca.component';
import { UltimiAccessiComponent } from './info-page/ultimi-accessi/ultimi-accessi.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    InfoPageComponent,
    LoadingPageComponent,
    BachecaComponent,
    UltimiAccessiComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule,
    RouterModule.forRoot(routes),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
