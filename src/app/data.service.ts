import { Injectable } from '@angular/core';
/**cliente para hacer peticiones http desde Angular 
 * HttpClient 
*/
/**Crear un servicio para reutilizar métodos en cualquier parte de la aplicación
 * Servicio para obtener datos:data.service.ts
 * peticion Http a https://jsonplaceholder.typicode.com/posts
 * A través de angular nos traemos esos datos a la aplicacion para pintarlos en pantalla
 * ADVERTENCIA: Angular usa para esto el módulo HTTP
 */

import {HttpClient} from '@angular/common/http';
import { Post } from './Post';
@Injectable({
  providedIn: 'root'
})
export class DataService {

  /**Voy a usar el modulo dentro de la clase DataService. Private, solamente dentro de esta clase
   * ADVERTENCIA: no olvidar declarar el app.module.ts en app.module.ts
   * 
   */
  constructor(private http: HttpClient) { 
    console.log('service is working!');

  }
  getData(){
    /**Múltiples publicaciones en retorno
     * arreglo de publicaciones:
     * <Post[]>
     */
    return this.http.get<Post[]>('https://jsonplaceholder.typicode.com/posts')

  }
}




