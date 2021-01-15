import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../../services/firebase.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-search',
  templateUrl: 'search.page.html',
  styleUrls: ['search.page.scss']
})
export class SearchPage implements OnInit {

  resultArr: any[] = [];
  searchText = '';
  weapon = [];
  data: any[] = [];
  result: any;
  resultPrimary: any;
  resultSecondary: any;
  resultMelee: any;
  resultArch: any;
  resultPets: any;
  resultSentinels: any;
  resultMods: any;
  resultWarframe: any;
  resultArcane: any;

  constructor(private db: FirebaseService,
              private firestore: AngularFirestore,
              private toast: ToastController
  ) { }

  ngOnInit(){
    this.db.dbState().subscribe((res) => {
      if (res){
        this.db.fetchItems().subscribe(item => {
          this.data = item;
        });
        this.getQ();
        this.getQPrimary();
        this.getQSecondary();
        this.getQMelee();
        this.getQWarframe();
        this.getQPets();
        this.getQSentinels();
        this.getQMods();
        this.getQArch();
      }
    });
    console.log('show items', this.data);
  }

  update(){
    this.db.dbState().subscribe((res) => {
      if (res){
        this.db.fetchItems().subscribe(item => {
          this.data = item;
        });
        this.getQ();
        this.getQPrimary();
        this.getQSecondary();
        this.getQMelee();
        this.getQWarframe();
        this.getQPets();
        this.getQSentinels();
        this.getQMods();
        this.getQArch();
      }
    });
  }

  getQ(){
    this.db.getQItems().then( res => {
      this.result = res.rows.item(0).Total;
    });
  }
  getQPrimary(){
    this.db.getQPrimary().then( res => {
      this.resultPrimary = res.rows.item(0).TotalPrimary;
    });
  }
  getQSecondary(){
    this.db.getQSecondary().then( res => {
      this.resultSecondary = res.rows.item(0).TotalSecondary;
    });
  }
  getQMelee(){
    this.db.getQMelee().then( res => {
      this.resultMelee = res.rows.item(0).TotalMelee;
    });
  }
  getQWarframe(){
    this.db.getQWarframe().then( res => {
      this.resultWarframe = res.rows.item(0).TotalWarframe;
    });
  }
  getQPets(){
    this.db.getQPets().then( res => {
      this.resultPets = res.rows.item(0).TotalPets;
    });
  }
  getQSentinels(){
    this.db.getQSentinels().then( res => {
      this.resultSentinels = res.rows.item(0).TotalSentinels;
    });
  }
  getQMods(){
    this.db.getQMods().then( res => {
      this.resultMods = res.rows.item(0).TotalMods;
    });
  }
  getQArch(){
    this.db.getQArch().then( res => {
      this.resultArch = res.rows.item(0).TotalArch;
    });
  }

  deleteItem(id){
    this.db.deleteItem(id).then(async (res) => {
      const toast = await this.toast.create({
        message: 'Item deleted',
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
    record['component'] = recordRow.EditComponent;
    record['farming'] = recordRow.EditFarming;
    record['extra'] = recordRow.EditExtra;
    this.db.updateItems(recordRow.id, record);
    recordRow.isEdit = false;
    this.update();
  }

  search( event ){
    this.searchText = event.detail.value;
  }

  EditRecord(record) {
    record.isEdit = true;
    record.EditName = record.name;
    record.EditCategory = record.category;
    record.EditComponent = record.component;
    record.EditFarming = record.farming;
    record.EditExtra = record.extra;
  }
}
