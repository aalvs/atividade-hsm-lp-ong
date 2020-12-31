import { Component, OnInit } from '@angular/core';
import { Usuario } from './shared/usuario';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  usuario: Usuario;

  nome: string;
  email: string;

  constructor() { }

  ngOnInit(): void {
    this.usuario = new Usuario();
  }

  onSubmit() {
    console.log(this.usuario);
  }

}
