import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-grafico-dona',
  templateUrl: './grafico-dona.component.html'
})
export class GraficoDonaComponent implements OnInit {

  constructor() { }

  @Input() data:number[] = [];
  @Input() labels:string[] = [];
  @Input() chartType:string = '';
  @Input() leyenda:string = '';

  ngOnInit() {
  }

}
