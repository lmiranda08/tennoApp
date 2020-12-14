import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { NavController, AlertController } from '@ionic/angular';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  validations_form: FormGroup;
  errorMessage: string = '';
  successMessage: string = '';

  validation_messages = {
    'email': [
      {type:'required', message: 'Correo es obligatorio'},
      {type:'pattern', message: 'Por favor ingrese un correo válido'},
    ],
    'password': [
      {type: 'required', message: 'Contraseña es obligatoria'},
      {type: 'minLength', message: 'Contraseña debe de mantener mínimo 6 carácteres'},
    ]
  };

  constructor(private authService: AuthService,
              private alertCtrl: AlertController,
              private navCtrl: NavController,
              private formBuilder: FormBuilder,
              private router: Router) { }

  ngOnInit() {
    this.validations_form = this.formBuilder.group({
      email: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
      ])),
      password: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(6)
      ])),
      name: new FormControl('')
    });
  }

  tryRegister( value ) {
    this.authService.registerUser(value).then(
      res => {
        const alertOptions = {
          header: 'Cuenta creada',
          message: 'Correo: ' + value.email,
          buttons: ['Aceptar']
        }
        this.showAlert(alertOptions);
        this.authService.login(value).then(() => {
          this.router.navigate(['menu/home']);
        }).catch(() => {
          const alertOptions = {
            header: 'Error',
            message: 'Error al iniciar sesión',
            buttons: ['Aceptar']
          };
          this.showAlert(alertOptions);
        });
      }, err => {
        const alertOptions = {
          header: 'No se puede registrar',
          message: err.message,
          buttons: ['Aceptar']
        };
        this.showAlert(alertOptions);
      }
    );
  }
  async showAlert(options){
    const alertDialog = await this.alertCtrl.create(options);
    return await alertDialog.present();
  }

}