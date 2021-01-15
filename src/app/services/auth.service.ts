import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
/* import * as firebase from 'firebase/app'; */
import firebase from 'firebase/app';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { first, map } from 'rxjs/operators';


export class User {
  email: string;
  password: string;
}

export interface User2 {
  id?: string;
  name: string;
  email: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private userCollection: AngularFirestoreCollection<User>;
  private users: Observable<User[]>;

  email: string;
  uid: string;
  docId: string;
  nombre: string;
  error = '';

  collectionName = 'users';
/* 
  user = {} as User; */

  constructor(private afAuth: AngularFireAuth,
              private router: Router,
              public alertController: AlertController,
              private db: AngularFirestore,
              private toast: ToastController) {
/*                 this.userCollection = db.collection<User> ('users');
                this.users = this.userCollection.snapshotChanges().pipe(
                  map (actions => {
                    return actions.map (a => {
                      const data = a.payload.doc.data();
                      const id = a.payload.doc.id;
                      return {id, ... data};
                    });
                  })
                ); */
              }

  logOut() {
    this.afAuth.signOut().then(() => {
      this.router.navigateByUrl('login');
    });
  }

  registerUser(value) {
    return new Promise<any>((resolve, reject) => {
      this.afAuth.createUserWithEmailAndPassword(value.email, value.password).then(
        async res => {
          console.log('User id after registration = ' + res.user.uid);
          const user: User2 = {
            email: value.email,
            id: res.user.uid,
            name: value.name
          };
          resolve(res);
/*           this.userCollection.doc(res.user.uid).set(user); */
          return  (await this.afAuth.currentUser).updateProfile({
            displayName: value.name
          });
/*           const usuario = firebase.auth().currentUser;
          return usuario.updateProfile({
            displayName: value.name
          }); */
        }, err => {
          reject(err);
        }
      );
    });
  }

  login(value) {
    return this.afAuth.signInWithEmailAndPassword(value.email, value.password);
  }

  isLoggedIn() {
    return this.afAuth.authState.pipe(first()).toPromise();
  }

  getCurrentUser() {
    if ( firebase.auth().currentUser) {
      return firebase.auth().currentUser;
    } else {
      return null;
    }
  }
  async logIn(email, password) {
    try {
      const validar = await this.afAuth.signInWithEmailAndPassword(email, password);
      if (validar) {
        console.log('Successfully logged in');
        this.router.navigate(['menu/home']);
      }
    } catch (err) {
      this.presentAlert();
      console.error(err);
    }
  }

  sendEmail(email: string) {
    this.afAuth.sendPasswordResetEmail(email)
      .then(data => {
        console.log(data);
        this.presentToast('Email send',  'bottom', 1000);
        this.router.navigateByUrl('login');
      })
      .catch(err => {
        console.log(` failed ${err}`);
        this.error = err.message;
        this.presentToast('Error',  'bottom', 1000);
      });
  }

  async presentToast(message, position, duration) {
    const toast = await this.toast.create({
      message,
      duration,
      position
    });
    toast.present();
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      /* header: 'Error', */
      /* subHeader: 'Subtitle', */
      message: 'User or password wrong',
      buttons: ['Ok']
    });

    await alert.present();
  }
}