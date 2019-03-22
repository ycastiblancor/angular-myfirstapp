import { Component } from '@angular/core';
import { DataService } from './data.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name: string = 'John';
  age: number=28;
  posts = [];

  constructor(private dataService: DataService){
    /**Una vez se ejecuta el getData() método, se ejecuta el metodo suscribe() quien traerá los datos que estamos recibiendo -data-.
     *  -data- arreglo de publicaciones que debe ser recorrido: data =>{'lo-que-necesitemos-hacer'}
     * 
     */
    this.dataService.getData().subscribe(data =>{
      /**console.log(data); */
      this.posts = data;

    });

  }
/**Primera parte
 * 
 * 
users = ['andres', 'lucia', 'sebastian', 'paola', 'john', 'maría'];
activated:boolean = true;
*/

  /**Segunda parte
   * 
   * 
  name:string = 'Alexandra';
  age: number;
  address: {
    street: string;
    city: string;
  };
  hobbies: string[];
 constructor(){
  this.age = 28;
  this.address = {
    street: '123 Baker Street',
    city: 'London'
  };
  this.hobbies =['nadar', 'correr','escribir']
 */

 /**Tercera parte */

 users: string[] = ['alexandra', 'pepe', 'ana'];
/**metodo para el clic creado */
  sayHello(user){
    alert('Hello, I am '+user);
  }
 
  deleteUser(user){
    for(let i=0; i<this.users.length; i++){
      if(user == this.users [i]){
        this.users.splice(i, 1);
      }
    }
  }
 /**metodo para el form creado */
 addUser(newUser){
    this.users.push(newUser.value);
    newUser.value=''; /** limpia el input */
    newUser.focus(); /**El cursor se posiciona allí */

  /**    console.log(newUser.value); */
   
  return false; /** Evita el reset del form al enviar datos desde el form */
 }


 /**Para servicio implementado en la CUARTA PARTE */

}
