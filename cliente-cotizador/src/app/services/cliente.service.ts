import { HttpClient } from '@angular/common/http';
import { Cliente } from '../common/cliente.model';
import { Injectable } from '@angular/core';

@Injectable()
export class ClienteService {
  private urlGet = 'http://localhost:8090/api/v1/cliente/fetch';

  constructor (private clienteHttp: HttpClient) {}

  getCustomers() {
    return this.clienteHttp.get<Cliente[]>(this.urlGet);
  }
}
