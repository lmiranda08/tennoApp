import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../../services/firebase.service';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { AlertController, ToastController } from '@ionic/angular';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@Component({
  selector: 'app-detalle-warframe',
  templateUrl: './detalle-warframe.page.html',
  styleUrls: ['./detalle-warframe.page.scss'],
})
export class DetalleWarframePage implements OnInit {

  details: any;
  drops: any;
  todoForm: FormGroup;
  tipoWarframe: any;

  public todoList = [];
  constructor(private firebaseService: FirebaseService,
              private route: ActivatedRoute,
              public fb: FormBuilder,
              public alertController: AlertController,
              public toastController: ToastController
    ) {}

  ngOnInit() {
    this.todoForm = this.fb.group({
      Nombre: ['', [Validators.required]],
      Tipo: ['', [Validators.required]],
      Componentes: ['', [Validators.required]],
      Farmeo: ['', [Validators.required]],
      Otros: ['', [Validators.required]],
    });
    this.tipoWarframe = 'Warframes';
    let index = this.route.snapshot.paramMap.get('index');
    index = index.toLowerCase();
    this.firebaseService.buscadorWarframes(index)
      .subscribe(result => {
        this.details = result[0];
      }, err => {
      this.details = [];
    });
    this.firebaseService.buscadorRecursos(index)
    .subscribe( data => {
      this.drops = data;
    });
  }

  storeData() {
    this.firebaseService.addPendientes(
      this.todoForm.value.Nombre,
      this.todoForm.value.Tipo,
      0,
      0,
      0
    ).then((res) => {
/*       this.todoForm.reset(); */
    });
  }

  async alerta(){
    const toast = await this.toastController.create({
      message: 'Objeto creado',
      duration: 2500
    });
    this.storeData();
    toast.present();
  }

}
