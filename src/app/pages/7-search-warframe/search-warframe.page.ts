import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../../services/firebase.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-search-warframe',
  templateUrl: './search-warframe.page.html',
  styleUrls: ['./search-warframe.page.scss'],
})
export class SearchWarframePage implements OnInit {
  details: any = [];
  dataWarframes: any = [];

  constructor(private db: FirebaseService,
              private firestore: AngularFirestore,
              private toast: ToastController) { }

  ngOnInit() {
    setTimeout (() => {
      this.db.getTodosWarframes()
      .subscribe( data => {
        this.dataWarframes = data;
      });
   }, 1000);

  }

  onSearchChange(e) {
    setTimeout (() => {
      const value = e.detail.value;
      if (value && value.trim() !== '' && value.length >= 2) {
        console.log('entra a buscador');
        this.db.buscadorWarframes(value).subscribe(result => {
          console.log('busqueda warframe', result);
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
