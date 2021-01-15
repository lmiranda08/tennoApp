import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { LoadingController, AlertController } from '@ionic/angular';
import { Plugins, CameraResultType, Capacitor, FilesystemDirectory, CameraPhoto, CameraSource } from '@capacitor/core';
/* import { AngularFireStorage } from '@angular/fire/storage'; */
const { Camera, Filesystem, Storage } = Plugins;


@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  croppedImage: string;
  percent;
  isUpload = false;

  dir: string;
  email: string;
  photo: string;
  uid: string;
  docId: string;
  name: string;
  image: any = null;

  constructor(private auth: AuthService,
              private afAuth: AngularFireAuth,
              private db: AngularFirestore,
              private loadingCtrl: LoadingController,
              private alertCtrl: AlertController) { }

  ngOnInit() {
    this.infoUser();
  }

  async infoUser(){
    this.photo = '../../../assets/img/userProfile.png';
    this.afAuth.onAuthStateChanged(user => {
      console.log(user);
      if (user) {
        this.name = user.displayName;
        this.email = user.email;
      }
    });
  }

  signOut(){
    this.auth.logOut();
    this.email = '';
    this.uid = '';
    this.docId = '';
    this.name = '';
    this.photo = '';
  }

  resetearPass( email: string ){
    this.auth.sendEmail( this.email);
  }


}
