import { RouterModule, Router, Routes} from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { TarjetaVotacionComponent } from './components/tarjeta-votacion/tarjeta-votacion.component';
import { PanelDeControlComponent } from './components/panel-de-control/panel-de-control.component';

const APP_ROUTES :Routes=[
  {path:'home', component:HomeComponent},
  {path:'tarjeton', component:TarjetaVotacionComponent},
  {path:'panel-de-control', component:PanelDeControlComponent},

  {path:'**', pathMatch:'full', redirectTo:'home'}
];


export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);

