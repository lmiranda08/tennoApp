import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../../services/firebase.service';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { AlertController, ToastController } from '@ionic/angular';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@Component({
  selector: 'app-detalle-item',
  templateUrl: './detalle-item.page.html',
  styleUrls: ['./detalle-item.page.scss'],
})
export class DetalleItemPage implements OnInit {
  details: any;
  componentsDrops: any;
  todoForm: FormGroup;
  constructor(private firebaseService: FirebaseService,
              private route: ActivatedRoute,
              public fb: FormBuilder,
              public alertController: AlertController,
              public toastController: ToastController
  ) {}

  ngOnInit() {
    this.todoForm = this.fb.group({
      name: ['', [Validators.required]],
      category: ['', [Validators.required]],
      component: ['', [Validators.required]],
      farmimg: ['', [Validators.required]],
      extra: ['', [Validators.required]],
    });
    let index = this.route.snapshot.paramMap.get('index');
    index = index.toLowerCase();
    this.firebaseService.searchItems(index)
      .subscribe(result => {
        this.details = result[0];
      }, err => {
      this.details = [];
    });
    this.firebaseService.searchResources(index)
    .subscribe( data => {
      this.componentsDrops = data;
    });
  }

  storeData() {
    this.firebaseService.addItem(
      this.todoForm.value.name,
      this.todoForm.value.category,
      0,
      0,
      0
    ).then((res) => {
/*       this.todoForm.reset(); */
    });
  }

  async alerta(){
    const toast = await this.toastController.create({
      message: 'Item Add',
      duration: 2500
    });
    this.storeData();
    toast.present();
  }

}
