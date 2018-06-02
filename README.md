# test-ng

Ejemplo de login,logout y mantenimiento de usuarios (CRUD) utilizando :

- Angular 6
- Primeng 6
- Sass
- autentificacion con JWT
- consumo de WebService Rest
- Simulación de Backend con json-server.
- Prueba unitaria
- Prueba e2e

## Instalación previa

1. Instalar node y npm de: https://nodejs.org/en/download/.
2. Instalar Angular CLI globalmente: `npm install -g @angular/cli`
3. Instalar json-server : `npm install -g json-server`

## Ejecutando proyecto

1. Levantar nuestro servicio web con json-server : `json-server --watch user.json` 
2. Ubicarnos en la carpeta de nuestro proyecto : `cd my-app`
3. Instalar las dependencias con : `npm install`
4. Iniciar la aplicación : `ng serve --open`

ingresar a la pagina: http://localhost:4200/

credenciales del usuario: "system" y contraseña "system". Para esto se realizo un backend fake, para cambiar este valor
dirigirse al archivo: "test-ng/src/app/helpers/fake-backend" Es posible efectuar todas las operaciones del CRUD (crear,modificar,ver y eliminar).
Los cambios seran efectuados en el archivo user.json

## Ejectando Pruebas

para ejecutar las pruebas con karma : `ng test` con el que se abrira en el navegador una pagina con la informacion de la pruebas
Ejecutar prueba e2e : `npm run e2e`  esta opcion nos abrira el navegador con la prueba que hemos programada y resultado de dicha prueba



