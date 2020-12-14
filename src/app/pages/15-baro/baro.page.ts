import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../../services/firebase.service';

@Component({
  selector: 'app-baro',
  templateUrl: './baro.page.html',
  styleUrls: ['./baro.page.scss'],
})
export class BaroPage implements OnInit {

  baro: any = [];
  constructor(private firebaseService: FirebaseService) { }

  ngOnInit() {
    this.getData();
  }

  async getData(){
    this.firebaseService.getBaro()
      .subscribe( data => {
        this.baro = data;
        console.log(data);
      });
  }

}
