import { Routes  } from '@angular/router';

// Routing components
import { LoginComponent }    from './login/login.component';
import { InfoPageComponent } from './info-page/info-page.component';
import { LoadingPageComponent } from './loading-page/loading-page.component';
import { BachecaComponent } from './info-page/bacheca/bacheca.component';
import { UltimiAccessiComponent } from './info-page/ultimi-accessi/ultimi-accessi.component';

const routes: Routes = [
   { path: '',  redirectTo: 'login', pathMatch: 'full' },

   { path: 'login',        component: LoginComponent },              // Login page
   { path: 'redirecting',  component: LoadingPageComponent },  // Login page
   { path: 'info',         component: InfoPageComponent,
      children: [
        { path: 'bacheca',          component: BachecaComponent },
        { path: 'ultimi-accessi',   component: UltimiAccessiComponent },
        { path: '', redirectTo: 'bacheca', pathMatch: 'full' }
   ]}
];
 
export default routes;