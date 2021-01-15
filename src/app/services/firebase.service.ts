import { Injectable, Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Platform } from '@ionic/angular';
import { Item } from '../pages/1-add/add.page';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, filter } from 'rxjs/operators';
import { Items } from './items';
import { AuthService } from './auth.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { BehaviorSubject, Observable } from 'rxjs';
import { SQLitePorter } from '@ionic-native/sqlite-porter/ngx';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';
import { Sales } from './sales';
import { Arcanes } from './arcanes';


export class SearchItem2 {
  constructor() {}
}

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  private storage: SQLiteObject;
  listItems = new BehaviorSubject([]);
  listArcanes = new BehaviorSubject([]);
  listSales = new BehaviorSubject([]);
  private isDbReady: BehaviorSubject<boolean> = new BehaviorSubject(false);
  results2: SearchItem2[];

  collectionName = 'Warframe';
  UrlWeapons = 'https://api.warframestat.us/weapons';
  UrlWeaponsSearch = 'https://api.warframestat.us/weapons/search';
  UrlDrops = 'https://api.warframestat.us/drops/search';
  UrlAlerts = 'https://api.warframestat.us/ps4';
  URLFisure = 'https://api.warframestat.us/ps4/fissures';
  URLWaframes = 'https://api.warframestat.us/warframes';
  URLWaframesSearch = 'https://api.warframestat.us/warframes/search';
  URLArcanes = 'https://api.warframestat.us/arcanes';
  URLArcanesSearch = 'https://api.warframestat.us/arcanes/search';
  URLItemSearch = 'https://api.warframestat.us/items/search';
  URLMarket = 'https://api.warframe.market/v1/items';
  URLBaro = 'https://api.warframestat.us/ps4/voidTrader';
  todo: any [] = [];
  uid: string;

  constructor(private firestore: AngularFirestore,
              private platform: Platform,
              private http: HttpClient,
              private sqlite: SQLite,
              private httpClient: HttpClient,
              private sqlPorter: SQLitePorter,
    ) {
      this.platform.ready().then(() => {
        this.sqlite.create({
          name: 'items.db',
          location: 'default'
        })
        .then((db: SQLiteObject) => {
            this.storage = db;
            this.getFakeData();
        });
      });
     }

  dbState() {
    return this.isDbReady.asObservable();
  }

  fetchItems(): Observable<Items[]> {
    return this.listItems.asObservable();
  }

  fetchSales(): Observable<Sales[]> {
    return this.listSales.asObservable();
  }
  fetchArcanes(): Observable<Arcanes[]> {
    return this.listArcanes.asObservable();
  }

  // Render fake data
  getFakeData() {
    this.httpClient.get(
      'assets/dump.sql',
      {responseType: 'text'}
      ).subscribe(data => {
        this.sqlPorter.importSqlToDb(this.storage, data)
          .then(_ => {
            this.getItems();
            this.getSales();
            this.getArcanes();
            this.getQItems();
            this.getQArcane();
            this.isDbReady.next(true);
          })
          .catch(error => console.error(error));
        });
  }
  // Get Items
  getItems(){
    return this.storage.executeSql('SELECT * FROM Items where Category <> "Arcanes" ORDER BY name', []).then(res => {
      const items: Items[] = [];
      if (res.rows.length > 0) {
        for (let i = 0; i < res.rows.length; i++) {
          items.push({
            id: res.rows.item(i).id,
            name: res.rows.item(i).name,
            category: res.rows.item(i).category,
            component: res.rows.item(i).component,
            farming: res.rows.item(i).farming,
            extra: res.rows.item(i).extra
            });
        }
      }
      this.listItems.next(items);
    });
  }
  // Get Arcanos
  getArcanes(){
    return this.storage.executeSql('SELECT * FROM Items where Caegory = "Arcanes" ORDER BY name', []).then(res => {
      const items: Arcanes[] = [];
      if (res.rows.length > 0) {
        for (let i = 0; i < res.rows.length; i++) {
          items.push({
            id: res.rows.item(i).id,
            name: res.rows.item(i).name,
            category: res.rows.item(i).category,
            component: res.rows.item(i).component,
            farming: res.rows.item(i).farming,
            extra: res.rows.item(i).extra
            });
        }
      }
      this.listArcanes.next(items);
    });
  }
  // Get list Ventas
  getSales(){
    return this.storage.executeSql('SELECT * FROM Sales ORDER BY name', []).then(res => {
      const items: Sales[] = [];
      if (res.rows.length > 0) {
        for (let i = 0; i < res.rows.length; i++) {
          items.push({
            id: res.rows.item(i).id,
            name: res.rows.item(i).name,
            balance: res.rows.item(i).balance
            });
        }
      }
      this.listSales.next(items);
    });
  }
  getQItems(){
    return this.storage.executeSql('SELECT COUNT(*) as Total FROM Items where Category <> "Arcanes"', []);
  }
  getQPrimary(){
    return this.storage.executeSql('SELECT COUNT(*) as TotalPrimary FROM Items where Category = "Primary" ', []);
  }
  getQSecondary(){
    return this.storage.executeSql('SELECT COUNT(*) as TotalSecondary FROM Items where Category = "Secondary" ', []);
  }
  getQMelee(){
    return this.storage.executeSql('SELECT COUNT(*) as TotalMelee FROM Items where Category = "Melee" ', []);
  }
  getQWarframe(){
    return this.storage.executeSql('SELECT COUNT(*) as TotalWarframe FROM Items where Category = "Warframes" ', []);
  }
  getQPets(){
    return this.storage.executeSql('SELECT COUNT(*) as TotalPets FROM Items where Category = "Pets" ', []);
  }
  getQSentinels(){
    return this.storage.executeSql('SELECT COUNT(*) as TotalSentinels FROM Items where Category = "Sentinels" ', []);
  }
  getQMods(){
    return this.storage.executeSql('SELECT COUNT(*) as TotalMods FROM Items where Category = "Mods" ', []);
  }
  getQArch(){
    return this.storage.executeSql('SELECT COUNT(*) as TotalArch FROM Items where Category = "Arch" ', []);
  }
  getQArcane(){
    return this.storage.executeSql('SELECT COUNT(*) as TotalArcane FROM Items where Category = "Arcanes" ', []);
  }
  // Add
  addItem(name, category, component, farming, extra) {
    const data = [name, category, component, farming, extra];
    return this.storage.executeSql('INSERT INTO Items (Nombre, Category, Componentes, Farmeo, Otros) VALUES (?, ?, ?, ?, ?)', data)
    .then(res => {
      this.getItems();
    });
  }
  // Add Sales
  addSales(name, balance) {
    const data2 = [name, balance];
    return this.storage.executeSql('INSERT INTO Sales (name,balance) VALUES (?, ?)', data2)
    .then(res => {
      this.getSales();
    });
  }
  // Get single item
  getSingleItem(id): Promise<Items> {
    return this.storage.executeSql('SELECT * FROM Items WHERE id = ?', [id]).then(res => {
      return {
        id: res.rows.item(0).id,
        name: res.rows.item(0).name,
        category: res.rows.item(0).category,
        component: res.rows.item(0).component,
        farming: res.rows.item(0).farming,
        extra: res.rows.item(0).extra,
      };
    });
  }
  // Get single sale
  getSingleSale(id): Promise<Sales> {
    return this.storage.executeSql('SELECT * FROM Sales WHERE id = ?', [id]).then(res => {
      return {
        id: res.rows.item(0).id,
        name: res.rows.item(0).name,
        balance: res.rows.item(0).balance
      };
    });
  }
  // Update
  updateItems(id, item) {
    const data = [item.name, item.category, item.component, item.farming, item.extra];
    return this.storage.executeSql(`
    UPDATE Items SET name = ?, category = ?, component = ?,
    farming = ?, extra = ? WHERE id = ${id}`, data)
    .then( data => {
      this.getItems();
    });
  }
  // Update Sales
  updateSales(id, sales) {
    const data = [sales.name, sales.balance];
    return this.storage.executeSql(`
    UPDATE Sales SET name = ?, balance = ? WHERE id = ${id}`, data)
    .then( data => {
      this.getSales();
    });
  }
  // Delete
  deleteItem(id) {
    return this.storage.executeSql('DELETE FROM Items WHERE id = ?', [id])
    .then(_ => {
      this.getItems();
    });
  }
  // Delete Ventas
  deleteSales(id) {
    return this.storage.executeSql('DELETE FROM Sales WHERE id = ?', [id])
    .then(_ => {
      this.getSales();
    });
  }

  searchWeapon(search) {
    return this.http.get(`${this.UrlWeaponsSearch}/${search}`).pipe(
      map( (resp:any[]) => 
        resp.map( item => ({
          name: item.name,
          category: item.category,
          disposition: item.disposition,
          wikiaThumbnail: item.wikiaThumbnail,
          components: item.components
          }) 
        )
      )
    );
  }
  searchWarframe(search) {
    return this.http.get(`${this.URLWaframesSearch}/${search}`).pipe(
      map( (resp:any[]) => 
        resp.map( item => ({
          name: item.name,
          description: item.description,
          wikiaThumbnail: item.wikiaThumbnail,
          components: item.components
          }) 
        )
      )
    );
  }
  searchArcane(search) {
    return this.http.get(`${this.URLArcanesSearch}/${search}`).pipe(
      map( arcane => {
        return arcane;
      })
    );
  }

  searchItems(search){
    return this.http.get(`${this.URLItemSearch}/${search}`)
    .pipe( 
      map( (resp:any[]) => 
          resp.map( item => ({name: item.name, 
                              category: item.category, 
                              img: item.wikiaThumbnail,
                              description: item.description,
                              rarity: item.rarity,
                              tradable: item.tradable,
                              compat: item.compatName,
                              levelStats: item.levelStats,
                            })
        )
      )
     );
  }
  searchResources(search) {
    return this.http.get(`${this.UrlDrops}/${search}`).pipe(
      map( resources => {
        return resources;
        })
    );
  }
  getAlert(){
    return this.http.get(this.UrlAlerts).pipe(
      map( data => {
        return data;
      })
    );
  }
  getBaro(){
    return this.http.get(this.URLBaro).pipe(
      map( data => {
        return data;
      })
    );
  }
  getFisure(){
    return this.http.get(this.URLFisure).pipe(
      map( data => {
        return data;
      })
    );
  }
  getAllWeapons(){
    return this.http.get(this.UrlWeapons).pipe(
      map( (resp:any[]) => 
        resp.map( item => ({
          name: item.name,
          category: item.category,
          disposition: item.disposition,
          wikiaThumbnail: item.wikiaThumbnail,
          components: item.components
          }) 
        )
      )
    );
  }
  getAllWarframe(){
    return this.http.get(this.URLWaframes).pipe(
      map( (resp:any[]) => 
        resp.map( item => ({
          name: item.name,
          description: item.description,
          wikiaThumbnail: item.wikiaThumbnail,
          components: item.components
          }) 
        )
      )
    );
  }
  getAllArcanes(){
    return this.http.get(this.URLArcanes).pipe(
      map( arcane => {
        return arcane;
      })
    );
  }
/*   create_todo(record){
    return this.firestore.collection(this.collectionName).add(record);
  }
  read_todo(){
    return this.firestore.collection(this.collectionName).snapshotChanges();
  }
  update_todo(recordId, record){
    this.firestore.doc(this.collectionName + '/' + recordId).update(record);
  }
  delete_todo(id){
    this.firestore.doc(this.collectionName + '/' + id).delete();
  }
  buscar_todo(){
    return this.firestore.collection(this.collectionName).snapshotChanges();
  } */
}
