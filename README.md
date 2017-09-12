# Template para desarrollo de App usando react-native

## Ambientación del equipo

[react-native getting-started](https://facebook.github.io/react-native/docs/getting-started.html)

## Modificar el nombre de la aplicacón

Se deben de modificar los archivos __index.ios.js__, __index.android.js__

~~~
AppRegistry.registerComponent('app', () => App);
//Cambia a
AppRegistry.registerComponent('<nombre de tu app>', () => App);
~~~

También se debe de modificar el archivo __app.json__
~~~
{
  "name": "app",
  "displayName": "app"
}
//Por esto
{
  "name": "<nombre de tu app>",
  "displayName": "<Nombre a mostrar>"
}
~~~

## Actualizar el proyecto
Una vez que hayamos cambiado el nombre, debemos de eliminar las carpetas /android y la carpeta /ios, despues corremos el comando `react-native upgrade` para que nos genere de nuevo las carpetas con el nombre que es.
Ejecutamos el comando `react-native run-ios` o `react-native run-android`para correr nuestra aplicación.
