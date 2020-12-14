import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { AlertController, ToastController } from '@ionic/angular';
import { FirebaseService } from '../../services/firebase.service';

@Component({
  selector: 'app-sales',
  templateUrl: './sales.page.html',
  styleUrls: ['./sales.page.scss'],
})
export class SalesPage implements OnInit {
  todoForm: FormGroup;
  Data: any[] = [];

  constructor(public fb: FormBuilder,
              private db: FirebaseService,
              private toast: ToastController
              ) { }

  ngOnInit() {
    this.db.dbState().subscribe((res) => {
      if (res){
        this.db.fetchPendientesVentas().subscribe(item => {
          this.Data = item;
        });
      }
    });
    this.todoForm = this.fb.group({
      Nombre: ['', [Validators.required]],
      Precio: ['', [Validators.required]]
    });
  }

  storeData() {
    this.db.addPendientesVentas(
      this.todoForm.value.Nombre,
      this.todoForm.value.Precio
    ).then((res) => {
      this.todoForm.reset();
    });
  }

  deletePendiente(id){
    this.db.deletePendienteVentas(id).then(async (res) => {
      const toast = await this.toast.create({
        message: 'Artículo eliminado',
        duration: 2500
      });
      toast.present();
    });
    this.actualizar();
  }

  actualizar(){
    this.db.dbState().subscribe((res) => {
      if (res){
        this.db.fetchPendientesVentas().subscribe(item => {
          this.Data = item;
        });
      }
    });
  }

  async alerta(){
    const toast = await this.toast.create({
      message: 'Artículo creado',
      duration: 2500
    });
    this.storeData();
    toast.present();
  }

}
