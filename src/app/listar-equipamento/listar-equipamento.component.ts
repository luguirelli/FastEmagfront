import { Component, OnInit,  ElementRef} from '@angular/core';
import {Equipament} from './equipament';
import { EquipamentService } from './equipament.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-listar-equipamento',
  templateUrl: './listar-equipamento.component.html',
  styleUrls: ['./listar-equipamento.component.css']
})
export class ListarEquipamentoComponent implements OnInit {

  equipamento: Equipament = new Equipament();
  equipamentos: any;
  pagina: number;
  details: {};
  retorno: {};


  constructor( private el:ElementRef,
    private route: ActivatedRoute,
    private router: Router,
    private equipamentService: EquipamentService,) { }

  ngOnInit() {

  }



}
