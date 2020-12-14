import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Platform } from '@ionic/angular';
import { TodoData } from '../pages/1-add/add.page';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, filter } from 'rxjs/operators';
import { Pendientes } from './pendientes';
import { AuthService } from './auth.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { BehaviorSubject, Observable } from 'rxjs';
import { SQLitePorter } from '@ionic-native/sqlite-porter/ngx';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';
import { Ventas } from './ventas';
import { PendientesArcanos } from './pendienteArcanos';


export class SearchItem2 {
  constructor(
    public name: string,
    public category: string,
    public type: string,
    public wikiaThumbnail: string,
    public description: string,
    public rarity: string,
    public tradable: string,
    public compatName: string,
    public components: string,
    public levelStats: string
  ) {}
}

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  private storage: SQLiteObject;
  listaPendientes = new BehaviorSubject([]);
  listaPendientesArcanos = new BehaviorSubject([]);
  listaVentas = new BehaviorSubject([]);
  private isDbReady: BehaviorSubject<boolean> = new BehaviorSubject(false);
  results2: SearchItem2[];

  collectionName = 'Warframe';
  baseUrlArmas = 'https://api.warframestat.us/weapons';
  baseUrlArmasSearch = 'https://api.warframestat.us/weapons/search';
  baseUrlDrops = 'https://api.warframestat.us/drops/search';
  baseUrlAlerts = 'https://api.warframestat.us/ps4';
  baseURLFisura = 'https://api.warframestat.us/ps4/fissures';
  baseURLWaframes = 'https://api.warframestat.us/warframes';
  baseURLWaframesSearch = 'https://api.warframestat.us/warframes/search';
  baseURLArcanes = 'https://api.warframestat.us/arcanes';
  baseURLArcanesSearch = 'https://api.warframestat.us/arcanes/search';
  baseURLItemSearch = 'https://api.warframestat.us/items/search';
  baseURLMarket = 'https://api.warframe.market/v1/items';
  baseURLBaro = 'https://api.warframestat.us/ps4/voidTrader';

  todo: any [] = [];

  name: string;
  wikiaThumbnail: string;
  category: string;
  description: string;
  rarity: string;
  tradable: string;
  compatName: string;
  components: string;
  levelStats: string;

