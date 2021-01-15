import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../../services/firebase.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-search-add-arcane',
  templateUrl: './search-add-arcane.page.html',
  styleUrls: ['./search-add-arcane.page.scss'],
})
export class SearchAddArcanePage implements OnInit {

  resultArr: any[] = [];
  textSearch = '';
  weapon = [];
  data: any[] = [];
  result: any;
  resultAllArcane: any;

  constructor(private db: FirebaseService,
              private firestore: AngularFirestore,
              private toast: ToastController
  ) { }

  ngOnInit(){
    this.db.dbState().subscribe((res) => {
      if (res){
        this.db.fetchArcanes().subscribe(item => {
          this.data = item;
        });
        this.getQArcane();
      }
    });
    console.log('show pending', this.data);
  }

  update(){
    this.db.dbState().subscribe((res) => {
      if (res){
        this.db.fetchArcanes().subscribe(item => {
          this.data = item;
        });
        this.getQArcane();
      }
    });
  }

  getQArcane(){
    this.db.getQArcane().then( res => {
      this.resultAllArcane = res.rows.item(0).TotalArcane;
    });
  }

  deleteItem(id){
    this.db.deleteItem(id).then(async (res) => {
      const toast = await this.toast.create({
        message: 'Deleted',
        duration: 2500
      });
      toast.present();
    });
    this.update();
  }

  updateItem(recordRow) {
    let record = {};
    record['name'] = recordRow.EditName;
    record['category'] = recordRow.EditCategory;
    record['components'] = recordRow.EditComponent;
    record['farming'] = recordRow.EditFarming;
    record['extra'] = recordRow.EditExtra;
    this.db.updateItems(recordRow.id, record);
    recordRow.isEdit = false;
    this.update();
  }

  search( event ){
    this.textSearch = event.detail.value;
  }

  editRecord(record) {
    record.isEdit = true;
    record.EditName = record.name;
    record.EditCategory = record.category;
    record.EditComponent = record.component;
    record.EditFarming = record.farming;
    record.EditExtra = record.extra;
  }


}
