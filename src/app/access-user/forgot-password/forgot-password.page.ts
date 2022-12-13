import { Component, OnInit } from '@angular/core';
import {Utente} from "../../model/utente";

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.page.html',
  styleUrls: ['./forgot-password.page.scss'],
})
export class ForgotPasswordPage implements OnInit {
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
