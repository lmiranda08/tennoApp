import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../../services/firebase.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { ToastController } from '@ionic/angular';


@Component({
  selector: 'app-search-arcane',
  templateUrl: './search-arcane.page.html',
  styleUrls: ['./search-arcane.page.scss'],
})
export class SearchArcanePage implements OnInit {
  details: any = [];
  dbArcanes: any = [];
  constructor(private db: FirebaseService,
              private firestore: AngularFirestore,
              private toast: ToastController) { }

  ngOnInit() {
    this.db.getAllArcanes()
    .subscribe( data => {
      this.dbArcanes = data;
      console.log(this.dbArcanes);
    });
  }

  onSearchChange(e) {
    const value = e.detail.value;
    if (value && value.trim() !== '' && value.length >= 3) {
      this.db.searchArcane(value).subscribe(result => {
        console.log('search arcane', result);
        this.details = result;
      }, err => {
        this.details = [];
      });
    }else{
      this.details = [];
    }
  }
}
