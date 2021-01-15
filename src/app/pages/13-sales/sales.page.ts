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
  data: any[] = [];

  constructor(public fb: FormBuilder,
              private db: FirebaseService,
              private toast: ToastController
              ) { }

  ngOnInit() {
    this.db.dbState().subscribe((res) => {
      if (res){
        this.db.fetchSales().subscribe(item => {
          this.data = item;
        });
      }
    });
    this.todoForm = this.fb.group({
      name: ['', [Validators.required]],
      balance: ['', [Validators.required]]
    });
  }

  storeData() {
    this.db.addSales(
      this.todoForm.value.name,
      this.todoForm.value.balance
    ).then((res) => {
      this.todoForm.reset();
    });
  }

  deleteSales(id){
    this.db.deleteSales(id).then(async (res) => {
      const toast = await this.toast.create({
        message: 'Item deleted',
        duration: 2500
      });
      toast.present();
    });
    this.update();
  }

  update(){
    this.db.dbState().subscribe((res) => {
      if (res){
        this.db.fetchSales().subscribe(item => {
          this.data = item;
        });
      }
    });
  }

  async alert(){
    const toast = await this.toast.create({
      message: 'Item add',
      duration: 2500
    });
    this.storeData();
    toast.present();
  }

}
