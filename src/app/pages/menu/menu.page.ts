import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router, RouterEvent } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import { AuthService } from '../../services/auth.service';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  email: string;
  uid: string;
  docId: string;
  nombre: string;
  image: string;

  direcciones = [
    {
      title: 'Inicio',
      url: '/menu/home',
      icon: 'home-outline',
      src: ''
    },
    {
      title: 'Agregar',
      url: '/menu/add',
      icon: 'arrow-forward-circle-outline',
      src: ''
    },
    {
      title: 'Buscar',
      url: '/menu/search',
      icon: 'arrow-forward-circle-outline',
      src: ''
    },
    {
      title: 'Arcanos Pendientes',
      url: '/menu/search-add-arcane',
      icon: 'arrow-forward-circle-outline',
      src: ''
    },
    {
      title: 'Warframe',
      url: '/menu/search-warframe',
      icon: 'arrow-forward-circle-outline',
      src: ''
    },
    {
      title: 'Armas',
      url: '/menu/search-weapon',
      icon: 'arrow-forward-circle-outline',
      src: ''
    },
    {
      title: 'Arcanos',
      url: '/menu/search-arcane',
      icon: 'arrow-forward-circle-outline',
      src: ''
    },
    {
      title: 'Items',
      url: '/menu/search-item',
      icon: 'arrow-forward-circle-outline',
      src: ''
    },
    {
      title: 'Recursos',
      url: '/menu/resources',
      icon: 'arrow-forward-circle-outline',
      src: ''
    },
    {
      title: "Baro Ki'Teer",
      url: '/menu/baro',
      icon: 'arrow-forward-circle-outline',
      src: ''
    },
    {
      title: 'Ventas',
      url: '/menu/sales',
      icon: 'arrow-forward-circle-outline',
      src: ''
    },
    {
      title: 'Mercado',
      url: '/menu/modal',
      icon: 'arrow-forward-circle-outline',
      src: ''
    },
    {
      title: 'Extras',
      url: '/menu/extras',
      icon: 'arrow-forward-circle-outline',
      src: ''
    }
  ];
  profile = [
    {
      title: 'Perfil',
      url: '/menu/profile',
      icon: 'person-outline',
      src: ''
    }
  ];

  selectPath = '';

  constructor(private auth: AuthService,
              private router: Router,
              private afAuth: AngularFireAuth,
              private db: AngularFirestore ) {
      this.infoUsuario();
      this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((event: RouterEvent) => {
        this.selectPath = event.url;
        console.log(this.selectPath);
      });
    }

  ngOnInit() {
    this.infoUsuario();
  }

  async infoUsuario(){
    this.afAuth.onAuthStateChanged(user => {
      this.image = '../../../assets/img/userProfile.png';
      if (user) {
          this.nombre = user.displayName;
          this.email = user.email;
      /*     if ( this.image.length < 2 ){ */
          this.image = '../../../assets/img/userProfile.png';
/*           }else{
            this.image = user.photoURL;
          } */
      }
    });
  }

  signOut(){
    this.auth.logOut();
    this.email = '';
    this.uid = '';
    this.docId = '';
    this.nombre = '';
/*     this.photo = ''; */
  }

}
