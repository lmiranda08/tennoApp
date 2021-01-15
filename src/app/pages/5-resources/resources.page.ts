import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../../services/firebase.service';

@Component({
  selector: 'app-resources',
  templateUrl: './resources.page.html',
  styleUrls: ['./resources.page.scss'],
})
export class ResourcesPage implements OnInit {
  details: any = [];
  constructor(private firebaseService: FirebaseService) { }

  ngOnInit() {
  }

  onSearchChange(e) {
    setTimeout (() => {
      const value = e.detail.value;
      if (value && value.trim() !== '' && value.length >= 3) {
        this.firebaseService.searchResources(value).subscribe(result => {
          console.log('search resources', result);
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
