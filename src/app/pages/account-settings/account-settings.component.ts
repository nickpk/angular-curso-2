import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { SettingsService } from '../../services/services.index';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styles: []
})
export class AccountSettingsComponent implements OnInit {

  constructor(public _ajustes: SettingsService) { }

  ngOnInit() {
    this.inicializarCheck();
  }

  cambiarColor(tema:string,link:any){
    this._ajustes.aplicarTema(tema);
    this.aplicarCheck(link);
  }

  aplicarCheck(link:any){
    let selectores:any = document.getElementsByClassName('selector');
    for(let ref of selectores){
      ref.classList.remove('working');
    }
    link.classList.add('working');
  }

  inicializarCheck(){
    let selectores:any = document.getElementsByClassName('selector');
    let tema = this._ajustes.ajustes.tema;
    for(let ref of selectores){
      if(tema == ref.getAttribute('data-theme')){
        ref.classList.add('working');
        break;
      }
    }
  }

}
