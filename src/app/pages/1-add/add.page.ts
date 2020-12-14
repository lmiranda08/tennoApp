import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../../services/firebase.service';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { AlertController, ToastController } from '@ionic/angular';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';


export interface TodoData {
  id?: string;
  Nombre?: string;
  Tipo?: string;
  Componentes?: string;
  Farmeo?: string;
  Otros?: string;
}

@Component({
  selector: 'app-add',
  templateUrl: 'add.page.html',
  styleUrls: ['add.page.scss']
})

export class AddPage implements OnInit {
  todoList = [];
  todoData: TodoData;
  todoForm: FormGroup;
  Data: any[] = [];

  constructor(private db: FirebaseService,
              public fb: FormBuilder,
              public alertController: AlertController,
              public toastController: ToastController,
              public formBuilder: FormBuilder,
              private toast: ToastController,
   )
  {
    this.todoData = {} as TodoData;
  }

  ngOnInit() {
    this.db.dbState().subscribe((res) => {
      if (res){
        this.db.fetchPendientes().subscribe(item => {
          this.Data = item;
        });
      }
    });
    this.todoForm = this.fb.group({
      Nombre: ['', [Validators.required]],
      Tipo: ['', [Validators.required]],
      Componentes: [''],
      Farmeo: [''],
      Otros: [''],
    });

  }

  storeData() {
    this.db.addPendientes(
      this.todoForm.value.Nombre,
      this.todoForm.value.Tipo,
      this.todoForm.value.Componentes,
      this.todoForm.value.Farmeo,
      this.todoForm.value.Otros,
    ).then((res) => {
      this.todoForm.reset();
    });
  }

  CreateRecord() {
/*     console.log(this.todoForm.value);
    this.firebaseService.add(this.todoForm.value).then(resp => {
      this.todoForm.reset();
    })
      .catch(error => {
        console.log(error);
      }); */
  }

  async mostrarAlerta() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Creación de Objeto',
      buttons: [
        {
          text: 'Aceptar',
          handler: () => {
            this.storeData();
            this.presentToastWithOptions();
          }
        }
      ]
    });
    await alert.present();
  }

  async presentToastWithOptions() {
    const toast = await this.toastController.create({
      header: 'Notificación',
      message: 'Objeto Creado',
      position: 'bottom',
      buttons: [
      {
          text: 'Hecho',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    toast.present();
  }

  async alerta(){
    const toast = await this.toast.create({
      message: 'Objeto creado',
      duration: 2500
    });
    this.storeData();
    toast.present();
  }

}
