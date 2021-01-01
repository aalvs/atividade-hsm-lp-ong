import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  @Input() toggleStatus;

  formModal: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {

    /*this.formModal = new FormGroup({
      nome: new FormControl(null),
      email: new FormControl(null),
      telefone: new FormControl(null),
      cpf: new FormControl(null)
    });*/

    this.formModal = this.formBuilder.group({
      nome: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      telefone: ['', Validators.required],
      cpf: ['', Validators.required]
    });

    

  }

  cpfMask: string = '000.000.000-00';
  telMask: string = '(00) 00000-0000';

  login() {
    console.warn(this.formModal.value)
    if (this.formModal.status == 'VALID') {
      console.log('Bem vindo, Tony Stark!');
      this.formModal.reset();
    } else {
      console.log('Deu ruim!');
    }
  }


}
