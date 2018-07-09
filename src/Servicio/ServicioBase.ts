import { Injectable } from '@angular/core';
import { URL_SERVICIOS } from '../URL/URL_SERVICE';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable} from 'rxjs';
import { Usuario } from '../Interfas/Usuario';
import { Login } from '../Interfas/Login';
import { Preguntas } from '../Interfas/Preguntas';
import { Detalle } from '../Interfas/Detalle';
import { Juego } from '../Interfas/Juego';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class BaseDatos {

 constructor(   private http: HttpClient){ }
 Login_Jugador
 
InsertarJugador(data:Usuario): Observable<Usuario> {
const url = URL_SERVICIOS + 'UsuarioJuego/registrar_Usuario';

return this.http.post<Usuario>(url,data,httpOptions).pipe();
}

InciarSession(data:Usuario): Observable<Usuario> {
  const url = URL_SERVICIOS + 'UsuarioJuego/registrar_Usuario';
  
  return this.http.post<Usuario>(url,data,httpOptions).pipe();
  }
  

  Login(data:Login): Observable<Login> {
    const url = URL_SERVICIOS + 'UsuarioJuego/Login_Jugador';
    
    return this.http.post<Login>(url,data,httpOptions).pipe();
    }

Actualizar(n:string,nu:number){

}

Traer_Preguntas(): Observable<Preguntas []> {

  const url = URL_SERVICIOS + 'Preguntas/Traer_Preguntas';
  return this.http.get<Preguntas[]>(url);
}

getPregunta(id$: number): Observable<Preguntas> {
  const url = URL_SERVICIOS + 'Preguntas/Traer_Una_Pregunta/' + id$;
return this.http.get<Preguntas>(url);
 }
 verificar(nombre:string): Observable<Login>{
const url = URL_SERVICIOS + 'UsuarioJuego/Buscar_Usuario/'+ nombre;
return this.http.get<Login>(url).pipe();
 }

BotonHabilitado(id_User:string ,token:string ): Observable<Login>{
 
  const url = URL_SERVICIOS + 'UsuarioJuego/habilitado/'+ id_User +"/"+ token ;
  return this.http.post<Login>(url,{}).pipe();
 
}


CerrarSession(id_User:string ,token:string ): Observable<Login>{
 
  const url = URL_SERVICIOS + 'UsuarioJuego/cerrarSession/'+ id_User +"/"+ token ;
  return this.http.put<Login>(url,{}).pipe();
 
}

DetalleUsuario(id_User:string ,token:string,data:Detalle ): Observable<Detalle>{
 
  const url = URL_SERVICIOS + 'Respuestas/detelle_Usuario/'+ id_User +"/"+ token ;
  return this.http.post<Detalle>(url,data).pipe();
 
}

Intentos(id_User:string ,token:string,Id_Pregunta:number): Observable<Preguntas>{
 
  const url = URL_SERVICIOS + 'Respuestas/intentos/'+ id_User +"/"+ token+"/"+Id_Pregunta ;
  return this.http.post<Preguntas>(url,{}).pipe();
 
}
Respuestas(id_User:string ,token:string,Id_Pregunta:number,data:Juego ): Observable<Juego>{
 
  const url = URL_SERVICIOS + 'Respuestas/actualizar_respuestas/'+ id_User +"/"+ token+"/"+Id_Pregunta ;
  return this.http.put<Juego>(url,data).pipe();
 
}

Actualizar_Puntaje(id_User:string ,token:string,Id_Pregunta:number): Observable<Detalle>{
 
  const url = URL_SERVICIOS + 'Respuestas/actualizar_puntaje/'+ id_User +"/"+ token+"/"+Id_Pregunta ;
  return this.http.put<Detalle>(url,{}).pipe();
 
}



}
