import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../../services/firebase.service';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { AlertController, ToastController } from '@ionic/angular';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';


export interface Item {
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
  item: Item;
  todoForm: FormGroup;
  data: any[] = [];

  constructor(private db: FirebaseService,
              public fb: FormBuilder,
              public alertController: AlertController,
              public toastController: ToastController,
              public formBuilder: FormBuilder,
              private toast: ToastController,
   )
  {}

  ngOnInit() {
    this.db.dbState().subscribe((res) => {
      if (res){
        this.db.fetchPending().subscribe(item => {
          this.data = item;
        });
      }
    });
    this.todoForm = this.fb.group({
      name: ['0', [Validators.required]],
      category: ['0', [Validators.required]],
      components: ['0'],
      farming: ['0'],
      extra: ['0'],
    });

  }

  storeData() {
    this.db.addItem(
      this.todoForm.value.Nombre,
      this.todoForm.value.Tipo,
      this.todoForm.value.Componentes,
      this.todoForm.value.Farmeo,
      this.todoForm.value.Otros,
    ).then((res) => {
      this.todoForm.reset();
    });
  }

  async mostrarAlerta() {
    const alert = await this.alertController.create({
      header: 'Add Object',
      buttons: [
        {
          text: 'Ok',
          handler: () => {
            this.storeData();
            this.alert();
          }
        }
      ]
    });
    await alert.present();
  }

  async alert(){
    const toast = await this.toast.create({
      message: 'Object add',
      duration: 2500
    });
    this.storeData();
    toast.present();
  }

}