/*   dataCollection: AngularFirestoreCollection<TodoData>;
  data: Observable<TodoData[]>; */
  uid: string;

  constructor(private firestore: AngularFirestore,
              private platform: Platform,
              private http: HttpClient,
              private authService: AuthService,
              private afAuth: AngularFireAuth,
              private sqlite: SQLite,
              private httpClient: HttpClient,
              private sqlPorter: SQLitePorter,
    ) {
      this.platform.ready().then(() => {
        this.sqlite.create({
          name: 'pendientes.db',
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

  fetchPendientes(): Observable<Pendientes[]> {
    return this.listaPendientes.asObservable();
  }

  fetchPendientesVentas(): Observable<Ventas[]> {
    return this.listaVentas.asObservable();
  }
  fetchPendientesArcanos(): Observable<PendientesArcanos[]> {
    return this.listaPendientesArcanos.asObservable();
  }

  // Render fake data
  getFakeData() {
    this.httpClient.get(
      'assets/dump.sql',
      {responseType: 'text'}
      ).subscribe(data => {
        this.sqlPorter.importSqlToDb(this.storage, data)
          .then(_ => {
            this.getPendientes();
            this.getPendientesVentas();
            this.getPendientesArcanos();
            this.getTotalPendientes();
            this.getPendientesArcane();
            this.isDbReady.next(true);
          })
          .catch(error => console.error(error));
        });
  }
  // Get list
  getPendientes(){
    return this.storage.executeSql('SELECT * FROM Pendientes where Tipo <> "Arcanes" ORDER BY Nombre', []).then(res => {
      const items: Pendientes[] = [];
      if (res.rows.length > 0) {
        for (let i = 0; i < res.rows.length; i++) {
          items.push({
            id: res.rows.item(i).id,
            Nombre: res.rows.item(i).Nombre,
            Tipo: res.rows.item(i).Tipo,
            Componentes: res.rows.item(i).Componentes,
            Farmeo: res.rows.item(i).Farmeo,
            Otros: res.rows.item(i).Otros
            });
        }
      }
      this.listaPendientes.next(items);
    });
  }
  // Get Pendientes Arcanos
  getPendientesArcanos(){
    return this.storage.executeSql('SELECT * FROM Pendientes where Tipo = "Arcanes" ORDER BY Nombre', []).then(res => {
      const items: PendientesArcanos[] = [];
      if (res.rows.length > 0) {
        for (let i = 0; i < res.rows.length; i++) {
          items.push({
            id: res.rows.item(i).id,
            Nombre: res.rows.item(i).Nombre,
            Tipo: res.rows.item(i).Tipo,
            Componentes: res.rows.item(i).Componentes,
            Farmeo: res.rows.item(i).Farmeo,
            Otros: res.rows.item(i).Otros
            });
        }
      }
      this.listaPendientesArcanos.next(items);
    });
  }
  // Get list Ventas
  getPendientesVentas(){
    return this.storage.executeSql('SELECT * FROM Ventas ORDER BY Nombre', []).then(res => {
      const items: Ventas[] = [];
      if (res.rows.length > 0) {
        for (let i = 0; i < res.rows.length; i++) {
          items.push({
            id: res.rows.item(i).id,
            Nombre: res.rows.item(i).Nombre,
            Precio: res.rows.item(i).Precio
            });
        }
      }
      this.listaVentas.next(items);
    });
  }
  getTotalPendientes(){
    return this.storage.executeSql('SELECT COUNT(*) as Total FROM PENDIENTES where Tipo <> "Arcanes"', []);
  }
  getPendientesPrimarias(){
    return this.storage.executeSql('SELECT COUNT(*) as TotalPrimaria FROM PENDIENTES where Tipo = "Primary" ', []);
  }
  getPendientesSecundarias(){
    return this.storage.executeSql('SELECT COUNT(*) as TotalSecundaria FROM PENDIENTES where Tipo = "Secondary" ', []);
  }
  getPendientesMelee(){
    return this.storage.executeSql('SELECT COUNT(*) as TotalMelee FROM PENDIENTES where Tipo = "Melee" ', []);
  }
  getPendientesWarframe(){
    return this.storage.executeSql('SELECT COUNT(*) as TotalWarframe FROM PENDIENTES where Tipo = "Warframes" ', []);
  }
  getPendientesPets(){
    return this.storage.executeSql('SELECT COUNT(*) as TotalCompañero FROM PENDIENTES where Tipo = "Pets" ', []);
  }
  getPendientesSentinels(){
    return this.storage.executeSql('SELECT COUNT(*) as TotalSentinels FROM PENDIENTES where Tipo = "Sentinels" ', []);
  }
  getPendientesMods(){
    return this.storage.executeSql('SELECT COUNT(*) as TotalMods FROM PENDIENTES where Tipo = "Mods" ', []);
  }
  getPendientesArch(){
    return this.storage.executeSql('SELECT COUNT(*) as TotalArch FROM PENDIENTES where Tipo = "Arch" ', []);
  }
  getPendientesArcane(){
    return this.storage.executeSql('SELECT COUNT(*) as TotalArcane FROM PENDIENTES where Tipo = "Arcanes" ', []);
  }
  // Add
  addPendientes(Nombre, Tipo, Componentes, Farmeo, Otros) {
    const data = [Nombre, Tipo, Componentes, Farmeo, Otros];
    return this.storage.executeSql('INSERT INTO Pendientes (Nombre, Tipo, Componentes, Farmeo, Otros) VALUES (?, ?, ?, ?, ?)', data)
    .then(res => {
      this.getPendientes();
    });
  }
  // Add Ventas
  addPendientesVentas(Nombre, Precio) {
    const data2 = [Nombre, Precio];
    return this.storage.executeSql('INSERT INTO Ventas (Nombre, Precio) VALUES (?, ?)', data2)
    .then(res => {
      this.getPendientesVentas();
    });
  }
  // Get single object
  getPendiente(id): Promise<Pendientes> {
    return this.storage.executeSql('SELECT * FROM Pendientes WHERE id = ?', [id]).then(res => {
      return {
        id: res.rows.item(0).id,
        Nombre: res.rows.item(0).Nombre,
        Tipo: res.rows.item(0).Tipo,
        Componentes: res.rows.item(0).Componentes,
        Farmeo: res.rows.item(0).Farmeo,
        Otros: res.rows.item(0).Otros,
        Fecha: res.rows.item(0).Fecha
      };
    });
  }
  // Get single object Ventas
  getPendienteVentas(id): Promise<Ventas> {
    return this.storage.executeSql('SELECT * FROM Ventas WHERE id = ?', [id]).then(res => {
      return {
        id: res.rows.item(0).id,
        Nombre: res.rows.item(0).Nombre,
        Precio: res.rows.item(0).Precio
      };
    });
  }
  // Update
  updatePendiente(id, pendiente) {
    const data = [pendiente.Nombre, pendiente.Tipo, pendiente.Componentes, pendiente.Farmeo, pendiente.Otros];
    return this.storage.executeSql(`
    UPDATE Pendientes SET Nombre = ?, Tipo = ?, Componentes = ?,
    Farmeo = ?, Otros = ? WHERE id = ${id}`, data)
    .then( data => {
      this.getPendientes();
    });
  }
  // Update Ventas
  updatePendienteVentas(id, pendiente) {
    const data = [pendiente.Nombre, pendiente.Precio];
    return this.storage.executeSql(`
    UPDATE Ventas SET Nombre = ?, Precio = ? WHERE id = ${id}`, data)
    .then( data => {
      this.getPendientesVentas();
    });
  }
  // Delete
  deletePendiente(id) {
    return this.storage.executeSql('DELETE FROM Pendientes WHERE id = ?', [id])
    .then(_ => {
      this.getPendientes();
    });
  }
  // Delete Ventas
  deletePendienteVentas(id) {
    return this.storage.executeSql('DELETE FROM Ventas WHERE id = ?', [id])
    .then(_ => {
      this.getPendientesVentas();
    });
  }
  buscadorArmas(search) {
    return this.http.get(`${this.baseUrlArmasSearch}/${search}`).pipe(
      map( arma => {
        return arma;
      })
    );
  }
  buscadorWarframes(search) {
    return this.http.get(`${this.baseURLWaframesSearch}/${search}`).pipe(
      map( warframe => {
        return warframe;
      })
    );
  }
/*   buscadorMarket(search) {
    return this.http.get(`${this.baseURLMarket}/${search}`).pipe(
      map(market => {
        return market;
      })
    );
  } */
  buscadorArcanos(search) {
    return this.http.get(`${this.baseURLArcanesSearch}/${search}`).pipe(
      map( arcane => {
        return arcane;
      })
    );
  }

  buscadorItems(search){
    return this.http.get(`${this.baseURLItemSearch}/${search}`).pipe(
      map( result => {
        return result;
      })
    );
  }
  buscadorRecursos(search) {
    return this.http.get(`${this.baseUrlDrops}/${search}`).pipe(
      map(data => {
        return data;
        })
    );
  }
  getAlertas(){
    return this.http.get(this.baseUrlAlerts).pipe(
      map( data => {
        return data;
      })
    );
  }
  getBaro(){
    return this.http.get(this.baseURLBaro).pipe(
      map( data => {
        return data;
      })
    );
  }
  getFisuras(){
    return this.http.get(this.baseURLFisura).pipe(
      map( data => {
        return data;
      })
    );
  }
  getTodasArmas(){
    return this.http.get(this.baseUrlArmas).pipe(
      map( todasArmas => {
        return todasArmas;
      })
    );
  }
  getTodosWarframes(){
    return this.http.get(this.baseURLWaframes).pipe(
      map( todasWarframes => {
        return todasWarframes;
      })
    );
  }
  getTodosArcanes(){
    return this.http.get(this.baseURLArcanes).pipe(
      map( todosArcanos => {
        return todosArcanos;
      })
    );
  }
  create_todo(record){
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
  }
}
