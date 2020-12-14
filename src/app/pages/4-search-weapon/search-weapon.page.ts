import { Component, OnInit, ViewChild } from '@angular/core';
import { FirebaseService } from '../../services/firebase.service';
import { FormBuilder } from '@angular/forms';
import { AlertController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-search-weapon',
  templateUrl: './search-weapon.page.html',
  styleUrls: ['./search-weapon.page.scss'],
})
export class SearchWeaponPage implements OnInit {
  details: any = [];
  dataArmas: any = [];
  constructor(public db: FirebaseService
    ) { }

  ngOnInit() {
    setTimeout (() => {
      this.db.getTodasArmas()
      .subscribe( data => {
        this.dataArmas = data;
      });
   }, 1000);
  }

  onSearchChange(e) {
    setTimeout (() => {
      const value = e.detail.value;
      if (value && value.trim() !== '' && value.length >= 2) {
        this.db.buscadorArmas(value).subscribe(result => {
          console.log('busqueda arma', result);
          this.details = result;
        }, err => {
          this.details = [];
        });
      }else{
        this.details = [];
      }
   }, 1000);

  }
}
