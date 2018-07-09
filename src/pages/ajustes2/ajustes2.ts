import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';
import { PagesPagina2Page } from '../pages-pagina2/pages-pagina2';
import { Pagina1Page } from '../pagina1/pagina1';

@Component({
  selector: 'page-ajustes2',
  templateUrl: 'ajustes2.html',
})
export class Ajustes2Page {

slides = [
  {
titulo:"Kanban",
Descripcion:"que se define como “un sistema de producción altamente efectivo y eficiente”, ha contribuido a generar un panorama "+
"manufacturero óptimo y competitivo. Todo surgió en una metodología llamada Lean, creada por Toyota para mejorar su producción usando técnicas just-in-time (JIT),"+
" en los que se utilizaban tarjetas para identificar necesidades de material en la cadena de producción.",
  },
{
titulo:"Kanban",
 Descripcion:"El Kanban está dentro de la estrategia Kaizen, es decir, la mejora continua y continuada."+
 "Kanban es una palabra japonesa que significa “tarjetas visuales”, donde Kan es “visual”, y Ban corresponde a “tarjeta”",
 },
 {
 titulo:"La Estrategia Kaizen",
Descripcion:"el proceso continuo de análisis de situación para la adopción proactiva de decisiones creativas e innovadoras tendientes a incrementar de manera consistente la competitividad de la empresa mediante la mejora continua de los productos, servicios y procesos (tanto productivos, como de apoyo y planificación)"
 },
{
  titulo:"La Estrategia Kaizen",
Descripcion:"Actualmente, el término Kanban ha pasado a formar parte de las llamadas metodologías ágiles, cuyo objetivo es gestionar de manera general cómo se van completando las tareas.",
 },
 {
  titulo:"Kanban",
 Descripcion:"Kanban no es una técnica específica del desarrollo software, su objetivo es gestionar de manera general como se van completando tareas, pero en los últimos años se ha utilizado en la gestión de proyectos de desarrollo software, a menudo con Scrum (lo que se conoce como Scrumban).",
  },
 {
   titulo:"Los principios de la metodología Kanban",
  Descripcion:"La metodología Kanban se basa en una serie de principios que la diferencian del resto de metodologías conocidas como ágiles: Calidad garantizada, Reducción del desperdicio, Mejora Continua y Flexibilidad.",
},
{
titulo:"I).  Calidad garantizada ",
Descripcion:"Todo lo que se hace debe salir bien a la primera, no hay margen de error. De aquí a que en Kanban no se premie la rapidez, sino la calidad final de las tareas realizadas. Esto se basa en el hecho que muchas veces cuesta más arreglarlo después que hacerlo bien a la primera.",
},
{
titulo:"II). Reducción del desperdicio",
Descripcion:"Kanban se basa en hacer solamente lo justo y necesario, pero hacerlo bien. Esto supone la reducción de todo aquello que es superficial o secundario (principio YAGNI).",
},
{
 titulo:"III). Mejora continua",
Descripcion:"Kanban no es simplemente un método de gestión, sino también un sistema de mejora en el desarrollo de proyectos, según los objetivos a alcanzar.",
},
{
titulo:"IV). Flexibilidad",
Descripcion:"Lo siguiente a realizar se decide del backlog (o tareas pendientes acumuladas), pudiéndose priorizar aquellas tareas entrantes según las necesidades del momento (capacidad de dar respuesta a tareas imprevistas).",
},
{
  titulo:"Las principales reglas de Kanban son las tres siguientes",
  Descripcion:"(1) Visualizar el trabajo y las fases del ciclo de producción o flujo de trabajo, (2) determinar el límite de “trabajo en curso” (o Work In Progress) y (3) medir el tiempo en completar una tarea (lo que se conoce como “lead time”).",
  },
  {
   titulo:"I). Visualizar el trabajo en Kanban y las fases del ciclo de producción, o flujo de trabajo.",
  Descripcion:"Al igual que Scrum, Kanban se basan en el desarrollo incremental, dividiendo el trabajo en partes. Una de las principales aportaciones es que utiliza técnicas visuales para ver la situación de cada tarea, y que quizás habrás visto representado pizarras llenas de post-it.",
  },
  {
  titulo:"II). Determinar el límite de “trabajo en curso”",
  Descripcion:"En Kanban se debe definir cuantas tareas como máximo puede realizarse en cada fase del ciclo de trabajo (ejemplo, como máximo 4 tareas en desarrollo, como máximo 1 en pruebas, etc.), a ese número de tareas se le llama límite del “work in progress”. A esto se añade otra idea tan razonable como que para empezar con una nueva tarea alguna otra tarea previa debe haber finalizado.",
  },
  {
    titulo:"II). Medir el tiempo en completar una tarea",
    Descripcion:"El tiempo que se tarda en terminar cada tarea se debe medir, a ese tiempo se le llama “lead time”. El “lead time” cuenta desde que se hace una petición hasta que se hace la entrega.",
    },
    {
     titulo:"Mas Imformacion...",
    Descripcion:"Aunque la métrica más conocida del Kanban es el “lead time”, normalmente se suele utilizar también otra métrica importante: el “cycle time”. El “cycle time” mide desde que el trabajo sobre una tarea comienza hasta que termina. Si con el “lead time” se mide lo que ven los clientes, lo que esperan, y con el “cycle time” se mide más el rendimiento del proceso.",
    },
    {
    titulo:"Pasos para configurar tu estrategia de Kanban",
    Descripcion:"La aplicación del método Kanban implica la generación de un tablero de tareas que permitirá mejorar el flujo de trabajo y alcanzar un ritmo sostenible. Para implantar esta metodología, deberemos tener claro los siguientes aspectos.",
    },
    {
      titulo:"I). Definir el flujo de trabajo de los proyectos",
      Descripcion:"Para ello, simplemente deberemos crear nuestro propio tablero, que deberá ser visible y accesible por parte de todos los miembros del equipo. Cada una de las columnas corresponderá a un estado concreto del flujo de tareas, que nos servirá para saber en qué situación se encuentra cada proyecto. El tablero debe tener tantas columnas como estados por los que pasa una tarea, desde que se inicia hasta que finaliza.",
      },
      {
       titulo:"I). Definir el flujo de trabajo de los proyectos",
      Descripcion:"A diferencia de SCRUM, una de las peculiaridades del tablero es que este es continuo. Esto significa que no se compone de tarjetas que se van desplazando hasta que la actividad queda realizada por completo. En este caso, a medida que se avanza, las nuevas tareas (mejoras, incidencias o nuevas funcionalidades) se acumulan en la sección inicial, de manera que en las reuniones periódicas con el cliente se priorizan y se colocan dentro de la sección que se estima oportuna.",
      },
      {
      titulo:"II). Visualizar las fases del ciclo de producción",
      Descripcion:"Al igual que Scrum, Kanban se basa en el principio de desarrollo incremental, dividiendo el trabajo en distintas partes. Esto significa que no hablamos de la tarea en sí, sino que lo dividimos en distintos pasos para agilizar el proceso de producción.",
      },
      {
        titulo:"III). Stop Starting, start finishing",
        Descripcion:"Este es el lema principal de la metodología Kanban. De esta manera, se prioriza el trabajo que está en curso en vez de empezar nuevas tareas. Precisamente, una de las principales aportaciones del Kanban es que el trabajo en curso debe estar limitado y, por tanto, existe un número máximo de tareas a realizar en cada fase.",
        },
        {
         titulo:"IV). Control del Flujo",
        Descripcion:"A diferencia de SCRUM, la metodología Kanban no se aplica a un único proyecto, sino que mezcla tareas y proyectos. Se trata de mantener a los trabajadores con un flujo de trabajo constante, las tareas más importantes en cola para ser desarrolladas y un seguimiento pasivo para no tener que interrumpir al trabajador en cada momento.",
        }
];

 constructor(public navCtrl: NavController, public navParams: NavParams) {
   console.log(this.slides);
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad Ajustes2Page');
  }

Juego(){
  this.navCtrl.push(Pagina1Page);
}
Pasar(){
this.navCtrl.push(PagesPagina2Page);
}
}
