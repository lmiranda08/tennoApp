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
  fisure: any = [];
  earth = [];

  tier: any = [];
  node: any = [];
  missionType: any = [];
  eta: any = [];
  expiry: any = [];

  constructor(private firebaseService: FirebaseService) { }

  ngOnInit() {
     this.update();
  }

  async getDB(){
    this.firebaseService.getAlert()
    .subscribe( data => {
      this.fortuna = data['vallisCycle'];
      this.cetus = data['cetusCycle'];
      this.deimos = data['cambionCycle'];
      this.earth = data['earthCycle'];
    });
  }

  async update(){
    this.getDB();
    this.getFisure();
  }

  async getFisure(){
    this.firebaseService.getFisure()
      .subscribe( data => {
        this.fisure = data;
      });
  }
}
