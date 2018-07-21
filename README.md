# Proyecto #2  
### Data Dashboard
Data Dashboard  nace como una herramienta que nos permite recoger data y transformarla en información valiosa para nuestros usuarios (Training Manager de Laboratoria) ayudándolos a tener de una manera sencilla y dinámica información que les permita medir el desempeño de sus alumnas para apoyarlas en su aprendizaje y desarrollo personal.


#### User Experience Design:

#### Objetivos:

Nuestro principal objetivo es hacer que  esta aplicacion cumpla con los requerimientos de nuestros usuarios, haciendo que la interacción del usuario con la interfaz se convierta en una experiencia agradable.

#### 1) Definición del producto:

Data Dashboard es una aplicación fácil de entender  y usar,que se adapata a cualquier pc convencional como a varios dispositivos móviles. Para crear esta aplicación realizamos lo siguiente: 

1.	Empezamos creando un Sketch que reflejara los requerimientos de los usuarios complementandolo con una entrevista (Training Manager) donde incluía una serie de preguntas para obtener feedback del mismo .

2.	Posterior a haber recibido el feedback creamos un nuevo Sketch incluyendo las recomendaciones obtenidas a través de la entrevista.

3.	Diseñamos un prototipo de alta fidelidad que nos guiara en el desarrollo de la interfaz.


#### Informe de la entrevista:

Entrevistada: srta. Alejandra - Training Manager de laboratoria - sede Lima.

Herramientas utilizadas: Entrevista y sketch de como sería nuestra aplicación.

Conclusiones: 

** Con la entrevista se concluye:
> Que la aplicacion Data-Dashboard sería una herramienta de mucha utilidad para las Training Managers pues les ayudaría medir de una manera eficiente el desempeño de las alumnas de Laboratoria. 

> Que ésta aplicación no necesitaría de un usuario ya que deberá de incluirse dentro del LMS de Laboratoria.

> que esta apliación sería revisada al final de cada Sprint.

** Con el sketch se concluye:
> Que el diseño del sketch se adapta a los requerimientos del usuario (sketch que se muestra líneas mas abajo).

> Que en el contenido que se desea mostrar en la aplicación habian datos innecesarios (Id de las alumnas).

> Que los gráficos que se deseaban mostrar(gráficas de círculos)  sería mejor mostrarlos en tablas ya que  le permitiria visualizar mejor la información.

 

#### 2) Sketch de la solución (prototipo de baja fidelidad)
- Realizado a mano alzada con lápiz y papel.
![sketch](https://github.com/YennyCastillo/lim-2018-05-bc-core-pm-datadashboard/blob/ProyectoData/src/imagenes/sketch.gif?raw=true"title")

#### 3) Diseño de la Interfaz de Usuario (prototipo de alta fidelidad)
- Prototipo creado en ai (Adobe Illustrator). Utilizamos los archivos que enviaron actualizados de la línea gráfica de Laboratoria. 

![prototipo](https://github.com/YennyCastillo/lim-2018-05-bc-core-pm-datadashboard/blob/ProyectoData/src/imagenes/prototipo.gif?raw=true"title")



#### Implementación de la Interfaz de Usuario (HTML/CSS/JS):


**HTML**: 
Aqui es donde estructuramos la página web del Data Dashboard.
en la etiqueta _head_ colocamos el responsive, además del logo y linkear el archivo style.css.

En la etiqueta _body_ dividimos las partes principales de la página en distintos div, que a su vez eran llamados con sus respectivos id.

**JAVASCRIPT**: 
_data.js_: aqui jalamos la información del json, tanto para la lista de cohorts, los users (las estudiantes) y el progress (la información de completitud de los cursos de las estudiantes) para luego obtener otro de los datos que nos piden que es el porcentaje de completitud.
_main.js_:usamos elementos del DOM para crear las funciones necesarias y que imprima tanto en la consola como en la pagina web.

**CSS**: Los id que usamos en el html nos sirvieron para darle estilo tanto en colores y forma a las partes estructuradas del html.Ademas de el media queries para crear responsive en el texto y las imagenes.

**TEST**:
(adjuntar imagen de TEST)

¿Cómo fue todo esto posible?
Con el sistema Kanvan realizamos un Planificador de tareas, hecho en papelógrafo con unas notitas en post-it junto para ir actualizado a diario las tareas realizadas durante los sprints.
![planificador](https://github.com/YennyCastillo/lim-2018-05-bc-core-pm-datadashboard/blob/ProyectoData/src/imagenes/planificador_infinito.gif?raw=true"title")


Gracias!
##### Patricia Vidal & Yenny Castillo