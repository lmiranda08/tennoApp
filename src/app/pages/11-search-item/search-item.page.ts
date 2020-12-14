import { Component, OnInit } from '@angular/core';
import { FirebaseService, SearchItem2 } from '../../services/firebase.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { ToastController } from '@ionic/angular';


@Component({
  selector: 'app-search-item',
  templateUrl: './search-item.page.html',
  styleUrls: ['./search-item.page.scss'],
})
export class SearchItemPage implements OnInit {
  details: any = [];
  private results: SearchItem2[];
  constructor(private db: FirebaseService,
              private firestore: AngularFirestore,
              private toast: ToastController) { }


  ngOnInit() {
  }

  onSearchChange(e) {
    setTimeout (() => {
      const value = e.detail.value;
      if (value && value.trim() !== '' && value.length >= 3) {
        this.db.buscadorItems(value).subscribe(result => {
          console.log('respuesta de resultado en search item page', result);
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