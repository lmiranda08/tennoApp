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

  resultadoArr: any[] = [];
  textoBuscar = '';
  arma = [];
  Data: any[] = [];
  resultado: any;
  resultadoArcane: any;

  constructor(private db: FirebaseService,
              private firestore: AngularFirestore,
              private toast: ToastController
  ) { }

  ngOnInit(){
    this.db.dbState().subscribe((res) => {
      if (res){
        this.db.fetchPendientesArcanos().subscribe(item => {
          this.Data = item;
        });
        this.getCantidadArcane();
      }
    });
    console.log('mostrar pendientes', this.Data);
  }

  actualizar(){
    this.db.dbState().subscribe((res) => {
      if (res){
        this.db.fetchPendientesArcanos().subscribe(item => {
          this.Data = item;
        });
        this.getCantidadArcane();
      }
    });
  }

  getCantidadArcane(){
    this.db.getPendientesArcane().then( res => {
      this.resultadoArcane = res.rows.item(0).TotalArcane;
    });
  }

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

  EditRecord(record) {
    record.isEdit = true;
    record.EditNombre = record.Nombre;
    record.EditTipo = record.Tipo;
    record.EditComponentes = record.Componentes;
    record.EditFarmeo = record.Farmeo;
    record.EditOtros = record.Otros;
  }


}
