import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {Utente} from "../../model/utente";
import {AlertController} from "@ionic/angular";

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  isDisabled: boolean = false;

  utente: Utente = {
    email: '',
    nickname: '',
    password: ''
  }

  constructor(
    private route: Router,
    private alertController: AlertController) { }

  ngOnInit() {
  }

  async loginUtente() {
    if (this.utente.nickname === "__christopher10__" && this.utente.password === "admin123") {
      // this.route.navigate(['/registration']);
    } else {
      const alert = await this.alertController.create({
        header: 'Attenzione',
        message: 'Le credenziali inserite sono errate',
        buttons: ['OK']
      });

      await alert.present()
    }
  }

}
