import { Component, OnInit } from '@angular/core';
import {Utente} from "../../model/utente";

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.page.html',
  styleUrls: ['./forgot-password.page.scss'],
})
export class ForgotPasswordPage implements OnInit {
  utente: Utente = {
    email: '',
    nickname: '',
    password: ''
  };

  isDisabled: boolean = true;

  constructor() { }

  ngOnInit() {
  }

  setPassword() {

  }


}
