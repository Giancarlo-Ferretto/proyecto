# Proyecto final ICI4240-1

Este repositorio contiene el proyecto final del ramo ICI4240-1, que solventa el caso de estudio asignado de forma aleatoria, "un sistema de servicio al cliente".


El proyecto fue desarrollado con NodeJS y ExpressJS para el servidor backend, mientras que la interfaz de usuario fue construida con Angular.

## Caso de estudio
Un sistema de servicio al cliente de reclamos realizados por los clientes con las siguientes características.
- Los tickets pueden tener 3 estados, Abierto, en desarrollo y Cerrado.
- Los tickets pueden tener prioridad de atención: Alta, Media y Baja
- Solo una persona que ha iniciado sesión puede colocar un ticket.
- Se da una asignación automática de un número de ticket cuando un usuario emite una solicitud.
- La solicitud es un formulario que tiene los siguientes campos: prioridad, categoría, Asunto y descripción. El campo categoría tiene los siguientes valores: Solicitud genérica, solicitud de cambio, incidente, problema, solicitud de hardware, solicitud de software nuevo.
- El administrador es el único que puede cambiar el estado de ticket y también enviar una respuesta.

## Modelo implementado
Tomando en cuenta el caso de estudio, se ha decidido implementar el modelo que contempla las siguientes entidades:
- Entidad usuario, ésta contiene los atributos de nombres, apellidos, correo, contraseña, rut, dirección, región y ciudad. Puede subdividirse en la entidad de administrador, o por defecto cliente.
- Entidad solicitud, son los reclamos o tickets realizados por los clientes  y contestados por los administradores, contiene como atributo el estado, prioridad, categoría, asunto, descripción, usuario, número identificador y conjunto de respuestas.
- Entidad respuesta, el caso de estudio no restringe si una solicitud puede ser respondida varias veces, pero tomando en cuenta los estados "en desarrollo" y "cerrado" se deduce que una solicitud puede tener tantas respuestas como el administrador quisiese. Se compone de los atributos solicitud, usuario administrador y campo de respuesta.

### Modelo entidad-relación
![image](https://user-images.githubusercontent.com/81869512/122865930-271d8a80-d2f5-11eb-8862-1c97da282021.png)

### Otras entidades
Entidades adicionales al modelo del caso de estudio, que tienen relevancia en la vista de registro pero que no se implementarán en la base de datos.
- Entidad región, son las regiones que se muestran como alternativa en el registro, a ésta le corresponde el atributo nombre y el conjunto de comunas.
- Entidad comuna, son las comunas que posee una región, se le asignan los atributos nombre y región asociada.

## Base de datos
Se decide por implementar una base de relacional MySQL, principalmente por ser fácil de configurar e implementar, y éstas garantizan un esquema fijo como las transacciones ACID. 
La base de datos de éste proyecto no necesita escalabilidad, ya que no saldrá de su existencia en el ramo, por lo cuál una base de datos SQL posee un rendimiento y capacidad superior a una no relacional si tratamos en un entorno de desarrollo.


## Política de seguridad
El servidor backend implementa el manejo de JSON Web Tokens para el acceso y garantía de la seguridad de los datos. También, se emplea de la librería Helmet para proteger la API de algunas vulnerabilidades web conocidas mediante el manejo de las cabezeras HTTP.


## Cliente
El servidor frontend posee un diseño responsivo mediante los módulos de ngx-bootstrap y la bibloteca de código abierto bootstrap v4.6. Se utiliza el preprocesador SASS para las hojas de estilo.


## Integrantes 
Desarrollado por Giancarlo Ferretto.
