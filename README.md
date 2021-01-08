# Tenno App

Aplicación de control del juego Warframe.

Mantiene los items pendientes por subir de maestría.

Control de los items por vender.

Validar los precios promedio de venta de los items.

Lugares de farmeo por item.

Demás información relevante para Jugar.

## Comenzando 🚀

Únicamente debe de agregar en el environment y environment.prod el acceso de Firebase.

Despues ionic -serve

*En cuanto a agregar items a pendientes y ventas, se debe de realizar en dispositivos reales, ya que SQLite no corre en WEB.

### Pre-requisitos 📋

Ionic CLI

Angular FireAuth 

SQLite 

SQLitePorter


### Instalación 🔧

Debe de mantener creado un proyecto en Firebase para poder utilizar el Angular FireAuth que nos permite crear los usuarios por medio del correo, con este acceso se debe de ingresar en environment y environment.prod la información personal del proyecto de Firebase.

Después de eso simplemente:

ionic -serve

*Para generar los icon y splash se utilizó la ayuda: https://gist.github.com/dalezak/a6b1de39091f4ace220695d72717ac71

*Instalar SQLite: npm install @ionic-native/sqlite

*Instalar SQLitePorter: npm install @ionic-native/sqlite-porter


## Construido con 🛠️

Ionic CLI                     : 6.12.3

Ionic Framework               : @ionic/angular 5.4.4

@angular-devkit/build-angular : 0.1000.8

@angular-devkit/schematics    : 10.0.8

@angular/cli                  : 10.0.8

@ionic/angular-toolkit        : 2.3.3

Capacitor CLI   : 2.4.2

@capacitor/core : 2.4.2

cordova-res : 0.15.2

NodeJS : v14.15.3

npm    : 6.14.9

Api: https://api.warframestat.us

## Autores ✒️

Luis Miranda




