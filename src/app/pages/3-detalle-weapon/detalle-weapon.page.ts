import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../../services/firebase.service';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { AlertController, ToastController } from '@ionic/angular';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@Component({
  selector: 'app-detalle-weapon',
  templateUrl: 'detalle-weapon.page.html',
  styleUrls: ['detalle-weapon.page.scss']
})
export class DetalleWeaponPage implements OnInit {

  details: any;
  drops: any;
  todoForm: FormGroup;


  public todoList = [];
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
      farming: ['', [Validators.required]],
      extra: ['', [Validators.required]],
    });
    let index = this.route.snapshot.paramMap.get('index');
    index = index.toLowerCase();
    this.firebaseService.searchWeapon(index)
      .subscribe(result => {
        this.details = result[0];
        console.log('details',this.details);
      }, err => {
      this.details = [];
    });
    this.firebaseService.searchResources(index)
      .subscribe( data => {
        this.drops = data;
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

  async alert(){
    const toast = await this.toastController.create({
      message: 'Item add',
      duration: 2500
    });
    this.storeData();
    toast.present();
  }

}
