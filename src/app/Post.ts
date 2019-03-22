/**Declarar un tipo de dato que deseo.
 * Cuando con el get http traigo los datos de muestra, quiero definir a través de una Interfaz, el tipo de dato que voy a recibir
 */

 export interface Post{
     "userId": number;
     "id" : number;
     "title": string;
     "body": string;

 }