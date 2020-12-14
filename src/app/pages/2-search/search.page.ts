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

  resultadoArr: any[] = [];
  textoBuscar = '';
  arma = [];
  Data: any[] = [];
  resultado: any;
  resultadoPrimarias: any;
  resultadoSecundarias: any;
  resultadoMelee: any;
  resultadoArch: any;
  resultadoPets: any;
  resultadoSentinels: any;
  resultadoMods: any;
  resultadoWarframe: any;
  resultadoArcane: any;

  constructor(private db: FirebaseService,
              private firestore: AngularFirestore,
              private toast: ToastController
  ) { }

  ngOnInit(){
    this.db.dbState().subscribe((res) => {
      if (res){
        this.db.fetchPendientes().subscribe(item => {
          this.Data = item;
        });
        this.getCantidadTotal();
        this.getCantidadPrimarias();
        this.getCantidadSecundarias();
        this.getCantidadMelee();
        this.getCantidadWarframe();
        this.getCantidadPets();
        this.getCantidadSentinels();
        this.getCantidadMods();
        this.getCantidadArch();
/*         this.getCantidadArcane(); */
      }
    });
    console.log('mostrar pendientes', this.Data);
  }

  actualizar(){
    this.db.dbState().subscribe((res) => {
      if (res){
        this.db.fetchPendientes().subscribe(item => {
          this.Data = item;
        });
        this.getCantidadTotal();
        this.getCantidadPrimarias();
        this.getCantidadSecundarias();
        this.getCantidadMelee();
        this.getCantidadWarframe();
        this.getCantidadPets();
        this.getCantidadSentinels();
        this.getCantidadMods();
        this.getCantidadArch();
/*         this.getCantidadArcane(); */
      }
    });
  }

  getCantidadTotal(){
    this.db.getTotalPendientes().then( res => {
      this.resultado = res.rows.item(0).Total;
    });
  }
  getCantidadPrimarias(){
    this.db.getPendientesPrimarias().then( res => {
      this.resultadoPrimarias = res.rows.item(0).TotalPrimaria;
    });
  }
  getCantidadSecundarias(){
    this.db.getPendientesSecundarias().then( res => {
      this.resultadoSecundarias = res.rows.item(0).TotalSecundaria;
    });
  }
  getCantidadMelee(){
    this.db.getPendientesMelee().then( res => {
      this.resultadoMelee = res.rows.item(0).TotalMelee;
    });
  }
  getCantidadWarframe(){
    this.db.getPendientesWarframe().then( res => {
      this.resultadoWarframe = res.rows.item(0).TotalWarframe;
    });
  }
  getCantidadPets(){
    this.db.getPendientesPets().then( res => {
      this.resultadoPets = res.rows.item(0).TotalCompañero;
    });
  }
  getCantidadSentinels(){
    this.db.getPendientesSentinels().then( res => {
      this.resultadoSentinels = res.rows.item(0).TotalSentinels;
    });
  }
  getCantidadMods(){
    this.db.getPendientesMods().then( res => {
      this.resultadoMods = res.rows.item(0).TotalMods;
    });
  }
  getCantidadArch(){
    this.db.getPendientesArch().then( res => {
      this.resultadoArch = res.rows.item(0).TotalArch;
    });
  }
/*   getCantidadArcane(){
    this.db.getPendientesArcane().then( res => {
      this.resultadoArcane = res.rows.item(0).TotalArcane;
    });
  } */

  deletePendiente(id){
    this.db.deletePendiente(id).then(async (res) => {
      const toast = await this.toast.create({
        message: 'Pendiente eliminado',
        duration: 2500
      });
      toast.present();
    });
    this.actualizar();
  }

  updatePendiente(recordRow) {
    let record = {};
    record['Nombre'] = recordRow.EditNombre;
    record['Tipo'] = recordRow.EditTipo;
    record['Componentes'] = recordRow.EditComponentes;
    record['Farmeo'] = recordRow.EditFarmeo;
    record['Otros'] = recordRow.EditOtros;
    this.db.updatePendiente(recordRow.id, record);
    recordRow.isEdit = false;
    this.actualizar();
  }

  buscador( event ){
    this.textoBuscar = event.detail.value;
  }

/*   onSearchChange(e) {
    const value = e.detail.value;
    this.db.buscadorArmas(value).subscribe(result => {
      this.arma = [result];
    }, err => {
      this.arma = [];
    });
  } */

  EditRecord(record) {
    record.isEdit = true;
    record.EditNombre = record.Nombre;
    record.EditTipo = record.Tipo;
    record.EditComponentes = record.Componentes;
    record.EditFarmeo = record.Farmeo;
    record.EditOtros = record.Otros;
  }

/*   updatePendiente(){
    this.db.updatePendiente(this.id, this.editForm.value)
    .then( (res) => {
      console.log(res)
      this.router.navigate(['/home']);
    })
  } */


/*   async mostrar(){
    this.resultadoArr = [];
    setTimeout(() => {
      this.firebaseService.get().subscribe(data => {
        this.resultadoArr = data;
        console.log('resultadoArr' , this.resultadoArr);
        return this.resultadoArr;
      });
    }, 1500);
  }
 */


/*   RemoveRecord(rowID) {
    this.db.delete_todo(rowID);
  }
 */

/*   UpdateRecord(recordRow) {
    let record = {};
    record['Nombre'] = recordRow.EditNombre;
    record['Tipo'] = recordRow.EditTipo;
    record['Componentes'] = recordRow.EditComponentes;
    record['Farmeo'] = recordRow.EditFarmeo;
    record['Otros'] = recordRow.EditOtros;
    this.db.update_todo(recordRow.id, record);
    recordRow.isEdit = false;
  } */



}
