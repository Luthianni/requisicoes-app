import { AngularFirestore } from '@angular/fire/compat/firestore/firestore';
import { Funcionario } from './../models/funcionario.model';
import { Injectable } from '@angular/core';
import { ServiceFirebase } from '../core/iservicefirebase.service';

@Injectable({
  providedIn: 'root'
})
export class FuncionarioService extends ServiceFirebase<Funcionario>{

  constructor(firestore: AngularFirestore) {
    super(Funcionario, firestore, 'funcionarios');
   }
}
