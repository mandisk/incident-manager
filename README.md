# incident-manager
Proyecto de Gestión de Incidencias

## Estado del proyecto a 06/01/2015

Las historias que se han detectado para la resolución del proyecto son los siguientes:

1.  Crear Base de Datos para incidencias
2.  Implementar servicio PHP para descargar los datos de la BBDD
3.  Implementar gestión en memoria del modelo con Angular JS
4.  Diseñar boceto interfaz de usuario
5.  Implementar interfaz para muestra de incidencias
6.  Desarrollar edición de campos en incidencias

A dia de hoy se tiene desarrollados los puntos 1,2,3,4,5. Digamos que faltarían días desarrollo para tener el ciclo cerrado para guardar los datos editados en la BBDD. En mis primeras lecturas sobre las especificaciones del proyecto, entendí que las incidencias venían creadas, por tanto, solo me preocupé por mostrarlas directamente, con las únicas opciones de edición del estado y la prioridad. A día de hoy dudo si se pedía también la creación de incidencias completas.

A continuación, dejo un enlace con una demo de lo que está desarrollado a dia de hoy:

Demo: <http://apps.socialdeveloper.org/incidences/#/home>

Se ha desarrollado con html5 + AngularJS para la parte de Frontend, mientras que para la parte de backend se ha utilizado PHP + Mysql. Para las vistas, he utilizado Angular Material.

Se puede decir que el proyecto está a medias. Los puntos siguientes son los que tengo en mente para terminar el proyecto con un mínimo de funcionamiento:

1.  Cuando se pulsa sobre el botón de VER HISTORIAL, se debe de mostrar en un alert con los cambios de estado que ha sufrido una incidencia, que incluya las fechas de esos cambios y comentario del cambio
2.  Otro servicio PHP para recoger el historial de todas las incidencias
3.  Otro servicio PHP para realizar un POST con los cambios producidos en la prioridad y estado de la incidencia al pulsar sobre Guardar Cambios
