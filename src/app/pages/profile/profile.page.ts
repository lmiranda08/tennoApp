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
  nombre: string;
  image: any = null;

  constructor(private auth: AuthService,
              private afAuth: AngularFireAuth,
              private db: AngularFirestore,
   /*            private storage: AngularFireStorage, */
              private loadingCtrl: LoadingController,
              private alertCtrl: AlertController) { }

  ngOnInit() {
    this.infoUsuario();
  }

  async infoUsuario(){
    this.photo = '../../../assets/img/userProfile.png';
    this.afAuth.onAuthStateChanged(user => {
      console.log(user);
      if (user) {
        this.nombre = user.displayName;
        this.email = user.email;
/*         if ( this.photo.length < 5 ){
          this.photo = '../../../assets/img/userProfile.png';
        }else{
          this.photo = user.photoURL;
        }
        console.log(this.photo); */
      }
    });
  }

  signOut(){
    this.auth.logOut();
    this.email = '';
    this.uid = '';
    this.docId = '';
    this.nombre = '';
    this.photo = '';
  }

  resetearPass( email: string ){
    this.auth.enviarCorreo( this.email);
  }

 /* async updatePhoto() {
    const capturedPhoto = await Camera.getPhoto({
      resultType: CameraResultType.DataUrl,
      quality: 100
    });
    this.dir = capturedPhoto.dataUrl;
    this.afAuth.onAuthStateChanged( async usu => {
      const storageRef = this.storage.storage.ref();
      const loading = this.loadingCtrl.create();
      (await loading).present();
      const imageRef = storageRef.child(`ima/${usu.uid}.jpg`);
      imageRef.putString(this.dir, 'data_url')
      .then((snapshot) => {
          imageRef.getDownloadURL().then( async dato =>{
            (await loading).dismiss();
            this.dir = '';
            return  (await this.afAuth.currentUser).updateProfile({
              photoURL: dato
            });
            this.infoUsuario();
          });
        });
    });
  } 
 */

}
