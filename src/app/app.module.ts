import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//routes
import { APP_ROUTING } from './app.routes';

//services
import { CandidatosService } from './services/votaciones.service';

//components
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { TarjetaVotacionComponent } from './components/tarjeta-votacion/tarjeta-votacion.component';
import { HomeComponent } from './components/home/home.component';
import { PanelDeControlComponent } from './components/panel-de-control/panel-de-control.component';
import { CardCandidatoComponent } from './components/card-candidato/card-candidato.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    TarjetaVotacionComponent,
    HomeComponent,
    PanelDeControlComponent,
    CardCandidatoComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING
  ],
  providers: [
    CandidatosService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
