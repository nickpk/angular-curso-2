import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, interval, Subscriber, Subscription } from 'rxjs';
import { retry,map, filter } from 'rxjs/operators';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: []
})
export class RxjsComponent implements OnInit,OnDestroy {

  subscripcion:Subscription;

  constructor() { 

      
  }

  ngOnInit() {

    this.subscripcion = this.regresaObservable().pipe( 
      retry(3) // se le indica cuantas veces se puede reintentar hasta enviar el error
    ).subscribe( 
      numero => console.log('Subs ', numero),      // callback 1 = la data ( next )
      error => console.error('error: ', error),    // callback 2 = error
      () => console.log('El observador termino')   // callback 3 = cuando termina el observable
    );


  }

  ngOnDestroy(){
    this.subscripcion.unsubscribe();
  }

  regresaObservable(): Observable<any>{
    return new Observable( (observer:Subscriber<any>) => {
      let contador = 0;
      let intervalo = setInterval( () => {
        contador++;  

        const salida = {
          valor:contador
        }
        observer.next(salida);

        if(contador ===3){
          clearInterval(intervalo);
          //observer.complete(); // finaliza el observable
        }

        /*if(contador === 10){
          clearInterval(intervalo);
          observer.error('envio un error'); // de esta manera se envia un error
        }*/

      }, 1000)

    }).pipe(
      map(resp => { // map agarra la informacion y la envia de la manera que quieras enviarla
          return resp.valor;
      }),
      filter( (valor,index) => { // filter solo espera un condicional, si da true lo devuelve el valor, si da false no lo devuelve
        if( (valor%2 === 1)){
          // numero impar
          return true;
        }else{
          // numero par
          return false;
        }
      })

    );

  }

}
