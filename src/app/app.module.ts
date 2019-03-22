/**
 * from: @angular/...
 * 
*/
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

/**Importar la funcionalidad para vincular datos [(ngModel)] en el ejemplo estamos creando formulario: modulo de fomulario.
 * No olvidar importar en sección de imports
*/
import { FormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http'

/**QUINTA PARTE: ENRUTADOR */
import { RouterModule, Route} from '@angular/router'

/**
 * from: CARPETAS DEL PROYECTO
 * 
*/
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

/** Importo mi componente recien creado*/

import { HolaMundoComponent } from './hola-mundo/hola-mundo.component';
import { UserComponent } from './user/user.component';
import { AboutComponent } from './about/about.component';

/**Importar el SERVICIO, se declara dentro de PROVIDERS*/
import { DataService } from './data.service'

/**constante que contiene las rutas para direccionar el route
 * cada ruta será un objeto
 */
const routes = [
  {path: '', component: HolaMundoComponent},
  {path: 'about', component: AboutComponent}
];

/**Modulo principal de Angular*/
@NgModule({
  declarations: [
    AppComponent,
    HolaMundoComponent,
    UserComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    /**qué rutas tendrá mi aplicación: metodo: forRoot */
    RouterModule.forRoot(routes)
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }

