import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../services/cliente.service';
import { Cliente } from '../common/cliente.model';

import {NgForm } from '@angular/forms';
@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css'],
  providers: [ClienteService]
})
export class ClientesComponent implements OnInit {

  user = {
    'nombre': '',
    'apellidoPat': '',
    'apellidoMat': '',
    'email': '',
    'fechnac': '',
    'cel': ''
  };

 arrayCustomers: Cliente[];
  constructor(private clienteService: ClienteService) { }

  ngOnInit() {
    this.clienteService.getCustomers().subscribe(
      (data: Cliente[]) => this.arrayCustomers = data
    );
  }

onSubmit(f: NgForm) {
this.user.nombre = f.value.nombre;
this.user.apellidoPat = f.value.apellidoPat;
this.user.apellidoMat = f.value.apellidoMat;
this.user.email = f.value.email;
this.user.fechnac = f.value.fechnac;
this.user.fechnac = f.value.cel;
console.log(f);
console.log(this.user);
}

}
