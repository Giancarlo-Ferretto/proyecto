# Proyecto

## Caso de estudio

Un sistema de servicio al cliente de reclamos realizados por los clientes con las siguientes características.

- Los tickets pueden tener 3 estados, Abierto, en desarrollo y Cerrado.

- Los tickets pueden tener prioridad de atención: Alta, Media y Baja

- Solo una persona que ha iniciado sesión puede colocar un ticket.

- Se da una asignación automática de un número de ticket cuando un usuario emite una solicitud.

- La solicitud es un formulario que tiene los siguientes campos: prioridad, categoría, Asunto y descripción.  El campo categoría tiene los siguientes valores: Solicitud genérica, solicitud de cambio, incidente, problema, solicitud de hardware, solicitud de software nuevo.

- El administrador es el único que puede cambiar el estado de ticket y también enviar una respuesta.

## Requerimentos

De acuerdo con el caso de estudio que se la ha asignado, debe hacer el desarrollo de una aplicación web integrando una base de datos ya sea relacional o no relacional.

El desarrollo debe cumplir los siguientes requisitos mínimo:

### Backend
1. Uso al menos uno de los siguientes lenguajes: PHP o nodeJS. También puede hacer uso de frameworks como: Laravel, nodeJSExpress o Django.
2. Definir el modelo a implementar y presentar el diseño de la base de datos de acuerdo al caso de estudio asignado.
3. Justificar la decisión del tipo de base de datos seleccionada. Esta justificación es basada con los siguientes criterios: rendimiento, tamaño de datos, capacidad, configuración e implementación.
4. Se debe implementar los CRUD necesarios, por lo que debe diseñarse un REST-API haciendo uso de algún lenguaje de programación mencionados en el punto 1.
5. Cada una de las operaciones CRUD deben tener mensajes de comunicación que le informe al usuario acerca del estado de la operación.
6. Indicar una política de seguridad que debe tomarse en cuenta para construir un backend seguro.

### Frontend
7. Diseño responsivo haciendo uso de los módulos de boostrap o material design.
8. Uso de preprocesador SASS.
9. El diseño debe tener un header y un footer, este debe conservarse en toda la aplicación web.
10. Debe existir una interfaz gráfica de administrador, el cual existe un rol de administrador, y éste pueda acceder a la información a través de un inicio de sesión.
La información que podrá acceder es:
a. Reporte de los usuarios registrados.
b. Reporte de Solicitudes que visualice en colores los tipos de
11. Debe existir un buscador que permita filtrar la información con al menos 3 opciones.
12. Formulario de Registro, el cual solicite la siguiente información: nombres, apellidos, RUT, dirección de residencia, Región, Comuna, Correo electrónico, contraseña y confirmar contraseña. La contraseña debe guardarse encriptada en la base de datos. La región que se seleccione debe mostrar las comunas asociadas, este es un tipo de campo “Select”. Los campos deben ser obligatorios.
13. Formulario de Iniciar Sesión que tenga captcha.
14. Recordar contraseña.
