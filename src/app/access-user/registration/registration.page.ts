import { Component, OnInit } from '@angular/core';
import {Utente} from "../../model/utente";

@Component({
  selector: 'app-registration',
  templateUrl: './registration.page.html',
  styleUrls: ['./registration.page.scss'],
})
export class RegistrationPage implements OnInit {
  isDisabled: boolean = true;

  utente: Utente = {
    email: '',
    nickname: '',
    password: ''
  }

  constructor() { }

  ngOnInit() {
  }

  registrazioneUtente() {

  }

}
