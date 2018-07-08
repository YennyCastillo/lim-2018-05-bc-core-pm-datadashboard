# Proyecto #2  
### Data Dashboard
Data Dashboard  nace como una herramienta que nos permite recoger data y transformarla en información valiosa para nuestros usuarios (Training Manager de Laboratoria) ayudándolos a tener de una manera sencilla y dinámica información que les permita medir el desempeño de sus alumnas para poyarlas en su aprendizaje y desarrollo personal.

#### User Experience Design:

#### 1) Definición del producto:
Data Dashboard es una aplicación fácil de usar y entender que se puede adaptar a una pc convencional como a varios dispositivos móviles. Para realizar esta aplicación realizamos lo siguiente: 

1.	Empezamos creando un Sketch que reflejara los requerimientos de los usuarios complementandolo con una entrevista (Training Manager) donde incluía una serie de preguntas para obtener un feedback .

2.	Posterior a haber recibido el feedback creamos un nuevo Sketch incluyendo las recomendaciones obtenidas a través de la entrevista.

3.	Diseñamos un prototipo en el que modificamos nuestro diseño inicial de la app y empezar a codear. 

El principal objetivo de los usuarios es analizar la mayor cantidad de datos del LMS respecto al progreso de las estudiantes para ayudarlas en su aprendizaje. 



#### Informe de la entrevista:
El día lunes 11 de junio realizamos una entrevista al usuario que en este caso es la Training Manager de Lima, Alejandra, quien nos comentó que le gustó el sketch que le presentamos y que siguiéramos con la idea que tenemos del proyecto Data Dashboard.
Nos dijo que preferiría que esta información esté acoplada en el LMS (en la lista de la izquierda, a continuación de “Mis cursos” y “Configuración”), por lo que aquí ya tiene un usuario y contraseña, así que le sería más simple que abrir otra ventana e ingresar sus datos nuevamente.
En la página que sigue después de filtrar la alumna, le presentamos con el nombre de la alumna y el id, nos sugirió que retiremos el id porque es un texto que le confundía, así que era suficiente con el nombre y apellido de la estudiante.
Referente a los gráficos de completitud del Data Dashboard, prefirió que sean tablas en vez de círculos ya que se puede distinguir mejor en cada columna un porcentaje total en cada uno de los temas (Ejercicios autocompletados, Quiz, Lectura).
Le preguntamos también sobre cada cuanto revisaría la información del Data Dashboard, lo que nos dijo es que lo revisaría al final de cada Sprint para ver cual fue el avance semanal de los estudios de los temas y comparar con el avance del proyecto, para evaluar mejor los cambios respecto a un proyecto anterior lo revisaría a fin de cada proyecto.

#### 2) Sketch de la solución (prototipo de baja fidelidad)
- Realizado a mano alzada con lápiz y papel.
![sketch](https://github.com/PatriciaVidal/lim-2018-05-bc-core-pm-datadashboard/blob/ProyectoData/src/imagenes/sketch.gif?raw=true"title")

#### 3) Diseño de la Interfaz de Usuario (prototipo de alta fidelidad)
- Prototipo creado en ai (Adobe Illustrator). Utilizamos los archivos que enviaron actualizados de la línea gráfica de Laboratoria. 

![prototipo](https://github.com/PatriciaVidal/lim-2018-05-bc-core-pm-datadashboard/blob/ProyectoData/src/imagenes/prototipo.gif?raw=true"title")



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
![planificador](https://github.com/PatriciaVidal/lim-2018-05-bc-core-pm-datadashboard/blob/ProyectoData/src/imagenes/planificador_infinito.gif?raw=true"title")


Gracias!
##### Patricia Vidal & Yenny Castillo