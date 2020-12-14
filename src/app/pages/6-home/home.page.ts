import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../../services/firebase.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  fortuna = [];
  cetus = [];
  deimos = [];
  fisura: any = [];
  tierra = [];

  tier: any = [];
  node: any = [];
  missionType: any = [];
  eta: any = [];
  expiry: any = [];

  constructor(private firebaseService: FirebaseService) { }

  ngOnInit() {
    this.getData();
    this.getFisura();
  }

  async getData(){
    this.firebaseService.getAlertas()
    .subscribe( data => {
      this.fortuna = data['vallisCycle'];
      this.cetus = data['cetusCycle'];
      this.deimos = data['cambionCycle'];
      this.tierra = data['earthCycle'];
    });
  }
  async actualizar(){
    this.getData();
    this.getFisura();
  }

  async getFisura(){
    this.firebaseService.getFisuras()
      .subscribe( data => {
        this.fisura = data;
      });
  }
}
