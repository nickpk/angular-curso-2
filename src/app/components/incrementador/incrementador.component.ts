import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: []
})
export class IncrementadorComponent implements OnInit {

  @Input() leyenda:string = 'Leyenda';
  @Input() progreso:number = 50; 

  @Output() cambioValor:EventEmitter<number> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }


  cambiarValor(valor:number){
    let calculo = this.progreso + valor;
    if(calculo > 100){
      this.progreso = 100;
      this.cambioValor.emit(this.progreso);
      return;
    }
    if(calculo < 0){
      this.progreso = 0;
      this.cambioValor.emit(this.progreso);
      return;
    }
    this.progreso = this.progreso + valor;
    this.cambioValor.emit(this.progreso);

  }


}
