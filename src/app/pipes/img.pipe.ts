import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'img'
})
export class ImgPipe implements PipeTransform {

  transform(arreglo: string): string {
    if ( arreglo == '' ){
      return arreglo;
    }else{
      if (arreglo.length < 1 ){
        return arreglo;
      }else{
        const indice = arreglo.indexOf('/revision');
        return arreglo.substring(0, indice);
      }
    }
  }

}



/* let cadena = "JavaScript es un lenguaje muy bueno";
// Buscamos el índice del espacio
// https://parzibyte.me/blog/2018/12/04/buscar-indice-posicion-elemento-arreglo-javascript/
let indice = cadena.indexOf(" ");
// Cortar desde 0 hasta la aparición del primer espacio
let extraida = cadena.substring(0, indice);
console.log("Extraída: ", extraida); */