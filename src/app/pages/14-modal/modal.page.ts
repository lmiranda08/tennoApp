import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, filter } from 'rxjs/operators';
import { FirebaseService } from '../../services/firebase.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ToastController } from '@ionic/angular';


@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})
export class ModalPage implements OnInit {
  public input: string = '';
  details: any;
  todoForm: FormGroup;
  prueba: string;
  items: any[];
  slice: number = 20;
  constructor(private http: HttpClient,
              public fb: FormBuilder,
              private db: FirebaseService,
              private toast: ToastController) {
                setTimeout(() => {
                  this.initializeItems();
                  }, 200);
                }

  ngOnInit() {
    this.todoForm = this.fb.group({
      Nombre: [''],
      Precio: ['']
    });
  }  

  filterItems(event) {
    const val = event.target.value;
    if (val && val.trim() != '' && val.length >= 3) {
      this.items = this.items.filter((item) => {
        return (item.Name.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }else{
      this.initializeItems();
    }
  }

  load(loadMore = false, event?) {
    if (loadMore) {
      this.slice += 25;
    };
    if (event) {
        event.target.complete();
    };
  }

  storeData() {
    this.db.addPendientesVentas(
      this.todoForm.value.Nombre,
      this.todoForm.value.Precio
    ).then((res) => {
    });
  }

  async alerta(){
    const toast = await this.toast.create({
      message: 'Artículo creado',
      duration: 2500
    });
    this.storeData();
    toast.present();
  }


  initializeItems() {
    this.items = [
      {
        "Name": "Abating Link",
        "Platinum": "14"
      },
      {
        "Name": "Ablative Shell",
        "Platinum": "0"
      },
      {
        "Name": "Abundant Mutation",
        "Platinum": "13"
      },
      {
        "Name": "Accelerated Blast",
        "Platinum": "2"
      },
      {
        "Name": "Accelerated Deflection",
        "Platinum": "4"
      },
      {
        "Name": "Accumulating Whipclaw",
        "Platinum": "10"
      },
      {
        "Name": "Acid Shells",
        "Platinum": "8"
      },
      {
        "Name": "Acidic Spittle",
        "Platinum": "20"
      },
      {
        "Name": "Adaptation",
        "Platinum": "32"
      },
      {
        "Name": "Adarza Kavat Imprint",
        "Platinum": "10"
      },
      {
        "Name": "Adept Surge",
        "Platinum": "5"
      },
      {
        "Name": "Adhesive Blast",
        "Platinum": "6"
      },
      {
        "Name": "Adorned Brickie",
        "Platinum": "2"
      },
      {
        "Name": "Adorned Charamote",
        "Platinum": "1"
      },
      {
        "Name": "Adorned Echowinder",
        "Platinum": "3"
      },
      {
        "Name": "Adorned Eye-Eye",
        "Platinum": "2"
      },
      {
        "Name": "Adorned Kriller",
        "Platinum": "2"
      },
      {
        "Name": "Adorned Longwinder",
        "Platinum": "2"
      },
      {
        "Name": "Adorned Mirewinder",
        "Platinum": "0"
      },
      {
        "Name": "Adorned Recaster",
        "Platinum": "1"
      },
      {
        "Name": "Adorned Sapcaddy",
        "Platinum": "0"
      },
      {
        "Name": "Adorned Scrubber",
        "Platinum": "1"
      },
      {
        "Name": "Adorned Synathid",
        "Platinum": "1"
      },
      {
        "Name": "Adorned Tink",
        "Platinum": "0"
      },
      {
        "Name": "Adorned Tromyzon",
        "Platinum": "2"
      },
      {
        "Name": "Adrenaline Boost",
        "Platinum": "9"
      },
      {
        "Name": "Aerial Ace",
        "Platinum": "22"
      },
      {
        "Name": "Aero Agility",
        "Platinum": "14"
      },
      {
        "Name": "Aero Periphery",
        "Platinum": "56"
      },
      {
        "Name": "Aero Vantage",
        "Platinum": "5"
      },
      {
        "Name": "Aerodynamic",
        "Platinum": "18"
      },
      {
        "Name": "Afterburn",
        "Platinum": "11"
      },
      {
        "Name": "Afterburner",
        "Platinum": "3"
      },
      {
        "Name": "Agile Aim",
        "Platinum": "10"
      },
      {
        "Name": "Agility Drift",
        "Platinum": "4"
      },
      {
        "Name": "Agkuza Blade",
        "Platinum": "11"
      },
      {
        "Name": "Agkuza Guard",
        "Platinum": "9"
      },
      {
        "Name": "Agkuza Handle",
        "Platinum": "9"
      },
      {
        "Name": "Agkuza Set",
        "Platinum": "51"
      },
      {
        "Name": "Air Recon",
        "Platinum": "0"
      },
      {
        "Name": "Air Thrusters",
        "Platinum": "5"
      },
      {
        "Name": "Air Time",
        "Platinum": "15"
      },
      {
        "Name": "Akbolto Prime Barrel",
        "Platinum": "5"
      },
      {
        "Name": "Akbolto Prime Blueprint",
        "Platinum": "3"
      },
      {
        "Name": "Akbolto Prime Link",
        "Platinum": "4"
      },
      {
        "Name": "Akbolto Prime Receiver",
        "Platinum": "22"
      },
      {
        "Name": "Akbolto Prime Set",
        "Platinum": "73"
      },
      {
        "Name": "Akbronco Prime Blueprint",
        "Platinum": "2"
      },
      {
        "Name": "Akbronco Prime Link",
        "Platinum": "4"
      },
      {
        "Name": "Akbronco Prime Set",
        "Platinum": "16"
      },
      {
        "Name": "Akjagara Prime Barrel",
        "Platinum": "13"
      },
      {
        "Name": "Akjagara Prime Blueprint",
        "Platinum": "2"
      },
      {
        "Name": "Akjagara Prime Link",
        "Platinum": "2"
      },
      {
        "Name": "Akjagara Prime Receiver",
        "Platinum": "5"
      },
      {
        "Name": "Akjagara Prime Set",
        "Platinum": "43"
      },
      {
        "Name": "Aklex Prime Blueprint",
        "Platinum": "9"
      },
      {
        "Name": "Aklex Prime Link",
        "Platinum": "31"
      },
      {
        "Name": "Aklex Prime Set",
        "Platinum": "45"
      },
      {
        "Name": "Aksomati Prime Barrel",
        "Platinum": "3"
      },
      {
        "Name": "Aksomati Prime Blueprint",
        "Platinum": "2"
      },
      {
        "Name": "Aksomati Prime Link",
        "Platinum": "18"
      },
      {
        "Name": "Aksomati Prime Receiver",
        "Platinum": "5"
      },
      {
        "Name": "Aksomati Prime Set",
        "Platinum": "46"
      },
      {
        "Name": "Akstiletto Prime Barrel",
        "Platinum": "17"
      },
      {
        "Name": "Akstiletto Prime Blueprint",
        "Platinum": "12"
      },
      {
        "Name": "Akstiletto Prime Link",
        "Platinum": "8"
      },
      {
        "Name": "Akstiletto Prime Receiver",
        "Platinum": "20"
      },
      {
        "Name": "Akstiletto Prime Set",
        "Platinum": "107"
      },
      {
        "Name": "Akvasto Prime Blueprint",
        "Platinum": "81"
      },
      {
        "Name": "Akvasto Prime Link",
        "Platinum": "23"
      },
      {
        "Name": "Akvasto Prime Set",
        "Platinum": "121"
      },
      {
        "Name": "Amaryn's Retreat Scene",
        "Platinum": "55"
      },
      {
        "Name": "Amber Ayatan Star",
        "Platinum": "2"
      },
      {
        "Name": "Ambush",
        "Platinum": "47"
      },
      {
        "Name": "Ambush Optics (Rubico)",
        "Platinum": "19"
      },
      {
        "Name": "Amesha Harness",
        "Platinum": "0"
      },
      {
        "Name": "Amesha Set",
        "Platinum": "67"
      },
      {
        "Name": "Amesha Systems",
        "Platinum": "0"
      },
      {
        "Name": "Amesha Wings",
        "Platinum": "0"
      },
      {
        "Name": "Amethyst antitoxin",
        "Platinum": "0"
      },
      {
        "Name": "Ammo Case",
        "Platinum": "4"
      },
      {
        "Name": "Ammo Chain",
        "Platinum": "6"
      },
      {
        "Name": "Ammo Drum",
        "Platinum": "7269"
      },
      {
        "Name": "Ammo Stock",
        "Platinum": "5"
      },
      {
        "Name": "Anabolic Pollination",
        "Platinum": "0"
      },
      {
        "Name": "Anasa Ayatan Sculpture",
        "Platinum": "10"
      },
      {
        "Name": "Anchored Glide",
        "Platinum": "14"
      },
      {
        "Name": "Ancient Fusion Core",
        "Platinum": "442"
      },
      {
        "Name": "Anemic Agility",
        "Platinum": "6"
      },
      {
        "Name": "Animal Instinct",
        "Platinum": "4"
      },
      {
        "Name": "Ankyros Prime Blade",
        "Platinum": "27"
      },
      {
        "Name": "Ankyros Prime Blueprint",
        "Platinum": "8"
      },
      {
        "Name": "Ankyros Prime Gauntlet",
        "Platinum": "23"
      },
      {
        "Name": "Ankyros Prime Set",
        "Platinum": "132"
      },
      {
        "Name": "Anode Cell",
        "Platinum": "8"
      },
      {
        "Name": "Anticipation",
        "Platinum": "0"
      },
      {
        "Name": "Anti-Flak Plating",
        "Platinum": "0"
      },
      {
        "Name": "Anti-Grav Array",
        "Platinum": "18"
      },
      {
        "Name": "Anti-Grav Grenade",
        "Platinum": "0"
      },
      {
        "Name": "Antimatter Absorb",
        "Platinum": "11"
      },
      {
        "Name": "Antimatter Mine",
        "Platinum": "0"
      },
      {
        "Name": "Antitoxin",
        "Platinum": "6"
      },
      {
        "Name": "Apex Predator",
        "Platinum": "35"
      },
      {
        "Name": "Aquapulmo (Large)",
        "Platinum": "0"
      },
      {
        "Name": "Aquapulmo (Medium)",
        "Platinum": "0"
      },
      {
        "Name": "Aquapulmo (Small)",
        "Platinum": "0"
      },
      {
        "Name": "Arbiters of Hexis Augment Mod",
        "Platinum": "9"
      },
      {
        "Name": "Arbiter's Tribunal Scene",
        "Platinum": "20"
      },
      {
        "Name": "Arc Coil",
        "Platinum": "0"
      },
      {
        "Name": "Arcane Acceleration",
        "Platinum": "19"
      },
      {
        "Name": "Arcane Aegis",
        "Platinum": "60"
      },
      {
        "Name": "Arcane Agility",
        "Platinum": "9"
      },
      {
        "Name": "Arcane Arachne",
        "Platinum": "5"
      },
      {
        "Name": "Arcane Aura Trinity Helmet",
        "Platinum": "154"
      },
      {
        "Name": "Arcane Aurora Frost Helmet",
        "Platinum": "76"
      },
      {
        "Name": "Arcane Avalon Excalibur Helmet",
        "Platinum": "51"
      },
      {
        "Name": "Arcane Avenger",
        "Platinum": "20"
      },
      {
        "Name": "Arcane Awakening",
        "Platinum": "4"
      },
      {
        "Name": "Arcane Backdraft Ember Helmet",
        "Platinum": "78"
      },
      {
        "Name": "Arcane Barrier",
        "Platinum": "36"
      },
      {
        "Name": "Arcane Blade Charger",
        "Platinum": "17"
      },
      {
        "Name": "Arcane Bodyguard",
        "Platinum": "6"
      },
      {
        "Name": "Arcane Chlora Saryn Helmet",
        "Platinum": "78"
      },
      {
        "Name": "Arcane Chorus Banshee Helmet",
        "Platinum": "147"
      },
      {
        "Name": "Arcane Coil Mag Helmet",
        "Platinum": "185"
      },
      {
        "Name": "Arcane Consequence",
        "Platinum": "3"
      },
      {
        "Name": "Arcane Deflection",
        "Platinum": "6"
      },
      {
        "Name": "Arcane Energize",
        "Platinum": "221"
      },
      {
        "Name": "Arcane Eruption",
        "Platinum": "20"
      },
      {
        "Name": "Arcane Esprit Vauban Helmet",
        "Platinum": "76"
      },
      {
        "Name": "Arcane Essence Loki Helmet",
        "Platinum": "118"
      },
      {
        "Name": "Arcane Flux Nova Helmet",
        "Platinum": "53"
      },
      {
        "Name": "Arcane Fury",
        "Platinum": "84"
      },
      {
        "Name": "Arcane Gambit Vauban Helmet",
        "Platinum": "73"
      },
      {
        "Name": "Arcane Gauss Mag Helmet",
        "Platinum": "113"
      },
      {
        "Name": "Arcane Grace",
        "Platinum": "142"
      },
      {
        "Name": "Arcane Guardian",
        "Platinum": "62"
      },
      {
        "Name": "Arcane Healing",
        "Platinum": "8"
      },
      {
        "Name": "Arcane Hemlock Saryn Helmet",
        "Platinum": "58"
      },
      {
        "Name": "Arcane Ice",
        "Platinum": "2"
      },
      {
        "Name": "Arcane Locust Ash Helmet",
        "Platinum": "105"
      },
      {
        "Name": "Arcane Menticide Nyx Helmet",
        "Platinum": "81"
      },
      {
        "Name": "Arcane Meridian Trinity Helmet",
        "Platinum": "150"
      },
      {
        "Name": "Arcane Momentum",
        "Platinum": "6"
      },
      {
        "Name": "Arcane Nullifier",
        "Platinum": "13"
      },
      {
        "Name": "Arcane Pendragon Excalibur Helmet",
        "Platinum": "280"
      },
      {
        "Name": "Arcane Phantasm",
        "Platinum": "8"
      },
      {
        "Name": "Arcane Phoenix Ember Helmet",
        "Platinum": "87"
      },
      {
        "Name": "Arcane Pistoleer",
        "Platinum": "38"
      },
      {
        "Name": "Arcane Precision",
        "Platinum": "43"
      },
      {
        "Name": "Arcane Primary Charger",
        "Platinum": "16"
      },
      {
        "Name": "Arcane Pulse",
        "Platinum": "26"
      },
      {
        "Name": "Arcane Pulse Volt Helmet",
        "Platinum": "224"
      },
      {
        "Name": "Arcane Rage",
        "Platinum": "8"
      },
      {
        "Name": "Arcane Resistance",
        "Platinum": "20"
      },
      {
        "Name": "Arcane Reverb Banshee Helmet",
        "Platinum": "60"
      },
      {
        "Name": "Arcane Scorpion Ash Helmet",
        "Platinum": "52"
      },
      {
        "Name": "Arcane Squall Frost Helmet",
        "Platinum": "303"
      },
      {
        "Name": "Arcane Storm Volt Helmet",
        "Platinum": "229"
      },
      {
        "Name": "Arcane Strike",
        "Platinum": "21"
      },
      {
        "Name": "Arcane Swindle Loki Helmet",
        "Platinum": "196"
      },
      {
        "Name": "Arcane Tanker",
        "Platinum": "24"
      },
      {
        "Name": "Arcane Tempo",
        "Platinum": "2"
      },
      {
        "Name": "Arcane Thrak Rhino Helmet",
        "Platinum": "62"
      },
      {
        "Name": "Arcane Trickery",
        "Platinum": "8"
      },
      {
        "Name": "Arcane Ultimatum",
        "Platinum": "21"
      },
      {
        "Name": "Arcane Vanguard Rhino Helmet",
        "Platinum": "317"
      },
      {
        "Name": "Arcane Velocity",
        "Platinum": "14"
      },
      {
        "Name": "Arcane Vespa Nyx Helmet",
        "Platinum": "156"
      },
      {
        "Name": "Arcane Victory",
        "Platinum": "10"
      },
      {
        "Name": "Arcane Warmth",
        "Platinum": "4"
      },
      {
        "Name": "Archgun Ace",
        "Platinum": "8"
      },
      {
        "Name": "Arch-gun Riven Mod (Veiled)",
        "Platinum": "26"
      },
      {
        "Name": "Argent Scourge",
        "Platinum": "26"
      },
      {
        "Name": "Argon Plating",
        "Platinum": "4"
      },
      {
        "Name": "Argon Scope",
        "Platinum": "7"
      },
      {
        "Name": "Armored Acrobatics",
        "Platinum": "0"
      },
      {
        "Name": "Armored Agility",
        "Platinum": "5"
      },
      {
        "Name": "Armored Evade",
        "Platinum": "0"
      },
      {
        "Name": "Armored Recovery",
        "Platinum": "0"
      },
      {
        "Name": "Arrow Mutation",
        "Platinum": "3"
      },
      {
        "Name": "Artillery Battery Scene",
        "Platinum": "137"
      },
      {
        "Name": "Artillery Cheap Shot",
        "Platinum": "11"
      },
      {
        "Name": "Arum Spinosa Blueprint",
        "Platinum": "13"
      },
      {
        "Name": "Arum Spinosa Guard",
        "Platinum": "19"
      },
      {
        "Name": "Arum Spinosa Rivet",
        "Platinum": "35"
      },
      {
        "Name": "Arum Spinosa Set",
        "Platinum": "75"
      },
      {
        "Name": "Ash Prime Blueprint",
        "Platinum": "24"
      },
      {
        "Name": "Ash Prime Chassis",
        "Platinum": "13"
      },
      {
        "Name": "Ash Prime Neuroptics",
        "Platinum": "7"
      },
      {
        "Name": "Ash Prime Set",
        "Platinum": "140"
      },
      {
        "Name": "Ash Prime Systems",
        "Platinum": "83"
      },
      {
        "Name": "Assault Mode",
        "Platinum": "19"
      },
      {
        "Name": "Assimilate",
        "Platinum": "13"
      },
      {
        "Name": "Astral Autopsy",
        "Platinum": "36"
      },
      {
        "Name": "Astral Slash",
        "Platinum": "6"
      },
      {
        "Name": "Astral Twilight",
        "Platinum": "4"
      },
      {
        "Name": "Atlantis Vulcan",
        "Platinum": "5"
      },
      {
        "Name": "Atlas Prime Blueprint",
        "Platinum": "1"
      },
      {
        "Name": "Atlas Prime Chassis",
        "Platinum": "3"
      },
      {
        "Name": "Atlas Prime Neuroptics",
        "Platinum": "24"
      },
      {
        "Name": "Atlas Prime Set",
        "Platinum": "33"
      },
      {
        "Name": "Atlas Prime Systems",
        "Platinum": "2"
      },
      {
        "Name": "Auger Strike",
        "Platinum": "13"
      },
      {
        "Name": "Augur Accord",
        "Platinum": "5"
      },
      {
        "Name": "Augur Message",
        "Platinum": "5"
      },
      {
        "Name": "Augur Pact",
        "Platinum": "4"
      },
      {
        "Name": "Augur Reach",
        "Platinum": "20"
      },
      {
        "Name": "Augur Secrets",
        "Platinum": "21"
      },
      {
        "Name": "Augur Seeker",
        "Platinum": "6"
      },
      {
        "Name": "Auto Breach",
        "Platinum": "9"
      },
      {
        "Name": "Automatic Trigger",
        "Platinum": "5"
      },
      {
        "Name": "Auxiliary Power",
        "Platinum": "6"
      },
      {
        "Name": "Avenging Truth",
        "Platinum": "11"
      },
      {
        "Name": "Aviator",
        "Platinum": "5"
      },
      {
        "Name": "Axi A1 Exceptional",
        "Platinum": "0"
      },
      {
        "Name": "Axi A1 Flawless",
        "Platinum": "0"
      },
      {
        "Name": "Axi A1 Intact",
        "Platinum": "7"
      },
      {
        "Name": "Axi A1 Radiant",
        "Platinum": "0"
      },
      {
        "Name": "Axi A10 Exceptional",
        "Platinum": "0"
      },
      {
        "Name": "Axi A10 Flawless",
        "Platinum": "0"
      },
      {
        "Name": "Axi A10 Intact",
        "Platinum": "3"
      },
      {
        "Name": "Axi A10 Radiant",
        "Platinum": "0"
      },
      {
        "Name": "Axi A11 Exceptional",
        "Platinum": "0"
      },
      {
        "Name": "Axi A11 Flawless",
        "Platinum": "0"
      },
      {
        "Name": "Axi A11 Intact",
        "Platinum": "3"
      },
      {
        "Name": "Axi A11 Radiant",
        "Platinum": "4"
      },
      {
        "Name": "Axi A2 Exceptional",
        "Platinum": "0"
      },
      {
        "Name": "Axi A2 Flawless",
        "Platinum": "0"
      },
      {
        "Name": "Axi A2 Intact",
        "Platinum": "3"
      },
      {
        "Name": "Axi A2 Radiant",
        "Platinum": "9"
      },
      {
        "Name": "Axi A3 Exceptional",
        "Platinum": "0"
      },
      {
        "Name": "Axi A3 Flawless",
        "Platinum": "0"
      },
      {
        "Name": "Axi A3 Intact",
        "Platinum": "9"
      },
      {
        "Name": "Axi A3 Radiant",
        "Platinum": "0"
      },
      {
        "Name": "Axi A4 Exceptional",
        "Platinum": "0"
      },
      {
        "Name": "Axi A4 Flawless",
        "Platinum": "0"
      },
      {
        "Name": "Axi A4 Intact",
        "Platinum": "4"
      },
      {
        "Name": "Axi A4 Radiant",
        "Platinum": "0"
      },
      {
        "Name": "Axi A5 Exceptional",
        "Platinum": "0"
      },
      {
        "Name": "Axi A5 Flawless",
        "Platinum": "0"
      },
      {
        "Name": "Axi A5 Intact",
        "Platinum": "14"
      },
      {
        "Name": "Axi A5 Radiant",
        "Platinum": "38"
      },
      {
        "Name": "Axi A6 Exceptional",
        "Platinum": "0"
      },
      {
        "Name": "Axi A6 Flawless",
        "Platinum": "0"
      },
      {
        "Name": "Axi A6 Intact",
        "Platinum": "4"
      },
      {
        "Name": "Axi A6 Radiant",
        "Platinum": "22"
      },
      {
        "Name": "Axi A7 Exceptional",
        "Platinum": "0"
      },
      {
        "Name": "Axi A7 Flawless",
        "Platinum": "0"
      },
      {
        "Name": "Axi A7 Intact",
        "Platinum": "14"
      },
      {
        "Name": "Axi A7 Radiant",
        "Platinum": "16"
      },
      {
        "Name": "Axi A8 Exceptional",
        "Platinum": "0"
      },
      {
        "Name": "Axi A8 Flawless",
        "Platinum": "0"
      },
      {
        "Name": "Axi A8 Intact",
        "Platinum": "0"
      },
      {
        "Name": "Axi A8 Radiant",
        "Platinum": "0"
      },
      {
        "Name": "Axi A9 Exceptional",
        "Platinum": "0"
      },
      {
        "Name": "Axi A9 Flawless",
        "Platinum": "0"
      },
      {
        "Name": "Axi A9 Intact",
        "Platinum": "5"
      },
      {
        "Name": "Axi A9 Radiant",
        "Platinum": "0"
      },
      {
        "Name": "Axi B1 Exceptional",
        "Platinum": "0"
      },
      {
        "Name": "Axi B1 Flawless",
        "Platinum": "0"
      },
      {
        "Name": "Axi B1 Intact",
        "Platinum": "23"
      },
      {
        "Name": "Axi B1 Radiant",
        "Platinum": "0"
      },
      {
        "Name": "Axi B2 Exceptional",
        "Platinum": "0"
      },
      {
        "Name": "Axi B2 Flawless",
        "Platinum": "0"
      },
      {
        "Name": "Axi B2 Intact",
        "Platinum": "12"
      },
      {
        "Name": "Axi B2 Radiant",
        "Platinum": "0"
      },
      {
        "Name": "Axi B3 Exceptional",
        "Platinum": "0"
      },
      {
        "Name": "Axi B3 Flawless",
        "Platinum": "0"
      },
      {
        "Name": "Axi B3 Intact",
        "Platinum": "3"
      },
      {
        "Name": "Axi B3 Radiant",
        "Platinum": "0"
      },
      {
        "Name": "Axi B4 Exceptional",
        "Platinum": "0"
      },
      {
        "Name": "Axi B4 Flawless",
        "Platinum": "0"
      },
      {
        "Name": "Axi B4 Intact",
        "Platinum": "2"
      },
      {
        "Name": "Axi B4 Radiant",
        "Platinum": "0"
      },
      {
        "Name": "Axi C1 Exceptional",
        "Platinum": "0"
      },
      {
        "Name": "Axi C1 Flawless",
        "Platinum": "0"
      },
      {
        "Name": "Axi C1 Intact",
        "Platinum": "10"
      },
      {
        "Name": "Axi C1 Radiant",
        "Platinum": "0"
      },
      {
        "Name": "Axi C2 Exceptional",
        "Platinum": "0"
      },
      {
        "Name": "Axi C2 Flawless",
        "Platinum": "0"
      },
      {
        "Name": "Axi C2 Intact",
        "Platinum": "9"
      },
      {
        "Name": "Axi C2 Radiant",
        "Platinum": "0"
      },
      {
        "Name": "Axi C3 Exceptional",
        "Platinum": "0"
      },
      {
        "Name": "Axi C3 Flawless",
        "Platinum": "0"
      },
      {
        "Name": "Axi C3 Intact",
        "Platinum": "14"
      },
      {
        "Name": "Axi C3 Radiant",
        "Platinum": "0"
      },
      {
        "Name": "Axi C4 Exceptional",
        "Platinum": "0"
      },
      {
        "Name": "Axi C4 Flawless",
        "Platinum": "0"
      },
      {
        "Name": "Axi C4 Intact",
        "Platinum": "5"
      },
      {
        "Name": "Axi C4 Radiant",
        "Platinum": "0"
      },
      {
        "Name": "Axi C5 Exceptional",
        "Platinum": "0"
      },
      {
        "Name": "Axi C5 Flawless",
        "Platinum": "0"
      },
      {
        "Name": "Axi C5 Intact",
        "Platinum": "2"
      },
      {
        "Name": "Axi C5 Radiant",
        "Platinum": "0"
      },
      {
        "Name": "Axi D1 Exceptional",
        "Platinum": "0"
      },
      {
        "Name": "Axi D1 Flawless",
        "Platinum": "0"
      },
      {
        "Name": "Axi D1 Intact",
        "Platinum": "0"
      },
      {
        "Name": "Axi D1 Radiant",
        "Platinum": "0"
      },
      {
        "Name": "Axi D2 Exceptional",
        "Platinum": "0"
      },
      {
        "Name": "Axi D2 Flawless",
        "Platinum": "0"
      },
      {
        "Name": "Axi D2 Intact",
        "Platinum": "11"
      },
      {
        "Name": "Axi D2 Radiant",
        "Platinum": "0"
      },
      {
        "Name": "Axi E1 Exceptional",
        "Platinum": "14"
      },
      {
        "Name": "Axi E1 Flawless",
        "Platinum": "0"
      },
      {
        "Name": "Axi E1 Intact",
        "Platinum": "3"
      },
      {
        "Name": "Axi E1 Radiant",
        "Platinum": "7"
      },
      {
        "Name": "Axi E2 Exceptional",
        "Platinum": "0"
      },
      {
        "Name": "Axi E2 Flawless",
        "Platinum": "0"
      },
      {
        "Name": "Axi E2 Intact",
        "Platinum": "9"
      },
      {
        "Name": "Axi E2 Radiant",
        "Platinum": "0"
      },
      {
        "Name": "Axi G1 Exceptional",
        "Platinum": "0"
      },
      {
        "Name": "Axi G1 Flawless",
        "Platinum": "0"
      },
      {
        "Name": "Axi G1 Intact",
        "Platinum": "10"
      },
      {
        "Name": "Axi G1 Radiant",
        "Platinum": "0"
      },
      {
        "Name": "Axi G2 Exceptional",
        "Platinum": "0"
      },
      {
        "Name": "Axi G2 Flawless",
        "Platinum": "0"
      },
      {
        "Name": "Axi G2 Intact",
        "Platinum": "11"
      },
      {
        "Name": "Axi G2 Radiant",
        "Platinum": "0"
      },
      {
        "Name": "Axi G3 Exceptional",
        "Platinum": "0"
      },
      {
        "Name": "Axi G3 Flawless",
        "Platinum": "0"
      },
      {
        "Name": "Axi G3 Intact",
        "Platinum": "7"
      },
      {
        "Name": "Axi G3 Radiant",
        "Platinum": "0"
      },
      {
        "Name": "Axi G4 Exceptional",
        "Platinum": "0"
      },
      {
        "Name": "Axi G4 Flawless",
        "Platinum": "0"
      },
      {
        "Name": "Axi G4 Intact",
        "Platinum": "2"
      },
      {
        "Name": "Axi G4 Radiant",
        "Platinum": "0"
      },
      {
        "Name": "Axi H1 Exceptional",
        "Platinum": "0"
      },
      {
        "Name": "Axi H1 Flawless",
        "Platinum": "0"
      },
      {
        "Name": "Axi H1 Intact",
        "Platinum": "25"
      },
      {
        "Name": "Axi H1 Radiant",
        "Platinum": "0"
      },
      {
        "Name": "Axi H2 Exceptional",
        "Platinum": "0"
      },
      {
        "Name": "Axi H2 Flawless",
        "Platinum": "0"
      },
      {
        "Name": "Axi H2 Intact",
        "Platinum": "20"
      },
      {
        "Name": "Axi H2 Radiant",
        "Platinum": "0"
      },
      {
        "Name": "Axi H3 Exceptional",
        "Platinum": "0"
      },
      {
        "Name": "Axi H3 Flawless",
        "Platinum": "0"
      },
      {
        "Name": "Axi H3 Intact",
        "Platinum": "9"
      },
      {
        "Name": "Axi H3 Radiant",
        "Platinum": "23"
      },
      {
        "Name": "Axi H4 Exceptional",
        "Platinum": "0"
      },
      {
        "Name": "Axi H4 Flawless",
        "Platinum": "0"
      },
      {
        "Name": "Axi H4 Intact",
        "Platinum": "8"
      },
      {
        "Name": "Axi H4 Radiant",
        "Platinum": "0"
      },
      {
        "Name": "Axi K1 Exceptional",
        "Platinum": "0"
      },
      {
        "Name": "Axi K1 Flawless",
        "Platinum": "0"
      },
      {
        "Name": "Axi K1 Intact",
        "Platinum": "9"
      },
      {
        "Name": "Axi K1 Radiant",
        "Platinum": "0"
      },
      {
        "Name": "Axi K2 Exceptional",
        "Platinum": "0"
      },
      {
        "Name": "Axi K2 Flawless",
        "Platinum": "0"
      },
      {
        "Name": "Axi K2 Intact",
        "Platinum": "10"
      },
      {
        "Name": "Axi K2 Radiant",
        "Platinum": "21"
      },
      {
        "Name": "Axi K3 Exceptional",
        "Platinum": "53"
      },
      {
        "Name": "Axi K3 Flawless",
        "Platinum": "0"
      },
      {
        "Name": "Axi K3 Intact",
        "Platinum": "9"
      },
      {
        "Name": "Axi K3 Radiant",
        "Platinum": "17"
      },
      {
        "Name": "Axi K4 Exceptional",
        "Platinum": "9"
      },
      {
        "Name": "Axi K4 Flawless",
        "Platinum": "0"
      },
      {
        "Name": "Axi K4 Intact",
        "Platinum": "15"
      },
      {
        "Name": "Axi K4 Radiant",
        "Platinum": "0"
      },
      {
        "Name": "Axi K5 Exceptional",
        "Platinum": "0"
      },
      {
        "Name": "Axi K5 Flawless",
        "Platinum": "0"
      },
      {
        "Name": "Axi K5 Intact",
        "Platinum": "12"
      },
      {
        "Name": "Axi K5 Radiant",
        "Platinum": "24"
      },
      {
        "Name": "Axi L1 Exceptional",
        "Platinum": "65"
      },
      {
        "Name": "Axi L1 Flawless",
        "Platinum": "0"
      },
      {
        "Name": "Axi L1 Intact",
        "Platinum": "101"
      },
      {
        "Name": "Axi L1 Radiant",
        "Platinum": "94"
      },
      {
        "Name": "Axi L2 Exceptional",
        "Platinum": "0"
      },
      {
        "Name": "Axi L2 Flawless",
        "Platinum": "0"
      },
      {
        "Name": "Axi L2 Intact",
        "Platinum": "4"
      },
      {
        "Name": "Axi L2 Radiant",
        "Platinum": "14"
      },
      {
        "Name": "Axi L3 Exceptional",
        "Platinum": "0"
      },
      {
        "Name": "Axi L3 Flawless",
        "Platinum": "0"
      },
      {
        "Name": "Axi L3 Intact",
        "Platinum": "8"
      },
      {
        "Name": "Axi L3 Radiant",
        "Platinum": "0"
      },
      {
        "Name": "Axi L4 Exceptional",
        "Platinum": "68"
      },
      {
        "Name": "Axi L4 Flawless",
        "Platinum": "0"
      },
      {
        "Name": "Axi L4 Intact",
        "Platinum": "84"
      },
      {
        "Name": "Axi L4 Radiant",
        "Platinum": "114"
      },
      {
        "Name": "Axi L5 Exceptional",
        "Platinum": "0"
      },
      {
        "Name": "Axi L5 Flawless",
        "Platinum": "0"
      },
      {
        "Name": "Axi L5 Intact",
        "Platinum": "8"
      },
      {
        "Name": "Axi L5 Radiant",
        "Platinum": "19"
      },
      {
        "Name": "Axi M1 Exceptional",
        "Platinum": "0"
      },
      {
        "Name": "Axi M1 Flawless",
        "Platinum": "0"
      },
      {
        "Name": "Axi M1 Intact",
        "Platinum": "11"
      },
      {
        "Name": "Axi M1 Radiant",
        "Platinum": "0"
      },
      {
        "Name": "Axi N1 Exceptional",
        "Platinum": "0"
      },
      {
        "Name": "Axi N1 Flawless",
        "Platinum": "0"
      },
      {
        "Name": "Axi N1 Intact",
        "Platinum": "19"
      },
      {
        "Name": "Axi N1 Radiant",
        "Platinum": "36"
      },
      {
        "Name": "Axi N2 Exceptional",
        "Platinum": "0"
      },
      {
        "Name": "Axi N2 Flawless",
        "Platinum": "0"
      },
      {
        "Name": "Axi N2 Intact",
        "Platinum": "10"
      },
      {
        "Name": "Axi N2 Radiant",
        "Platinum": "37"
      },
      {
        "Name": "Axi N3 Exceptional",
        "Platinum": "0"
      },
      {
        "Name": "Axi N3 Flawless",
        "Platinum": "0"
      },
      {
        "Name": "Axi N3 Intact",
        "Platinum": "26"
      },
      {
        "Name": "Axi N3 Radiant",
        "Platinum": "48"
      },
      {
        "Name": "Axi N4 Exceptional",
        "Platinum": "0"
      },
      {
        "Name": "Axi N4 Flawless",
        "Platinum": "0"
      },
      {
        "Name": "Axi N4 Intact",
        "Platinum": "9"
      },
      {
        "Name": "Axi N4 Radiant",
        "Platinum": "0"
      },
      {
        "Name": "Axi N5 Exceptional",
        "Platinum": "0"
      },
      {
        "Name": "Axi N5 Flawless",
        "Platinum": "0"
      },
      {
        "Name": "Axi N5 Intact",
        "Platinum": "13"
      },
      {
        "Name": "Axi N5 Radiant",
        "Platinum": "33"
      },
      {
        "Name": "Axi N6 Exceptional",
        "Platinum": "0"
      },
      {
        "Name": "Axi N6 Flawless",
        "Platinum": "0"
      },
      {
        "Name": "Axi N6 Intact",
        "Platinum": "11"
      },
      {
        "Name": "Axi N6 Radiant",
        "Platinum": "0"
      },
      {
        "Name": "Axi O1 Exceptional",
        "Platinum": "0"
      },
      {
        "Name": "Axi O1 Flawless",
        "Platinum": "0"
      },
      {
        "Name": "Axi O1 Intact",
        "Platinum": "16"
      },
      {
        "Name": "Axi O1 Radiant",
        "Platinum": "0"
      },
      {
        "Name": "Axi O2 Exceptional",
        "Platinum": "0"
      },
      {
        "Name": "Axi O2 Flawless",
        "Platinum": "0"
      },
      {
        "Name": "Axi O2 Intact",
        "Platinum": "14"
      },
      {
        "Name": "Axi O2 Radiant",
        "Platinum": "0"
      },
      {
        "Name": "Axi O3 Exceptional",
        "Platinum": "0"
      },
      {
        "Name": "Axi O3 Flawless",
        "Platinum": "0"
      },
      {
        "Name": "Axi O3 Intact",
        "Platinum": "16"
      },
      {
        "Name": "Axi O3 Radiant",
        "Platinum": "0"
      },
      {
        "Name": "Axi O4 Exceptional",
        "Platinum": "0"
      },
      {
        "Name": "Axi O4 Flawless",
        "Platinum": "0"
      },
      {
        "Name": "Axi O4 Intact",
        "Platinum": "15"
      },
      {
        "Name": "Axi O4 Radiant",
        "Platinum": "0"
      },
      {
        "Name": "Axi P1 Exceptional",
        "Platinum": "0"
      },
      {
        "Name": "Axi P1 Flawless",
        "Platinum": "0"
      },
      {
        "Name": "Axi P1 Intact",
        "Platinum": "10"
      },
      {
        "Name": "Axi P1 Radiant",
        "Platinum": "0"
      },
      {
        "Name": "Axi P2 Exceptional",
        "Platinum": "0"
      },
      {
        "Name": "Axi P2 Flawless",
        "Platinum": "0"
      },
      {
        "Name": "Axi P2 Intact",
        "Platinum": "0"
      },
      {
        "Name": "Axi P2 Radiant",
        "Platinum": "0"
      },
      {
        "Name": "Axi P3 Exceptional",
        "Platinum": "0"
      },
      {
        "Name": "Axi P3 Flawless",
        "Platinum": "0"
      },
      {
        "Name": "Axi P3 Intact",
        "Platinum": "15"
      },
      {
        "Name": "Axi P3 Radiant",
        "Platinum": "0"
      },
      {
        "Name": "Axi R1 Exceptional",
        "Platinum": "0"
      },
      {
        "Name": "Axi R1 Flawless",
        "Platinum": "0"
      },
      {
        "Name": "Axi R1 Intact",
        "Platinum": "63"
      },
      {
        "Name": "Axi R1 Radiant",
        "Platinum": "67"
      },
      {
        "Name": "Axi R2 Exceptional",
        "Platinum": "0"
      },
      {
        "Name": "Axi R2 Flawless",
        "Platinum": "0"
      },
      {
        "Name": "Axi R2 Intact",
        "Platinum": "8"
      },
      {
        "Name": "Axi R2 Radiant",
        "Platinum": "14"
      },
      {
        "Name": "Axi R3 Exceptional",
        "Platinum": "0"
      },
      {
        "Name": "Axi R3 Flawless",
        "Platinum": "0"
      },
      {
        "Name": "Axi R3 Intact",
        "Platinum": "4"
      },
      {
        "Name": "Axi R3 Radiant",
        "Platinum": "11"
      },
      {
        "Name": "Axi S1 Exceptional",
        "Platinum": "0"
      },
      {
        "Name": "Axi S1 Flawless",
        "Platinum": "0"
      },
      {
        "Name": "Axi S1 Intact",
        "Platinum": "13"
      },
      {
        "Name": "Axi S1 Radiant",
        "Platinum": "0"
      },
      {
        "Name": "Axi S2 Exceptional",
        "Platinum": "0"
      },
      {
        "Name": "Axi S2 Flawless",
        "Platinum": "0"
      },
      {
        "Name": "Axi S2 Intact",
        "Platinum": "15"
      },
      {
        "Name": "Axi S2 Radiant",
        "Platinum": "0"
      },
      {
        "Name": "Axi S3 Exceptional",
        "Platinum": "0"
      },
      {
        "Name": "Axi S3 Flawless",
        "Platinum": "0"
      },
      {
        "Name": "Axi S3 Intact",
        "Platinum": "9"
      },
      {
        "Name": "Axi S3 Radiant",
        "Platinum": "0"
      },
      {
        "Name": "Axi S4 Exceptional",
        "Platinum": "0"
      },
      {
        "Name": "Axi S4 Flawless",
        "Platinum": "0"
      },
      {
        "Name": "Axi S4 Intact",
        "Platinum": "5"
      },
      {
        "Name": "Axi S4 Radiant",
        "Platinum": "0"
      },
      {
        "Name": "Axi S5 Exceptional",
        "Platinum": "0"
      },
      {
        "Name": "Axi S5 Flawless",
        "Platinum": "0"
      },
      {
        "Name": "Axi S5 Intact",
        "Platinum": "7"
      },
      {
        "Name": "Axi S5 Radiant",
        "Platinum": "0"
      },
      {
        "Name": "Axi S6 Exceptional",
        "Platinum": "0"
      },
      {
        "Name": "Axi S6 Flawless",
        "Platinum": "0"
      },
      {
        "Name": "Axi S6 Intact",
        "Platinum": "4"
      },
      {
        "Name": "Axi S6 Radiant",
        "Platinum": "13"
      },
      {
        "Name": "Axi S7 Exceptional",
        "Platinum": "4"
      },
      {
        "Name": "Axi S7 Flawless",
        "Platinum": "0"
      },
      {
        "Name": "Axi S7 Intact",
        "Platinum": "2"
      },
      {
        "Name": "Axi S7 Radiant",
        "Platinum": "0"
      },
      {
        "Name": "Axi T1 Exceptional",
        "Platinum": "0"
      },
      {
        "Name": "Axi T1 Flawless",
        "Platinum": "0"
      },
      {
        "Name": "Axi T1 Intact",
        "Platinum": "17"
      },
      {
        "Name": "Axi T1 Radiant",
        "Platinum": "0"
      },
      {
        "Name": "Axi T2 Exceptional",
        "Platinum": "0"
      },
      {
        "Name": "Axi T2 Flawless",
        "Platinum": "0"
      },
      {
        "Name": "Axi T2 Intact",
        "Platinum": "6"
      },
      {
        "Name": "Axi T2 Radiant",
        "Platinum": "0"
      },
      {
        "Name": "Axi T3 Exceptional",
        "Platinum": "0"
      },
      {
        "Name": "Axi T3 Flawless",
        "Platinum": "0"
      },
      {
        "Name": "Axi T3 Intact",
        "Platinum": "7"
      },
      {
        "Name": "Axi T3 Radiant",
        "Platinum": "6"
      },
      {
        "Name": "Axi T4 Exceptional",
        "Platinum": "6"
      },
      {
        "Name": "Axi T4 Flawless",
        "Platinum": "0"
      },
      {
        "Name": "Axi T4 Intact",
        "Platinum": "2"
      },
      {
        "Name": "Axi T4 Radiant",
        "Platinum": "0"
      },
      {
        "Name": "Axi T5 Exceptional",
        "Platinum": "0"
      },
      {
        "Name": "Axi T5 Flawless",
        "Platinum": "0"
      },
      {
        "Name": "Axi T5 Intact",
        "Platinum": "0"
      },
      {
        "Name": "Axi T5 Radiant",
        "Platinum": "0"
      },
      {
        "Name": "Axi V1 Exceptional",
        "Platinum": "0"
      },
      {
        "Name": "Axi V1 Flawless",
        "Platinum": "0"
      },
      {
        "Name": "Axi V1 Intact",
        "Platinum": "24"
      },
      {
        "Name": "Axi V1 Radiant",
        "Platinum": "49"
      },
      {
        "Name": "Axi V2 Exceptional",
        "Platinum": "0"
      },
      {
        "Name": "Axi V2 Flawless",
        "Platinum": "0"
      },
      {
        "Name": "Axi V2 Intact",
        "Platinum": "13"
      },
      {
        "Name": "Axi V2 Radiant",
        "Platinum": "0"
      },
      {
        "Name": "Axi V3 Exceptional",
        "Platinum": "0"
      },
      {
        "Name": "Axi V3 Flawless",
        "Platinum": "0"
      },
      {
        "Name": "Axi V3 Intact",
        "Platinum": "24"
      },
      {
        "Name": "Axi V3 Radiant",
        "Platinum": "0"
      },
      {
        "Name": "Axi V4 Exceptional",
        "Platinum": "0"
      },
      {
        "Name": "Axi V4 Flawless",
        "Platinum": "0"
      },
      {
        "Name": "Axi V4 Intact",
        "Platinum": "18"
      },
      {
        "Name": "Axi V4 Radiant",
        "Platinum": "0"
      },
      {
        "Name": "Axi V5 Exceptional",
        "Platinum": "0"
      },
      {
        "Name": "Axi V5 Flawless",
        "Platinum": "0"
      },
      {
        "Name": "Axi V5 Intact",
        "Platinum": "12"
      },
      {
        "Name": "Axi V5 Radiant",
        "Platinum": "0"
      },
      {
        "Name": "Axi V6 Exceptional",
        "Platinum": "0"
      },
      {
        "Name": "Axi V6 Flawless",
        "Platinum": "0"
      },
      {
        "Name": "Axi V6 Intact",
        "Platinum": "10"
      },
      {
        "Name": "Axi V6 Radiant",
        "Platinum": "0"
      },
      {
        "Name": "Axi V7 Exceptional",
        "Platinum": "0"
      },
      {
        "Name": "Axi V7 Flawless",
        "Platinum": "0"
      },
      {
        "Name": "Axi V7 Intact",
        "Platinum": "15"
      },
      {
        "Name": "Axi V7 Radiant",
        "Platinum": "0"
      },
      {
        "Name": "Axi V8 Exceptional",
        "Platinum": "28"
      },
      {
        "Name": "Axi V8 Flawless",
        "Platinum": "0"
      },
      {
        "Name": "Axi V8 Intact",
        "Platinum": "14"
      },
      {
        "Name": "Axi V8 Radiant",
        "Platinum": "17"
      },
      {
        "Name": "Axi V9 Exceptional",
        "Platinum": "0"
      },
      {
        "Name": "Axi V9 Flawless",
        "Platinum": "0"
      },
      {
        "Name": "Axi V9 Intact",
        "Platinum": "13"
      },
      {
        "Name": "Axi V9 Radiant",
        "Platinum": "0"
      },
      {
        "Name": "Axi W1 Exceptional",
        "Platinum": "0"
      },
      {
        "Name": "Axi W1 Flawless",
        "Platinum": "10"
      },
      {
        "Name": "Axi W1 Intact",
        "Platinum": "2"
      },
      {
        "Name": "Axi W1 Radiant",
        "Platinum": "7"
      },
      {
        "Name": "Ayr Ayatan Sculpture",
        "Platinum": "4"
      },
      {
        "Name": "Balefire Surge",
        "Platinum": "14"
      },
      {
        "Name": "Ballista Measure",
        "Platinum": "149"
      },
      {
        "Name": "Ballistic Bullseye",
        "Platinum": "13"
      },
      {
        "Name": "Ballistica Prime Blueprint",
        "Platinum": "10"
      },
      {
        "Name": "Ballistica Prime Lower Limb",
        "Platinum": "5"
      },
      {
        "Name": "Ballistica Prime Receiver",
        "Platinum": "4"
      },
      {
        "Name": "Ballistica Prime Set",
        "Platinum": "43"
      },
      {
        "Name": "Ballistica Prime String",
        "Platinum": "7"
      },
      {
        "Name": "Ballistica Prime Upper Limb",
        "Platinum": "5"
      },
      {
        "Name": "Bane of Corpus",
        "Platinum": "4"
      },
      {
        "Name": "Bane of Corrupted",
        "Platinum": "12"
      },
      {
        "Name": "Bane of Grineer",
        "Platinum": "4"
      },
      {
        "Name": "Bane of Infested",
        "Platinum": "5"
      },
      {
        "Name": "Banshee Prime Blueprint",
        "Platinum": "5"
      },
      {
        "Name": "Banshee Prime Chassis",
        "Platinum": "23"
      },
      {
        "Name": "Banshee Prime Neuroptics",
        "Platinum": "4"
      },
      {
        "Name": "Banshee Prime Set",
        "Platinum": "79"
      },
      {
        "Name": "Banshee Prime Systems",
        "Platinum": "41"
      },
      {
        "Name": "Barbisteo (Large)",
        "Platinum": "0"
      },
      {
        "Name": "Barbisteo (Medium)",
        "Platinum": "0"
      },
      {
        "Name": "Barbisteo (Small)",
        "Platinum": "0"
      },
      {
        "Name": "Barrel Diffusion",
        "Platinum": "5"
      },
      {
        "Name": "Basic Brickie",
        "Platinum": "1"
      },
      {
        "Name": "Basic Charamote",
        "Platinum": "1"
      },
      {
        "Name": "Basic Echowinder",
        "Platinum": "1"
      },
      {
        "Name": "Basic Eye-Eye",
        "Platinum": "1"
      },
      {
        "Name": "Basic Kriller",
        "Platinum": "1"
      },
      {
        "Name": "Basic Longwinder",
        "Platinum": "2"
      },
      {
        "Name": "Basic Mirewinder",
        "Platinum": "1"
      },
      {
        "Name": "Basic Recaster",
        "Platinum": "1"
      },
      {
        "Name": "Basic Sapcaddy",
        "Platinum": "1"
      },
      {
        "Name": "Basic Scrubber",
        "Platinum": "1"
      },
      {
        "Name": "Basic Synathid",
        "Platinum": "2"
      },
      {
        "Name": "Basic Tink",
        "Platinum": "1"
      },
      {
        "Name": "Basic Tromyzon",
        "Platinum": "2"
      },
      {
        "Name": "Battering Maneuver",
        "Platinum": "6"
      },
      {
        "Name": "Battle Forge",
        "Platinum": "6"
      },
      {
        "Name": "Battle Stations",
        "Platinum": "27"
      },
      {
        "Name": "Baza Prime Barrel",
        "Platinum": "3"
      },
      {
        "Name": "Baza Prime Blueprint",
        "Platinum": "7"
      },
      {
        "Name": "Baza Prime Receiver",
        "Platinum": "2"
      },
      {
        "Name": "Baza Prime Set",
        "Platinum": "35"
      },
      {
        "Name": "Baza Prime Stock",
        "Platinum": "17"
      },
      {
        "Name": "Beguiling Lantern",
        "Platinum": "15"
      },
      {
        "Name": "Berserker",
        "Platinum": "10"
      },
      {
        "Name": "Beryl antitoxin",
        "Platinum": "0"
      },
      {
        "Name": "Bhisaj-Bal",
        "Platinum": "20"
      },
      {
        "Name": "Bite",
        "Platinum": "35"
      },
      {
        "Name": "Biting Piranha",
        "Platinum": "2"
      },
      {
        "Name": "Blackout Pulse",
        "Platinum": "8"
      },
      {
        "Name": "Blade of Truth",
        "Platinum": "13"
      },
      {
        "Name": "Bladed Rounds",
        "Platinum": "10"
      },
      {
        "Name": "Blast Shield",
        "Platinum": "0"
      },
      {
        "Name": "Blaze",
        "Platinum": "43"
      },
      {
        "Name": "Blazing Pillage",
        "Platinum": "13"
      },
      {
        "Name": "Blazing Steel",
        "Platinum": "7"
      },
      {
        "Name": "Bleeding Edge",
        "Platinum": "38"
      },
      {
        "Name": "Bleeding Willow",
        "Platinum": "5"
      },
      {
        "Name": "Blending Talons",
        "Platinum": "12"
      },
      {
        "Name": "Blind Justice",
        "Platinum": "3"
      },
      {
        "Name": "Blind Rage",
        "Platinum": "25"
      },
      {
        "Name": "Blind Shot",
        "Platinum": "6"
      },
      {
        "Name": "Blinding Reave",
        "Platinum": "12"
      },
      {
        "Name": "Blood for Ammo",
        "Platinum": "2"
      },
      {
        "Name": "Blood for Energy",
        "Platinum": "9"
      },
      {
        "Name": "Blood for Life",
        "Platinum": "4"
      },
      {
        "Name": "Blood Forge",
        "Platinum": "12"
      },
      {
        "Name": "Blood Rush",
        "Platinum": "16"
      },
      {
        "Name": "Blunderbuss",
        "Platinum": "2"
      },
      {
        "Name": "Bo Prime Blueprint",
        "Platinum": "10"
      },
      {
        "Name": "Bo Prime Handle",
        "Platinum": "25"
      },
      {
        "Name": "Bo Prime Ornament",
        "Platinum": "82"
      },
      {
        "Name": "Bo Prime Set",
        "Platinum": "202"
      },
      {
        "Name": "Boar Prime Barrel",
        "Platinum": "16"
      },
      {
        "Name": "Boar Prime Blueprint",
        "Platinum": "10"
      },
      {
        "Name": "Boar Prime Receiver",
        "Platinum": "8"
      },
      {
        "Name": "Boar Prime Set",
        "Platinum": "98"
      },
      {
        "Name": "Boar Prime Stock",
        "Platinum": "47"
      },
      {
        "Name": "Body Count",
        "Platinum": "14"
      },
      {
        "Name": "Boltor Prime Barrel",
        "Platinum": "15"
      },
      {
        "Name": "Boltor Prime Blueprint",
        "Platinum": "26"
      },
      {
        "Name": "Boltor Prime Receiver",
        "Platinum": "9"
      },
      {
        "Name": "Boltor Prime Set",
        "Platinum": "77"
      },
      {
        "Name": "Boltor Prime Stock",
        "Platinum": "11"
      },
      {
        "Name": "Bomb The Landin'",
        "Platinum": "20"
      },
      {
        "Name": "Bore",
        "Platinum": "11"
      },
      {
        "Name": "Botanist",
        "Platinum": "53"
      },
      {
        "Name": "Bounty Hunter",
        "Platinum": "0"
      },
      {
        "Name": "Brain Storm (Grakata)",
        "Platinum": "60717"
      },
      {
        "Name": "Braton Prime Barrel",
        "Platinum": "3"
      },
      {
        "Name": "Braton Prime Blueprint",
        "Platinum": "2"
      },
      {
        "Name": "Braton Prime Receiver",
        "Platinum": "2"
      },
      {
        "Name": "Braton Prime Set",
        "Platinum": "7"
      },
      {
        "Name": "Braton Prime Stock",
        "Platinum": "1"
      },
      {
        "Name": "Braton Vandal Barrel",
        "Platinum": "9"
      },
      {
        "Name": "Braton Vandal Blueprint",
        "Platinum": "103"
      },
      {
        "Name": "Braton Vandal Receiver",
        "Platinum": "13"
      },
      {
        "Name": "Braton Vandal Set",
        "Platinum": "235"
      },
      {
        "Name": "Braton Vandal Stock",
        "Platinum": "64"
      },
      {
        "Name": "Breach Adrenaline",
        "Platinum": "98"
      },
      {
        "Name": "Breach Loader",
        "Platinum": "8"
      },
      {
        "Name": "Breach Quanta",
        "Platinum": "8"
      },
      {
        "Name": "Brief Respite",
        "Platinum": "16"
      },
      {
        "Name": "Bright Purity",
        "Platinum": "13"
      },
      {
        "Name": "Broad Eye",
        "Platinum": "0"
      },
      {
        "Name": "Broken War Set",
        "Platinum": "73"
      },
      {
        "Name": "Bronco Prime Barrel",
        "Platinum": "4"
      },
      {
        "Name": "Bronco Prime Blueprint",
        "Platinum": "2"
      },
      {
        "Name": "Bronco Prime Receiver",
        "Platinum": "3"
      },
      {
        "Name": "Bronco Prime Set",
        "Platinum": "11"
      },
      {
        "Name": "Brutal Tide",
        "Platinum": "3"
      },
      {
        "Name": "Bulkhead",
        "Platinum": "7"
      },
      {
        "Name": "Bulkhead (Sigma)",
        "Platinum": "0"
      },
      {
        "Name": "Bullet Dance",
        "Platinum": "47"
      },
      {
        "Name": "Burdened Magazine",
        "Platinum": "3"
      },
      {
        "Name": "Burning Wasp",
        "Platinum": "3"
      },
      {
        "Name": "Bursting Mass",
        "Platinum": "36"
      },
      {
        "Name": "Burston Prime Barrel",
        "Platinum": "3"
      },
      {
        "Name": "Burston Prime Blueprint",
        "Platinum": "1"
      },
      {
        "Name": "Burston Prime Receiver",
        "Platinum": "1"
      },
      {
        "Name": "Burston Prime Set",
        "Platinum": "6"
      },
      {
        "Name": "Burston Prime Stock",
        "Platinum": "2"
      },
      {
        "Name": "Buzz Kill",
        "Platinum": "10"
      },
      {
        "Name": "Cabochon Embolos",
        "Platinum": "2"
      },
      {
        "Name": "Calculated Redirection",
        "Platinum": "18"
      },
      {
        "Name": "Calculated Shot",
        "Platinum": "0"
      },
      {
        "Name": "Calculated Spring",
        "Platinum": "5"
      },
      {
        "Name": "Calculated Victory",
        "Platinum": "0"
      },
      {
        "Name": "Calm & Frenzy",
        "Platinum": "13"
      },
      {
        "Name": "Capacitance",
        "Platinum": "11"
      },
      {
        "Name": "Carnis Carapace",
        "Platinum": "4"
      },
      {
        "Name": "Carnis Mandible",
        "Platinum": "3"
      },
      {
        "Name": "Carnis Stinger",
        "Platinum": "7"
      },
      {
        "Name": "Carrier Prime Blueprint",
        "Platinum": "9"
      },
      {
        "Name": "Carrier Prime Carapace",
        "Platinum": "10"
      },
      {
        "Name": "Carrier Prime Cerebrum",
        "Platinum": "33"
      },
      {
        "Name": "Carrier Prime Set",
        "Platinum": "79"
      },
      {
        "Name": "Carrier Prime Systems",
        "Platinum": "7"
      },
      {
        "Name": "Carving Mantis",
        "Platinum": "5"
      },
      {
        "Name": "Cataclysmic Continuum",
        "Platinum": "12"
      },
      {
        "Name": "Catalyzer Link",
        "Platinum": "4"
      },
      {
        "Name": "Catapult",
        "Platinum": "12"
      },
      {
        "Name": "Cat's Eye",
        "Platinum": "4"
      },
      {
        "Name": "Cautious Shot",
        "Platinum": "41"
      },
      {
        "Name": "Celestial Nightfall",
        "Platinum": "3"
      },
      {
        "Name": "Celestial Stomp",
        "Platinum": "13"
      },
      {
        "Name": "Centaur Aegis",
        "Platinum": "10"
      },
      {
        "Name": "Centaur Blade",
        "Platinum": "10"
      },
      {
        "Name": "Centaur Handle",
        "Platinum": "10"
      },
      {
        "Name": "Centaur Set",
        "Platinum": "49"
      },
      {
        "Name": "Cephalon Suda Augment Mod",
        "Platinum": "9"
      },
      {
        "Name": "Cernos Prime Blueprint",
        "Platinum": "4"
      },
      {
        "Name": "Cernos Prime Grip",
        "Platinum": "9"
      },
      {
        "Name": "Cernos Prime Lower Limb",
        "Platinum": "31"
      },
      {
        "Name": "Cernos Prime Set",
        "Platinum": "67"
      },
      {
        "Name": "Cernos Prime String",
        "Platinum": "6"
      },
      {
        "Name": "Cernos Prime Upper Limb",
        "Platinum": "7"
      },
      {
        "Name": "Cetus Scene",
        "Platinum": "27"
      },
      {
        "Name": "Chamber Of The Lotus Scene",
        "Platinum": "28"
      },
      {
        "Name": "Chaos Sphere",
        "Platinum": "14"
      },
      {
        "Name": "Charged Bullets",
        "Platinum": "13"
      },
      {
        "Name": "Charged Chamber",
        "Platinum": "5"
      },
      {
        "Name": "Charged Shell",
        "Platinum": "4"
      },
      {
        "Name": "Charm",
        "Platinum": "2"
      },
      {
        "Name": "Chesa Kubrow Imprint",
        "Platinum": "13"
      },
      {
        "Name": "Chilling Globe",
        "Platinum": "10"
      },
      {
        "Name": "Chilling Grasp",
        "Platinum": "4"
      },
      {
        "Name": "Chilling Reload",
        "Platinum": "3"
      },
      {
        "Name": "Chondricord (Large)",
        "Platinum": "0"
      },
      {
        "Name": "Chondricord (Medium)",
        "Platinum": "5"
      },
      {
        "Name": "Chondricord (Small)",
        "Platinum": "0"
      },
      {
        "Name": "Chroma Prime Blueprint",
        "Platinum": "5"
      },
      {
        "Name": "Chroma Prime Chassis",
        "Platinum": "4"
      },
      {
        "Name": "Chroma Prime Neuroptics",
        "Platinum": "12"
      },
      {
        "Name": "Chroma Prime Set",
        "Platinum": "62"
      },
      {
        "Name": "Chroma Prime Systems",
        "Platinum": "31"
      },
      {
        "Name": "Chromatic Blade",
        "Platinum": "10"
      },
      {
        "Name": "Citrine antitoxin",
        "Platinum": "0"
      },
      {
        "Name": "Clashing Forest",
        "Platinum": "3"
      },
      {
        "Name": "Cleanse Corpus",
        "Platinum": "4"
      },
      {
        "Name": "Cleanse Corrupted",
        "Platinum": "11"
      },
      {
        "Name": "Cleanse Grineer",
        "Platinum": "3"
      },
      {
        "Name": "Cleanse Infested",
        "Platinum": "2"
      },
      {
        "Name": "Cleaving Whirlwind",
        "Platinum": "3"
      },
      {
        "Name": "Coaction Drift",
        "Platinum": "8"
      },
      {
        "Name": "Coiling Viper",
        "Platinum": "3"
      },
      {
        "Name": "Cold Arrival",
        "Platinum": "0"
      },
      {
        "Name": "Cold Snap",
        "Platinum": "3"
      },
      {
        "Name": "Collision Force",
        "Platinum": "4"
      },
      {
        "Name": "Color Key Scene",
        "Platinum": "58"
      },
      {
        "Name": "Combat Discipline",
        "Platinum": "3"
      },
      {
        "Name": "Combo Fury",
        "Platinum": "34"
      },
      {
        "Name": "Combo Killer",
        "Platinum": "31"
      },
      {
        "Name": "Combustion Beam",
        "Platinum": "3"
      },
      {
        "Name": "Combustion Rounds",
        "Platinum": "8"
      },
      {
        "Name": "Comet Blast",
        "Platinum": "6"
      },
      {
        "Name": "Comet Rounds",
        "Platinum": "20"
      },
      {
        "Name": "Companion Weapon Riven Mod (Veiled)",
        "Platinum": "21"
      },
      {
        "Name": "Concealed Explosives",
        "Platinum": "3"
      },
      {
        "Name": "Concentrated Arrow",
        "Platinum": "13"
      },
      {
        "Name": "Concussion Rounds",
        "Platinum": "0"
      },
      {
        "Name": "Condition Overload",
        "Platinum": "8"
      },
      {
        "Name": "Conductor",
        "Platinum": "13"
      },
      {
        "Name": "Conic Nozzle",
        "Platinum": "6"
      },
      {
        "Name": "Constitution",
        "Platinum": "13"
      },
      {
        "Name": "Contagion Cloud",
        "Platinum": "11"
      },
      {
        "Name": "Contagious Spread",
        "Platinum": "4"
      },
      {
        "Name": "Contamination Casing",
        "Platinum": "14"
      },
      {
        "Name": "Continuity",
        "Platinum": "5"
      },
      {
        "Name": "Continuous Misery",
        "Platinum": "4"
      },
      {
        "Name": "Controlled Slide",
        "Platinum": "16"
      },
      {
        "Name": "Convulsion",
        "Platinum": "4"
      },
      {
        "Name": "Coolant Leak",
        "Platinum": "12"
      },
      {
        "Name": "Corinth Prime Barrel",
        "Platinum": "20"
      },
      {
        "Name": "Corinth Prime Blueprint",
        "Platinum": "2"
      },
      {
        "Name": "Corinth Prime Receiver",
        "Platinum": "3"
      },
      {
        "Name": "Corinth Prime Set",
        "Platinum": "35"
      },
      {
        "Name": "Corinth Prime Stock",
        "Platinum": "8"
      },
      {
        "Name": "Corpus Depository Scene",
        "Platinum": "3"
      },
      {
        "Name": "Corpus Gas City Conduit Scene",
        "Platinum": "25"
      },
      {
        "Name": "Corpus Ice Planet Wreckage Scene",
        "Platinum": "22"
      },
      {
        "Name": "Corpus Ship Bridge Scene",
        "Platinum": "5"
      },
      {
        "Name": "Corpus Ship Freight Scene",
        "Platinum": "0"
      },
      {
        "Name": "Corpus Ship Hangar Scene",
        "Platinum": "5"
      },
      {
        "Name": "Corpus Ship Orbital Cannon Scene",
        "Platinum": "4"
      },
      {
        "Name": "Corpus Void Key",
        "Platinum": "357"
      },
      {
        "Name": "Corroding Barrage",
        "Platinum": "13"
      },
      {
        "Name": "Corrosive Projection",
        "Platinum": "21"
      },
      {
        "Name": "Corrupt Charge",
        "Platinum": "9"
      },
      {
        "Name": "Corvas Barrel",
        "Platinum": "10"
      },
      {
        "Name": "Corvas Receiver",
        "Platinum": "10"
      },
      {
        "Name": "Corvas Set",
        "Platinum": "33"
      },
      {
        "Name": "Corvas Stock",
        "Platinum": "9"
      },
      {
        "Name": "Counter Pulse",
        "Platinum": "14"
      },
      {
        "Name": "Countermeasures",
        "Platinum": "7"
      },
      {
        "Name": "Counterweight",
        "Platinum": "0"
      },
      {
        "Name": "Covert Lethality",
        "Platinum": "4"
      },
      {
        "Name": "Crash Course",
        "Platinum": "5"
      },
      {
        "Name": "Crash Shot",
        "Platinum": "0"
      },
      {
        "Name": "Crashing Havoc",
        "Platinum": "2"
      },
      {
        "Name": "Crashing Timber",
        "Platinum": "2"
      },
      {
        "Name": "Creeping Bullseye",
        "Platinum": "3"
      },
      {
        "Name": "Creeping Terrify",
        "Platinum": "13"
      },
      {
        "Name": "Crescent Charge",
        "Platinum": "0"
      },
      {
        "Name": "Crescent Devolution",
        "Platinum": "0"
      },
      {
        "Name": "Cressa's Garrison Scene",
        "Platinum": "42"
      },
      {
        "Name": "Crimson Dervish",
        "Platinum": "8"
      },
      {
        "Name": "Critical Deceleration",
        "Platinum": "3"
      },
      {
        "Name": "Critical Delay",
        "Platinum": "4"
      },
      {
        "Name": "Critical Focus",
        "Platinum": "30"
      },
      {
        "Name": "Critical Surge",
        "Platinum": "12"
      },
      {
        "Name": "Crossing Snakes",
        "Platinum": "2"
      },
      {
        "Name": "Crowd Dispersion",
        "Platinum": "9"
      },
      {
        "Name": "Cruising Speed",
        "Platinum": "42"
      },
      {
        "Name": "Crushing Ruin",
        "Platinum": "8"
      },
      {
        "Name": "Cryo Coating",
        "Platinum": "13"
      },
      {
        "Name": "Cryo Rounds",
        "Platinum": "3"
      },
      {
        "Name": "Cryptosuctus (Large)",
        "Platinum": "0"
      },
      {
        "Name": "Cryptosuctus (Medium)",
        "Platinum": "0"
      },
      {
        "Name": "Cryptosuctus (Small)",
        "Platinum": "0"
      },
      {
        "Name": "Cunning Aspect",
        "Platinum": "2"
      },
      {
        "Name": "Cunning Drift",
        "Platinum": "8"
      },
      {
        "Name": "Curative Undertow",
        "Platinum": "13"
      },
      {
        "Name": "Cutting Edge",
        "Platinum": "44"
      },
      {
        "Name": "Cyan Ayatan Star",
        "Platinum": "1"
      },
      {
        "Name": "Cyclone Kraken",
        "Platinum": "15"
      },
      {
        "Name": "Cyngas Barrel",
        "Platinum": "10"
      },
      {
        "Name": "Cyngas Receiver",
        "Platinum": "10"
      },
      {
        "Name": "Cyngas Set",
        "Platinum": "55"
      },
      {
        "Name": "Cyngas Stock",
        "Platinum": "11"
      },
      {
        "Name": "Dakra Prime Blade",
        "Platinum": "21"
      },
      {
        "Name": "Dakra Prime Blueprint",
        "Platinum": "9"
      },
      {
        "Name": "Dakra Prime Handle",
        "Platinum": "10"
      },
      {
        "Name": "Dakra Prime Set",
        "Platinum": "50"
      },
      {
        "Name": "Damaged Necramech Casing",
        "Platinum": "1"
      },
      {
        "Name": "Damaged Necramech Engine",
        "Platinum": "7"
      },
      {
        "Name": "Damaged Necramech Pod",
        "Platinum": "7"
      },
      {
        "Name": "Damaged Necramech Set",
        "Platinum": "10"
      },
      {
        "Name": "Damaged Necramech Weapon Barrel",
        "Platinum": "68"
      },
      {
        "Name": "Damaged Necramech Weapon Pod",
        "Platinum": "1"
      },
      {
        "Name": "Damaged Necramech Weapon Receiver",
        "Platinum": "70"
      },
      {
        "Name": "Damaged Necramech Weapon Set",
        "Platinum": "264"
      },
      {
        "Name": "Damaged Necramech Weapon Stock",
        "Platinum": "69"
      },
      {
        "Name": "Damzav-Vati",
        "Platinum": "19"
      },
      {
        "Name": "Dead Eye",
        "Platinum": "21"
      },
      {
        "Name": "Deadly Efficiency",
        "Platinum": "9"
      },
      {
        "Name": "Deadly Maneuvers",
        "Platinum": "8"
      },
      {
        "Name": "Deadly Sequence",
        "Platinum": "14"
      },
      {
        "Name": "Death Blossom",
        "Platinum": "8"
      },
      {
        "Name": "Deceptive Bond",
        "Platinum": "15"
      },
      {
        "Name": "Decisive Judgement",
        "Platinum": "5"
      },
      {
        "Name": "Deck 12 Scene",
        "Platinum": "4"
      },
      {
        "Name": "Decurion Barrel",
        "Platinum": "10"
      },
      {
        "Name": "Decurion Receiver",
        "Platinum": "10"
      },
      {
        "Name": "Deep Freeze",
        "Platinum": "5"
      },
      {
        "Name": "Deep Hold",
        "Platinum": "4"
      },
      {
        "Name": "Defiled Reckoning",
        "Platinum": "0"
      },
      {
        "Name": "Defiled Snapdragon",
        "Platinum": "3"
      },
      {
        "Name": "Deft Tempo",
        "Platinum": "9"
      },
      {
        "Name": "Deimos Breakthrough Scene",
        "Platinum": "101"
      },
      {
        "Name": "Deimos Cambion Drift Scene",
        "Platinum": "52"
      },
      {
        "Name": "Deimos Catacombs Scene",
        "Platinum": "97"
      },
      {
        "Name": "Deimos Chamber Scene",
        "Platinum": "13"
      },
      {
        "Name": "Deimos Downfall Scene",
        "Platinum": "98"
      },
      {
        "Name": "Deimos Tunnels Scene",
        "Platinum": "118"
      },
      {
        "Name": "Deimos Underground Scene",
        "Platinum": "114"
      },
      {
        "Name": "Deimos Vault Scene",
        "Platinum": "70"
      },
      {
        "Name": "Delta Beacon",
        "Platinum": "8"
      },
      {
        "Name": "Depleted Reload",
        "Platinum": "4"
      },
      {
        "Name": "Dera Vandal Barrel",
        "Platinum": "11"
      },
      {
        "Name": "Dera Vandal Blueprint",
        "Platinum": "6"
      },
      {
        "Name": "Dera Vandal Receiver",
        "Platinum": "10"
      },
      {
        "Name": "Dera Vandal Set",
        "Platinum": "33"
      },
      {
        "Name": "Dera Vandal Stock",
        "Platinum": "11"
      },
      {
        "Name": "Desiccation's Curse",
        "Platinum": "14"
      },
      {
        "Name": "Despoil",
        "Platinum": "10"
      },
      {
        "Name": "Destreza Prime Blade",
        "Platinum": "29"
      },
      {
        "Name": "Destreza Prime Blueprint",
        "Platinum": "2"
      },
      {
        "Name": "Destreza Prime Handle",
        "Platinum": "5"
      },
      {
        "Name": "Destreza Prime Set",
        "Platinum": "40"
      },
      {
        "Name": "Detect Vulnerability",
        "Platinum": "52"
      },
      {
        "Name": "Dethcube Prime Blueprint",
        "Platinum": "9"
      },
      {
        "Name": "Dethcube Prime Carapace",
        "Platinum": "2"
      },
      {
        "Name": "Dethcube Prime Cerebrum",
        "Platinum": "9"
      },
      {
        "Name": "Dethcube Prime Set",
        "Platinum": "23"
      },
      {
        "Name": "Dethcube Prime Systems",
        "Platinum": "2"
      },
      {
        "Name": "Diamond Skin",
        "Platinum": "1"
      },
      {
        "Name": "Dig",
        "Platinum": "12"
      },
      {
        "Name": "Directed Convergence",
        "Platinum": "10"
      },
      {
        "Name": "Disarming Purity",
        "Platinum": "12"
      },
      {
        "Name": "Discharge Strike",
        "Platinum": "0"
      },
      {
        "Name": "Dispatch Overdrive",
        "Platinum": "5"
      },
      {
        "Name": "Disruptor",
        "Platinum": "0"
      },
      {
        "Name": "Dividing Blades",
        "Platinum": "2"
      },
      {
        "Name": "Dizzying Rounds",
        "Platinum": "10"
      },
      {
        "Name": "Dog Days Scene",
        "Platinum": "104"
      },
      {
        "Name": "Double Tap",
        "Platinum": "16"
      },
      {
        "Name": "Double-Barrel Drift",
        "Platinum": "9"
      },
      {
        "Name": "Draining Bite",
        "Platinum": "17"
      },
      {
        "Name": "Draining Gloom",
        "Platinum": "8"
      },
      {
        "Name": "Dread Ward",
        "Platinum": "13"
      },
      {
        "Name": "Drifting Contact",
        "Platinum": "5"
      },
      {
        "Name": "Dual Decurion Set",
        "Platinum": "40"
      },
      {
        "Name": "Dual Kamas Prime Blade",
        "Platinum": "31"
      },
      {
        "Name": "Dual Kamas Prime Blueprint",
        "Platinum": "4"
      },
      {
        "Name": "Dual Kamas Prime Handle",
        "Platinum": "7"
      },
      {
        "Name": "Dual Kamas Prime Set",
        "Platinum": "92"
      },
      {
        "Name": "Dual Rounds",
        "Platinum": "42"
      },
      {
        "Name": "Duality",
        "Platinum": "13"
      },
      {
        "Name": "Duroid (Large)",
        "Platinum": "0"
      },
      {
        "Name": "Duroid (Medium)",
        "Platinum": "0"
      },
      {
        "Name": "Duroid (Small)",
        "Platinum": "0"
      },
      {
        "Name": "Eagle Eye",
        "Platinum": "2"
      },
      {
        "Name": "Efficient Beams",
        "Platinum": "67"
      },
      {
        "Name": "Efficient Transferral",
        "Platinum": "6"
      },
      {
        "Name": "Eidolon Lens Blueprint",
        "Platinum": "15"
      },
      {
        "Name": "Eidolon Madurai Lens",
        "Platinum": "64"
      },
      {
        "Name": "Eidolon Naramon Lens",
        "Platinum": "65"
      },
      {
        "Name": "Eidolon Unairu Lens",
        "Platinum": "61"
      },
      {
        "Name": "Eidolon Vazarin Lens",
        "Platinum": "59"
      },
      {
        "Name": "Eidolon Zenurik Lens",
        "Platinum": "67"
      },
      {
        "Name": "Eject Magazine",
        "Platinum": "16"
      },
      {
        "Name": "Electrified Barrel",
        "Platinum": "14"
      },
      {
        "Name": "Electro Pulse",
        "Platinum": "0"
      },
      {
        "Name": "Electromagnetic Shielding",
        "Platinum": "5"
      },
      {
        "Name": "Elemental Sandstorm",
        "Platinum": "14"
      },
      {
        "Name": "Eleventh Storm",
        "Platinum": "4"
      },
      {
        "Name": "Elytron Harness",
        "Platinum": "27"
      },
      {
        "Name": "Elytron Set",
        "Platinum": "55"
      },
      {
        "Name": "Elytron Systems",
        "Platinum": "0"
      },
      {
        "Name": "Elytron Wings",
        "Platinum": "24"
      },
      {
        "Name": "Embedded Catalyzer",
        "Platinum": "5"
      },
      {
        "Name": "Ember Prime Blueprint",
        "Platinum": "23"
      },
      {
        "Name": "Ember Prime Chassis",
        "Platinum": "7"
      },
      {
        "Name": "Ember Prime Neuroptics",
        "Platinum": "9"
      },
      {
        "Name": "Ember Prime Set",
        "Platinum": "65"
      },
      {
        "Name": "Ember Prime Systems",
        "Platinum": "10"
      },
      {
        "Name": "Emergent Aftermath",
        "Platinum": "14"
      },
      {
        "Name": "EMP Aura",
        "Platinum": "10"
      },
      {
        "Name": "Empowered Blades",
        "Platinum": "24"
      },
      {
        "Name": "Empowered Quiver",
        "Platinum": "14"
      },
      {
        "Name": "Endless Lullaby",
        "Platinum": "12"
      },
      {
        "Name": "Endoparasitic Vector",
        "Platinum": "0"
      },
      {
        "Name": "Endurance Drift",
        "Platinum": "3"
      },
      {
        "Name": "Enduring Affliction",
        "Platinum": "9"
      },
      {
        "Name": "Enduring Strike",
        "Platinum": "6"
      },
      {
        "Name": "Enemy Radar",
        "Platinum": "23"
      },
      {
        "Name": "Enemy Sense",
        "Platinum": "4"
      },
      {
        "Name": "Energizing Shot",
        "Platinum": "34"
      },
      {
        "Name": "Energy Amplifier",
        "Platinum": "21"
      },
      {
        "Name": "Energy Channel",
        "Platinum": "3"
      },
      {
        "Name": "Energy Conversion",
        "Platinum": "48"
      },
      {
        "Name": "Energy Field",
        "Platinum": "6"
      },
      {
        "Name": "Energy Generator",
        "Platinum": "51"
      },
      {
        "Name": "Energy Inversion",
        "Platinum": "4"
      },
      {
        "Name": "Energy Siphon",
        "Platinum": "20"
      },
      {
        "Name": "Energy Transfer",
        "Platinum": "14"
      },
      {
        "Name": "Enguard",
        "Platinum": "0"
      },
      {
        "Name": "Enhanced Durability",
        "Platinum": "5"
      },
      {
        "Name": "Enhanced Vitality",
        "Platinum": "23"
      },
      {
        "Name": "Enraged",
        "Platinum": "14"
      },
      {
        "Name": "Entropy Burst",
        "Platinum": "12"
      },
      {
        "Name": "Entropy Detonation",
        "Platinum": "12"
      },
      {
        "Name": "Entropy Flight",
        "Platinum": "10"
      },
      {
        "Name": "Entropy Spike",
        "Platinum": "13"
      },
      {
        "Name": "Enveloping Cloud",
        "Platinum": "12"
      },
      {
        "Name": "Equilibrium",
        "Platinum": "18"
      },
      {
        "Name": "Equinox Prime Blueprint",
        "Platinum": "4"
      },
      {
        "Name": "Equinox Prime Chassis",
        "Platinum": "2"
      },
      {
        "Name": "Equinox Prime Neuroptics",
        "Platinum": "5"
      },
      {
        "Name": "Equinox Prime Set",
        "Platinum": "30"
      },
      {
        "Name": "Equinox Prime Systems",
        "Platinum": "12"
      },
      {
        "Name": "Ergo's Boardroom Scene",
        "Platinum": "35"
      },
      {
        "Name": "Eroding Blight",
        "Platinum": "11"
      },
      {
        "Name": "Escape Velocity",
        "Platinum": "12"
      },
      {
        "Name": "Esher Devar",
        "Platinum": "1"
      },
      {
        "Name": "Eternal War",
        "Platinum": "13"
      },
      {
        "Name": "Euphona Prime Barrel",
        "Platinum": "5"
      },
      {
        "Name": "Euphona Prime Blueprint",
        "Platinum": "3"
      },
      {
        "Name": "Euphona Prime Receiver",
        "Platinum": "74"
      },
      {
        "Name": "Euphona Prime Set",
        "Platinum": "82"
      },
      {
        "Name": "Everlasting Ward",
        "Platinum": "12"
      },
      {
        "Name": "Exodia Brave",
        "Platinum": "53"
      },
      {
        "Name": "Exodia Contagion",
        "Platinum": "43"
      },
      {
        "Name": "Exodia Epidemic",
        "Platinum": "29"
      },
      {
        "Name": "Exodia Force",
        "Platinum": "48"
      },
      {
        "Name": "Exodia Hunt",
        "Platinum": "57"
      },
      {
        "Name": "Exodia Might",
        "Platinum": "46"
      },
      {
        "Name": "Exodia Triumph",
        "Platinum": "60"
      },
      {
        "Name": "Exodia Valor",
        "Platinum": "58"
      },
      {
        "Name": "Exothermic",
        "Platinum": "11"
      },
      {
        "Name": "Expel Corpus",
        "Platinum": "11"
      },
      {
        "Name": "Expel Corrupted",
        "Platinum": "11"
      },
      {
        "Name": "Expel Grineer",
        "Platinum": "6"
      },
      {
        "Name": "Expel Infested",
        "Platinum": "4"
      },
      {
        "Name": "Explosive Demise",
        "Platinum": "0"
      },
      {
        "Name": "Explosive Legerdemain",
        "Platinum": "10"
      },
      {
        "Name": "Exposing Harpoon",
        "Platinum": "26"
      },
      {
        "Name": "Extend",
        "Platinum": "4"
      },
      {
        "Name": "Extreme Velocity",
        "Platinum": "16"
      },
      {
        "Name": "Faceted Tiametrite",
        "Platinum": "1"
      },
      {
        "Name": "Failsafe",
        "Platinum": "3"
      },
      {
        "Name": "Fang Prime Blade",
        "Platinum": "2"
      },
      {
        "Name": "Fang Prime Blueprint",
        "Platinum": "1"
      },
      {
        "Name": "Fang Prime Handle",
        "Platinum": "4"
      },
      {
        "Name": "Fang Prime Set",
        "Platinum": "9"
      },
      {
        "Name": "Fanged Fusillade",
        "Platinum": "9"
      },
      {
        "Name": "FASS",
        "Platinum": "9"
      },
      {
        "Name": "Fast Deflection",
        "Platinum": "7"
      },
      {
        "Name": "Fast Hands",
        "Platinum": "1"
      },
      {
        "Name": "Fatal Acceleration",
        "Platinum": "2"
      },
      {
        "Name": "Fatal Attraction",
        "Platinum": "5"
      },
      {
        "Name": "Fatal Teleport",
        "Platinum": "11"
      },
      {
        "Name": "Fateful Truth",
        "Platinum": "23"
      },
      {
        "Name": "Feathered Arrows",
        "Platinum": "0"
      },
      {
        "Name": "Ferocity",
        "Platinum": "8"
      },
      {
        "Name": "Fetch",
        "Platinum": "3"
      },
      {
        "Name": "Fever Strike",
        "Platinum": "4"
      },
      {
        "Name": "Fiery Phoenix",
        "Platinum": "8"
      },
      {
        "Name": "Final Act",
        "Platinum": "8"
      },
      {
        "Name": "Final Harbinger",
        "Platinum": "14"
      },
      {
        "Name": "Final Tap",
        "Platinum": "0"
      },
      {
        "Name": "Finishing Touch",
        "Platinum": "2"
      },
      {
        "Name": "Fire Suppression",
        "Platinum": "7"
      },
      {
        "Name": "Fireball Frenzy",
        "Platinum": "11"
      },
      {
        "Name": "Fired Up",
        "Platinum": "3"
      },
      {
        "Name": "Firestorm",
        "Platinum": "4"
      },
      {
        "Name": "Firewalker",
        "Platinum": "25"
      },
      {
        "Name": "Flailing Branch",
        "Platinum": "4"
      },
      {
        "Name": "Flak Shot",
        "Platinum": "0"
      },
      {
        "Name": "Flame Gland",
        "Platinum": "16"
      },
      {
        "Name": "Flame Repellent",
        "Platinum": "1"
      },
      {
        "Name": "Flechette",
        "Platinum": "1"
      },
      {
        "Name": "Fleeting Expertise",
        "Platinum": "17"
      },
      {
        "Name": "Flow",
        "Platinum": "3"
      },
      {
        "Name": "Flow Burn",
        "Platinum": "10"
      },
      {
        "Name": "Fluctus Barrel",
        "Platinum": "10"
      },
      {
        "Name": "Fluctus Limbs",
        "Platinum": "9"
      },
      {
        "Name": "Fluctus Set",
        "Platinum": "45"
      },
      {
        "Name": "Fluctus Stock",
        "Platinum": "9"
      },
      {
        "Name": "Flux Overdrive",
        "Platinum": "2"
      },
      {
        "Name": "Focus Energy",
        "Platinum": "7"
      },
      {
        "Name": "Focused Acceleration",
        "Platinum": "10"
      },
      {
        "Name": "Focused Defense",
        "Platinum": "5"
      },
      {
        "Name": "Follow Through",
        "Platinum": "0"
      },
      {
        "Name": "Fomorian Accelerant",
        "Platinum": "9"
      },
      {
        "Name": "Form Up",
        "Platinum": "5"
      },
      {
        "Name": "Fortitude",
        "Platinum": "3"
      },
      {
        "Name": "Fortuna Scene",
        "Platinum": "38"
      },
      {
        "Name": "Forward Artillery",
        "Platinum": "9"
      },
      {
        "Name": "Four Riders",
        "Platinum": "10"
      },
      {
        "Name": "Fracturing Crush",
        "Platinum": "14"
      },
      {
        "Name": "Fracturing Wind",
        "Platinum": "1"
      },
      {
        "Name": "Fragor Prime Blueprint",
        "Platinum": "8"
      },
      {
        "Name": "Fragor Prime Handle",
        "Platinum": "10"
      },
      {
        "Name": "Fragor Prime Head",
        "Platinum": "9"
      },
      {
        "Name": "Fragor Prime Set",
        "Platinum": "36"
      },
      {
        "Name": "Frail Momentum",
        "Platinum": "4"
      },
      {
        "Name": "Freeze Force",
        "Platinum": "12"
      },
      {
        "Name": "Frigid Blast",
        "Platinum": "8"
      },
      {
        "Name": "Frost Jaw",
        "Platinum": "6"
      },
      {
        "Name": "Frost Prime Blueprint",
        "Platinum": "32"
      },
      {
        "Name": "Frost Prime Chassis",
        "Platinum": "9"
      },
      {
        "Name": "Frost Prime Neuroptics",
        "Platinum": "5"
      },
      {
        "Name": "Frost Prime Set",
        "Platinum": "67"
      },
      {
        "Name": "Frost Prime Systems",
        "Platinum": "10"
      },
      {
        "Name": "Frostbite",
        "Platinum": "9"
      },
      {
        "Name": "Full Capacity",
        "Platinum": "5"
      },
      {
        "Name": "Full Contact",
        "Platinum": "5"
      },
      {
        "Name": "Fulmination",
        "Platinum": "29"
      },
      {
        "Name": "Funnel Clouds",
        "Platinum": "15"
      },
      {
        "Name": "Furax Wraith Blueprint",
        "Platinum": "5"
      },
      {
        "Name": "Furax Wraith Left Gauntlet",
        "Platinum": "7"
      },
      {
        "Name": "Furax Wraith Right Gauntlet",
        "Platinum": "8"
      },
      {
        "Name": "Furax Wraith Set",
        "Platinum": "22"
      },
      {
        "Name": "Furious Javelin",
        "Platinum": "12"
      },
      {
        "Name": "Furor",
        "Platinum": "3"
      },
      {
        "Name": "Fury",
        "Platinum": "5"
      },
      {
        "Name": "Gaia's Tragedy",
        "Platinum": "2"
      },
      {
        "Name": "Galatine Prime Blade",
        "Platinum": "4"
      },
      {
        "Name": "Galatine Prime Blueprint",
        "Platinum": "27"
      },
      {
        "Name": "Galatine Prime Handle",
        "Platinum": "4"
      },
      {
        "Name": "Galatine Prime Set",
        "Platinum": "40"
      },
      {
        "Name": "Gale Kick",
        "Platinum": "19"
      },
      {
        "Name": "Galvanized Blade",
        "Platinum": "6"
      },
      {
        "Name": "Gamma Beacon",
        "Platinum": "60"
      },
      {
        "Name": "Gas City Alad's Laboratory Scene",
        "Platinum": "5"
      },
      {
        "Name": "Gas City Central Drop Scene",
        "Platinum": "0"
      },
      {
        "Name": "Gas City Cloud Vista Scene",
        "Platinum": "3"
      },
      {
        "Name": "Gas City Corridors Scene",
        "Platinum": "3"
      },
      {
        "Name": "Gas City Dead Exit Scene",
        "Platinum": "51"
      },
      {
        "Name": "Gas City Element Distribution Scene",
        "Platinum": "0"
      },
      {
        "Name": "Gas City Elemental Distribution Scene",
        "Platinum": "7"
      },
      {
        "Name": "Gas City Elemental Refinement Scene",
        "Platinum": "5"
      },
      {
        "Name": "Gas City Lifts Scene",
        "Platinum": "65"
      },
      {
        "Name": "Gas City Lobby Scene",
        "Platinum": "2"
      },
      {
        "Name": "Gas City Lower Foyer Scene",
        "Platinum": "190"
      },
      {
        "Name": "Gas City Regulators Scene",
        "Platinum": "5"
      },
      {
        "Name": "Gas City Upper Logistics Scene",
        "Platinum": "3"
      },
      {
        "Name": "Gas City Walkway Scene",
        "Platinum": "3"
      },
      {
        "Name": "Gemini Cross",
        "Platinum": "2"
      },
      {
        "Name": "Ghost",
        "Platinum": "749"
      },
      {
        "Name": "Gilded Truth",
        "Platinum": "10"
      },
      {
        "Name": "Glacial Edge",
        "Platinum": "5"
      },
      {
        "Name": "Gladiator Aegis",
        "Platinum": "5"
      },
      {
        "Name": "Gladiator Finesse",
        "Platinum": "8"
      },
      {
        "Name": "Gladiator Might",
        "Platinum": "20"
      },
      {
        "Name": "Gladiator Resolve",
        "Platinum": "8"
      },
      {
        "Name": "Gladiator Rush",
        "Platinum": "5"
      },
      {
        "Name": "Gladiator Vice",
        "Platinum": "16"
      },
      {
        "Name": "Glaive Prime Blade",
        "Platinum": "7"
      },
      {
        "Name": "Glaive Prime Blueprint",
        "Platinum": "21"
      },
      {
        "Name": "Glaive Prime Disc",
        "Platinum": "6"
      },
      {
        "Name": "Glaive Prime Set",
        "Platinum": "51"
      },
      {
        "Name": "Glaxion Vandal",
        "Platinum": "76"
      },
      {
        "Name": "Gleaming Blight",
        "Platinum": "11"
      },
      {
        "Name": "Gleaming Talon",
        "Platinum": "10"
      },
      {
        "Name": "Glutinox (Large)",
        "Platinum": "9"
      },
      {
        "Name": "Glutinox (Medium)",
        "Platinum": "0"
      },
      {
        "Name": "Glutinox (Small)",
        "Platinum": "0"
      },
      {
        "Name": "Gnashing Payara",
        "Platinum": "3"
      },
      {
        "Name": "Goblite Tears",
        "Platinum": "1"
      },
      {
        "Name": "Gorgon Frenzy",
        "Platinum": "4"
      },
      {
        "Name": "Gorgon Wraith Barrel",
        "Platinum": "3"
      },
      {
        "Name": "Gorgon Wraith Blueprint",
        "Platinum": "3"
      },
      {
        "Name": "Gorgon Wraith Receiver",
        "Platinum": "4"
      },
      {
        "Name": "Gorgon Wraith Set",
        "Platinum": "9"
      },
      {
        "Name": "Gorgon Wraith Stock",
        "Platinum": "4"
      },
      {
        "Name": "Gram Prime Blade",
        "Platinum": "3"
      },
      {
        "Name": "Gram Prime Blueprint",
        "Platinum": "7"
      },
      {
        "Name": "Gram Prime Handle",
        "Platinum": "21"
      },
      {
        "Name": "Gram Prime Set",
        "Platinum": "36"
      },
      {
        "Name": "Granum Void Scene",
        "Platinum": "9"
      },
      {
        "Name": "Greedy Pull",
        "Platinum": "13"
      },
      {
        "Name": "Grendel Chassis Locator",
        "Platinum": "17"
      },
      {
        "Name": "Grendel Neuroptics Locator",
        "Platinum": "16"
      },
      {
        "Name": "Grendel Systems Locator",
        "Platinum": "18"
      },
      {
        "Name": "Grim Fury",
        "Platinum": "4"
      },
      {
        "Name": "Grineer Forest Factory Scene",
        "Platinum": "14"
      },
      {
        "Name": "Grineer Forest Industry Scene",
        "Platinum": "14"
      },
      {
        "Name": "Grineer Forest Water Pump Scene",
        "Platinum": "15"
      },
      {
        "Name": "Grineer Galleon Cargo Scene",
        "Platinum": "0"
      },
      {
        "Name": "Grineer Sealab Centrifuge Scene",
        "Platinum": "2"
      },
      {
        "Name": "Grineer Settlement Artillery Scene",
        "Platinum": "7"
      },
      {
        "Name": "Grineer Settlement Reactor Scene",
        "Platinum": "33"
      },
      {
        "Name": "Grineer Shipyards Manufactory Scene",
        "Platinum": "0"
      },
      {
        "Name": "Grinloked",
        "Platinum": "19"
      },
      {
        "Name": "Growing Power",
        "Platinum": "32"
      },
      {
        "Name": "Guandao Prime Blade",
        "Platinum": "10"
      },
      {
        "Name": "Guandao Prime Blueprint",
        "Platinum": "4"
      },
      {
        "Name": "Guandao Prime Handle",
        "Platinum": "26"
      },
      {
        "Name": "Guandao Prime Set",
        "Platinum": "60"
      },
      {
        "Name": "Guardian",
        "Platinum": "4"
      },
      {
        "Name": "Guardian Derision",
        "Platinum": "5"
      },
      {
        "Name": "Guided Effigy",
        "Platinum": "14"
      },
      {
        "Name": "Guided Ordnance",
        "Platinum": "6"
      },
      {
        "Name": "Gun Glide",
        "Platinum": "4"
      },
      {
        "Name": "Gunslinger",
        "Platinum": "4"
      },
      {
        "Name": "Hall of Malevolence",
        "Platinum": "11"
      },
      {
        "Name": "Hallowed Eruption",
        "Platinum": "12"
      },
      {
        "Name": "Hallowed Reckoning",
        "Platinum": "12"
      },
      {
        "Name": "Hammer Shot",
        "Platinum": "49"
      },
      {
        "Name": "Handspring",
        "Platinum": "5"
      },
      {
        "Name": "Hard Engage",
        "Platinum": "0"
      },
      {
        "Name": "Hardened Casing",
        "Platinum": "8"
      },
      {
        "Name": "Harkonar Scope",
        "Platinum": "4"
      },
      {
        "Name": "Harrow's Temple Scene",
        "Platinum": "25"
      },
      {
        "Name": "Hastened Deflection",
        "Platinum": "6"
      },
      {
        "Name": "Hastened Steps",
        "Platinum": "10"
      },
      {
        "Name": "Hata-Satya",
        "Platinum": "18"
      },
      {
        "Name": "Haven",
        "Platinum": "0"
      },
      {
        "Name": "Hawk Eye",
        "Platinum": "16"
      },
      {
        "Name": "Healing Flame",
        "Platinum": "12"
      },
      {
        "Name": "Healing Return",
        "Platinum": "18"
      },
      {
        "Name": "Health Conversion",
        "Platinum": "49"
      },
      {
        "Name": "Heart Noctrul",
        "Platinum": "1"
      },
      {
        "Name": "Heart Nyth",
        "Platinum": "1"
      },
      {
        "Name": "Heartseeker",
        "Platinum": "0"
      },
      {
        "Name": "Heat Sink",
        "Platinum": "6"
      },
      {
        "Name": "Heated Charge",
        "Platinum": "3"
      },
      {
        "Name": "Heavy Caliber",
        "Platinum": "22"
      },
      {
        "Name": "Heavy Impact",
        "Platinum": "10"
      },
      {
        "Name": "Heavy Trauma",
        "Platinum": "4"
      },
      {
        "Name": "Heavy Warhead",
        "Platinum": "10"
      },
      {
        "Name": "Heightened Reflexes",
        "Platinum": "0"
      },
      {
        "Name": "Helios Prime Blueprint",
        "Platinum": "4"
      },
      {
        "Name": "Helios Prime Carapace",
        "Platinum": "5"
      },
      {
        "Name": "Helios Prime Cerebrum",
        "Platinum": "52"
      },
      {
        "Name": "Helios Prime Set",
        "Platinum": "74"
      },
      {
        "Name": "Helios Prime Systems",
        "Platinum": "9"
      },
      {
        "Name": "Hellfire",
        "Platinum": "4"
      },
      {
        "Name": "Hell's Chamber",
        "Platinum": "2"
      },
      {
        "Name": "Helminth Ferocity",
        "Platinum": "0"
      },
      {
        "Name": "High Noon",
        "Platinum": "9"
      },
      {
        "Name": "High Voltage",
        "Platinum": "60"
      },
      {
        "Name": "Hikou Prime Blueprint",
        "Platinum": "4"
      },
      {
        "Name": "Hikou Prime Pouch",
        "Platinum": "24"
      },
      {
        "Name": "Hikou Prime Set",
        "Platinum": "76"
      },
      {
        "Name": "Hikou Prime Stars",
        "Platinum": "11"
      },
      {
        "Name": "Hit and Run",
        "Platinum": "4"
      },
      {
        "Name": "Hollow Point",
        "Platinum": "3"
      },
      {
        "Name": "Hollowed Bullets",
        "Platinum": "8"
      },
      {
        "Name": "Homing Fang",
        "Platinum": "3"
      },
      {
        "Name": "Hornet Strike",
        "Platinum": "44"
      },
      {
        "Name": "Howl",
        "Platinum": "9"
      },
      {
        "Name": "Hull Weave",
        "Platinum": "7"
      },
      {
        "Name": "Hull Weave (Sigma)",
        "Platinum": "0"
      },
      {
        "Name": "Hunhow's Chamber Scene",
        "Platinum": "37"
      },
      {
        "Name": "Hunhow's Datascape Scene",
        "Platinum": "26"
      },
      {
        "Name": "Hunt",
        "Platinum": "10"
      },
      {
        "Name": "Hunter Adrenaline",
        "Platinum": "5"
      },
      {
        "Name": "Hunter Command",
        "Platinum": "4"
      },
      {
        "Name": "Hunter Munitions",
        "Platinum": "10"
      },
      {
        "Name": "Hunter Recovery",
        "Platinum": "4"
      },
      {
        "Name": "Hunter Synergy",
        "Platinum": "5"
      },
      {
        "Name": "Hunter Track",
        "Platinum": "3"
      },
      {
        "Name": "Hunter's Bonesaw",
        "Platinum": "4"
      },
      {
        "Name": "Huras Kubrow Imprint",
        "Platinum": "14"
      },
      {
        "Name": "Hush",
        "Platinum": "3"
      },
      {
        "Name": "Hushed Invisibility",
        "Platinum": "12"
      },
      {
        "Name": "Hydraulic Barrel",
        "Platinum": "5"
      },
      {
        "Name": "Hydraulic Chamber",
        "Platinum": "6"
      },
      {
        "Name": "Hydraulic Crosshairs",
        "Platinum": "4"
      },
      {
        "Name": "Hydraulic Gauge",
        "Platinum": "4"
      },
      {
        "Name": "Hydroid Prime Blueprint",
        "Platinum": "8"
      },
      {
        "Name": "Hydroid Prime Chassis",
        "Platinum": "5"
      },
      {
        "Name": "Hydroid Prime Neuroptics",
        "Platinum": "9"
      },
      {
        "Name": "Hydroid Prime Set",
        "Platinum": "93"
      },
      {
        "Name": "Hydroid Prime Systems",
        "Platinum": "60"
      },
      {
        "Name": "Hydroid's Relay Scene",
        "Platinum": "0"
      },
      {
        "Name": "Hyperflux",
        "Platinum": "7"
      },
      {
        "Name": "Hyperion Thrusters",
        "Platinum": "15"
      },
      {
        "Name": "Hyperstrike",
        "Platinum": "8"
      },
      {
        "Name": "Hyperstrike (Sigma)",
        "Platinum": "0"
      },
      {
        "Name": "Hypothermic Shell",
        "Platinum": "12"
      },
      {
        "Name": "Hysterical Assault",
        "Platinum": "14"
      },
      {
        "Name": "Hysterical Fixation",
        "Platinum": "0"
      },
      {
        "Name": "Iatric Mycelium",
        "Platinum": "0"
      },
      {
        "Name": "Ice Spring",
        "Platinum": "15"
      },
      {
        "Name": "Ice Storm",
        "Platinum": "3"
      },
      {
        "Name": "Ice Wave Impedance",
        "Platinum": "12"
      },
      {
        "Name": "Icy Avalanche",
        "Platinum": "11"
      },
      {
        "Name": "Ignis Wraith Blueprint",
        "Platinum": "4"
      },
      {
        "Name": "Immolated Radiance",
        "Platinum": "13"
      },
      {
        "Name": "Impaler Munitions",
        "Platinum": "0"
      },
      {
        "Name": "Impenetrable Offense",
        "Platinum": "0"
      },
      {
        "Name": "Imperator Vandal Barrel",
        "Platinum": "12"
      },
      {
        "Name": "Imperator Vandal Blueprint",
        "Platinum": "8"
      },
      {
        "Name": "Imperator Vandal Receiver",
        "Platinum": "17"
      },
      {
        "Name": "Imperator Vandal Set",
        "Platinum": "42"
      },
      {
        "Name": "Inaros Prime Blueprint",
        "Platinum": "13"
      },
      {
        "Name": "Inaros Prime Chassis",
        "Platinum": "3"
      },
      {
        "Name": "Inaros Prime Neuroptics",
        "Platinum": "20"
      },
      {
        "Name": "Inaros Prime Set",
        "Platinum": "55"
      },
      {
        "Name": "Inaros Prime Systems",
        "Platinum": "4"
      },
      {
        "Name": "Inaros Tomb Scene",
        "Platinum": "0"
      },
      {
        "Name": "Incendiary Coat",
        "Platinum": "4"
      },
      {
        "Name": "Inertia Dampeners",
        "Platinum": "15"
      },
      {
        "Name": "Infected Clip",
        "Platinum": "4"
      },
      {
        "Name": "Infectious Bite",
        "Platinum": "0"
      },
      {
        "Name": "Infectious Injection",
        "Platinum": "14"
      },
      {
        "Name": "Infested Impedance",
        "Platinum": "12"
      },
      {
        "Name": "Infested Ship Bridge Scene",
        "Platinum": "34"
      },
      {
        "Name": "Infiltrate",
        "Platinum": "10"
      },
      {
        "Name": "Insatiable",
        "Platinum": "12"
      },
      {
        "Name": "Insulation",
        "Platinum": "0"
      },
      {
        "Name": "Intensify",
        "Platinum": "4"
      },
      {
        "Name": "Intruder",
        "Platinum": "2"
      },
      {
        "Name": "Intruder Stasis",
        "Platinum": "7"
      },
      {
        "Name": "Investigator",
        "Platinum": "13"
      },
      {
        "Name": "Ion Burn",
        "Platinum": "7"
      },
      {
        "Name": "Ion Infusion",
        "Platinum": "12"
      },
      {
        "Name": "Iron Phoenix",
        "Platinum": "3"
      },
      {
        "Name": "Iron Shrapnel",
        "Platinum": "10"
      },
      {
        "Name": "Ironclad Charge",
        "Platinum": "11"
      },
      {
        "Name": "Ironclad Flight",
        "Platinum": "13"
      },
      {
        "Name": "Irradiating Disarm",
        "Platinum": "12"
      },
      {
        "Name": "Itzal Harness",
        "Platinum": "0"
      },
      {
        "Name": "Itzal Set",
        "Platinum": "44"
      },
      {
        "Name": "Itzal Systems",
        "Platinum": "32"
      },
      {
        "Name": "Itzal Wings",
        "Platinum": "0"
      },
      {
        "Name": "Ivara Prime Blueprint",
        "Platinum": "3"
      },
      {
        "Name": "Ivara Prime Chassis",
        "Platinum": "17"
      },
      {
        "Name": "Ivara Prime Neuroptics",
        "Platinum": "2"
      },
      {
        "Name": "Ivara Prime Set",
        "Platinum": "32"
      },
      {
        "Name": "Ivara Prime Systems",
        "Platinum": "7"
      },
      {
        "Name": "Jagged Edge",
        "Platinum": "4"
      },
      {
        "Name": "JAHU",
        "Platinum": "9"
      },
      {
        "Name": "Jet Stream",
        "Platinum": "12"
      },
      {
        "Name": "Jolt",
        "Platinum": "56"
      },
      {
        "Name": "Jugulus Barbs",
        "Platinum": "10"
      },
      {
        "Name": "Jugulus Carapace",
        "Platinum": "71"
      },
      {
        "Name": "Jugulus Spines",
        "Platinum": "54"
      },
      {
        "Name": "Juice",
        "Platinum": "25"
      },
      {
        "Name": "Justice Blades",
        "Platinum": "10"
      },
      {
        "Name": "Kappa Beacon",
        "Platinum": "12"
      },
      {
        "Name": "Karak Wraith Barrel",
        "Platinum": "15"
      },
      {
        "Name": "Karak Wraith Blueprint",
        "Platinum": "10"
      },
      {
        "Name": "Karak Wraith Receiver",
        "Platinum": "13"
      },
      {
        "Name": "Karak Wraith Set",
        "Platinum": "50"
      },
      {
        "Name": "Karak Wraith Stock",
        "Platinum": "19"
      },
      {
        "Name": "Karyst Prime Blade",
        "Platinum": "9"
      },
      {
        "Name": "Karyst Prime Blueprint",
        "Platinum": "4"
      },
      {
        "Name": "Karyst Prime Handle",
        "Platinum": "3"
      },
      {
        "Name": "Karyst Prime Set",
        "Platinum": "21"
      },
      {
        "Name": "Kaszas Blade",
        "Platinum": "9"
      },
      {
        "Name": "Kaszas Handle",
        "Platinum": "9"
      },
      {
        "Name": "Kaszas Set",
        "Platinum": "25"
      },
      {
        "Name": "Kavasa Prime Band",
        "Platinum": "4"
      },
      {
        "Name": "Kavasa Prime Buckle",
        "Platinum": "10"
      },
      {
        "Name": "Kavasa Prime Kubrow Collar Blueprint",
        "Platinum": "3"
      },
      {
        "Name": "Kavasa Prime Kubrow Collar Set",
        "Platinum": "15"
      },
      {
        "Name": "Kavat's Grace",
        "Platinum": "16"
      },
      {
        "Name": "KHRA",
        "Platinum": "9"
      },
      {
        "Name": "Kill Switch",
        "Platinum": "12"
      },
      {
        "Name": "Killing Blow",
        "Platinum": "4"
      },
      {
        "Name": "Kinetic Collision",
        "Platinum": "0"
      },
      {
        "Name": "Kinetic Diversion",
        "Platinum": "11"
      },
      {
        "Name": "Kinetic Friction",
        "Platinum": "0"
      },
      {
        "Name": "Kinetic Ricochet",
        "Platinum": "5"
      },
      {
        "Name": "Kitgun Riven Mod (Veiled)",
        "Platinum": "9"
      },
      {
        "Name": "Kitha Ayatan Sculpture",
        "Platinum": "22"
      },
      {
        "Name": "Kogake Prime Blueprint",
        "Platinum": "6"
      },
      {
        "Name": "Kogake Prime Boot",
        "Platinum": "6"
      },
      {
        "Name": "Kogake Prime Gauntlet",
        "Platinum": "18"
      },
      {
        "Name": "Kogake Prime Set",
        "Platinum": "76"
      },
      {
        "Name": "Kronen Prime Blade",
        "Platinum": "70"
      },
      {
        "Name": "Kronen Prime Blueprint",
        "Platinum": "4"
      },
      {
        "Name": "Kronen Prime Handle",
        "Platinum": "15"
      },
      {
        "Name": "Kronen Prime Set",
        "Platinum": "183"
      },
      {
        "Name": "Kuva Fortress Crevice Scene",
        "Platinum": "3"
      },
      {
        "Name": "Kuva Throne Scene",
        "Platinum": "40"
      },
      {
        "Name": "Kymaeros (Large)",
        "Platinum": "0"
      },
      {
        "Name": "Kymaeros (Medium)",
        "Platinum": "0"
      },
      {
        "Name": "Kymaeros (Small)",
        "Platinum": "0"
      },
      {
        "Name": "Lapis antitoxin",
        "Platinum": "0"
      },
      {
        "Name": "Large Charc Eel",
        "Platinum": "1"
      },
      {
        "Name": "Large Cuthol",
        "Platinum": "3"
      },
      {
        "Name": "Large Glappid",
        "Platinum": "3"
      },
      {
        "Name": "Large Goopolla",
        "Platinum": "2"
      },
      {
        "Name": "Large Karkina",
        "Platinum": "2"
      },
      {
        "Name": "Large Khut-Khut",
        "Platinum": "0"
      },
      {
        "Name": "Large Mawfish",
        "Platinum": "0"
      },
      {
        "Name": "Large Mortus Lungfish",
        "Platinum": "1"
      },
      {
        "Name": "Large Murkray",
        "Platinum": "3"
      },
      {
        "Name": "Large Norg",
        "Platinum": "6"
      },
      {
        "Name": "Large Sharrac",
        "Platinum": "2"
      },
      {
        "Name": "Large Tralok",
        "Platinum": "2"
      },
      {
        "Name": "Large Yogwun",
        "Platinum": "2"
      },
      {
        "Name": "Larva Burst",
        "Platinum": "11"
      },
      {
        "Name": "Laser Sight",
        "Platinum": "8"
      },
      {
        "Name": "Lashing Coil",
        "Platinum": "2"
      },
      {
        "Name": "Last Herald",
        "Platinum": "4"
      },
      {
        "Name": "Last Stand",
        "Platinum": "3"
      },
      {
        "Name": "Lasting Covenant",
        "Platinum": "12"
      },
      {
        "Name": "Lasting Purity",
        "Platinum": "13"
      },
      {
        "Name": "Lasting Sting",
        "Platinum": "12"
      },
      {
        "Name": "Lato Vandal Barrel",
        "Platinum": "92"
      },
      {
        "Name": "Lato Vandal Blueprint",
        "Platinum": "35"
      },
      {
        "Name": "Lato Vandal Receiver",
        "Platinum": "2"
      },
      {
        "Name": "Lato Vandal Set",
        "Platinum": "152"
      },
      {
        "Name": "Latron Prime Barrel",
        "Platinum": "4"
      },
      {
        "Name": "Latron Prime Blueprint",
        "Platinum": "3"
      },
      {
        "Name": "Latron Prime Receiver",
        "Platinum": "6"
      },
      {
        "Name": "Latron Prime Set",
        "Platinum": "21"
      },
      {
        "Name": "Latron Prime Stock",
        "Platinum": "5"
      },
      {
        "Name": "Latron Wraith Barrel",
        "Platinum": "15"
      },
      {
        "Name": "Latron Wraith Blueprint",
        "Platinum": "12"
      },
      {
        "Name": "Latron Wraith Receiver",
        "Platinum": "13"
      },
      {
        "Name": "Latron Wraith Set",
        "Platinum": "55"
      },
      {
        "Name": "Latron Wraith Stock",
        "Platinum": "14"
      },
      {
        "Name": "Legendary Fusion Core",
        "Platinum": "155"
      },
      {
        "Name": "Lethal Momentum",
        "Platinum": "5"
      },
      {
        "Name": "Lethal Torrent",
        "Platinum": "14"
      },
      {
        "Name": "Lex Prime Barrel",
        "Platinum": "2"
      },
      {
        "Name": "Lex Prime Blueprint",
        "Platinum": "2"
      },
      {
        "Name": "Lex Prime Receiver",
        "Platinum": "4"
      },
      {
        "Name": "Lex Prime Set",
        "Platinum": "7"
      },
      {
        "Name": "Lie In Wait",
        "Platinum": "0"
      },
      {
        "Name": "Life Strike",
        "Platinum": "3"
      },
      {
        "Name": "Lightning Dash",
        "Platinum": "16"
      },
      {
        "Name": "Lightning Rod",
        "Platinum": "0"
      },
      {
        "Name": "Limbo Prime Blueprint",
        "Platinum": "4"
      },
      {
        "Name": "Limbo Prime Chassis",
        "Platinum": "51"
      },
      {
        "Name": "Limbo Prime Neuroptics",
        "Platinum": "24"
      },
      {
        "Name": "Limbo Prime Set",
        "Platinum": "90"
      },
      {
        "Name": "Limbo Prime Systems",
        "Platinum": "3"
      },
      {
        "Name": "Lingering Torment",
        "Platinum": "2"
      },
      {
        "Name": "Link Armor",
        "Platinum": "13"
      },
      {
        "Name": "Link Health",
        "Platinum": "14"
      },
      {
        "Name": "Link Shields",
        "Platinum": "14"
      },
      {
        "Name": "Lith A1 Exceptional",
        "Platinum": "0"
      },
      {
        "Name": "Lith A1 Flawless",
        "Platinum": "0"
      },
      {
        "Name": "Lith A1 Intact",
        "Platinum": "4"
      },
      {
        "Name": "Lith A1 Radiant",
        "Platinum": "0"
      },
      {
        "Name": "Lith A2 Exceptional",
        "Platinum": "0"
      },
      {
        "Name": "Lith A2 Flawless",
        "Platinum": "0"
      },
      {
        "Name": "Lith A2 Intact",
        "Platinum": "5"
      },
      {
        "Name": "Lith A2 Radiant",
        "Platinum": "0"
      },
      {
        "Name": "Lith A3 Exceptional",
        "Platinum": "0"
      },
      {
        "Name": "Lith A3 Flawless",
        "Platinum": "0"
      },
      {
        "Name": "Lith A3 Intact",
        "Platinum": "0"
      },
      {
        "Name": "Lith A3 Radiant",
        "Platinum": "0"
      },
      {
        "Name": "Lith B1 Exceptional",
        "Platinum": "0"
      },
      {
        "Name": "Lith B1 Flawless",
        "Platinum": "0"
      },
      {
        "Name": "Lith B1 Intact",
        "Platinum": "16"
      },
      {
        "Name": "Lith B1 Radiant",
        "Platinum": "0"
      },
      {
        "Name": "Lith B2 Exceptional",
        "Platinum": "0"
      },
      {
        "Name": "Lith B2 Flawless",
        "Platinum": "0"
      },
      {
        "Name": "Lith B2 Intact",
        "Platinum": "5"
      },
      {
        "Name": "Lith B2 Radiant",
        "Platinum": "0"
      },
      {
        "Name": "Lith B3 Exceptional",
        "Platinum": "0"
      },
      {
        "Name": "Lith B3 Flawless",
        "Platinum": "0"
      },
      {
        "Name": "Lith B3 Intact",
        "Platinum": "5"
      },
      {
        "Name": "Lith B3 Radiant",
        "Platinum": "0"
      },
      {
        "Name": "Lith B4 Exceptional",
        "Platinum": "0"
      },
      {
        "Name": "Lith B4 Flawless",
        "Platinum": "0"
      },
      {
        "Name": "Lith B4 Intact",
        "Platinum": "11"
      },
      {
        "Name": "Lith B4 Radiant",
        "Platinum": "25"
      },
      {
        "Name": "Lith B5 Exceptional",
        "Platinum": "0"
      },
      {
        "Name": "Lith B5 Flawless",
        "Platinum": "0"
      },
      {
        "Name": "Lith B5 Intact",
        "Platinum": "4"
      },
      {
        "Name": "Lith B5 Radiant",
        "Platinum": "0"
      },
      {
        "Name": "Lith B6 Exceptional",
        "Platinum": "0"
      },
      {
        "Name": "Lith B6 Flawless",
        "Platinum": "0"
      },
      {
        "Name": "Lith B6 Intact",
        "Platinum": "0"
      },
      {
        "Name": "Lith B6 Radiant",
        "Platinum": "0"
      },
      {
        "Name": "Lith B7 Exceptional",
        "Platinum": "0"
      },
      {
        "Name": "Lith B7 Flawless",
        "Platinum": "0"
      },
      {
        "Name": "Lith B7 Intact",
        "Platinum": "2"
      },
      {
        "Name": "Lith B7 Radiant",
        "Platinum": "0"
      },
      {
        "Name": "Lith C1 Exceptional",
        "Platinum": "0"
      },
      {
        "Name": "Lith C1 Flawless",
        "Platinum": "0"
      },
      {
        "Name": "Lith C1 Intact",
        "Platinum": "15"
      },
      {
        "Name": "Lith C1 Radiant",
        "Platinum": "0"
      },
      {
        "Name": "Lith C2 Exceptional",
        "Platinum": "0"
      },
      {
        "Name": "Lith C2 Flawless",
        "Platinum": "0"
      },
      {
        "Name": "Lith C2 Intact",
        "Platinum": "4"
      },
      {
        "Name": "Lith C2 Radiant",
        "Platinum": "0"
      },
      {
        "Name": "Lith C3 Exceptional",
        "Platinum": "0"
      },
      {
        "Name": "Lith C3 Flawless",
        "Platinum": "0"
      },
      {
        "Name": "Lith C3 Intact",
        "Platinum": "6"
      },
      {
        "Name": "Lith C3 Radiant",
        "Platinum": "0"
      },
      {
        "Name": "Lith C4 Exceptional",
        "Platinum": "0"
      },
      {
        "Name": "Lith C4 Flawless",
        "Platinum": "0"
      },
      {
        "Name": "Lith C4 Intact",
        "Platinum": "1"
      },
      {
        "Name": "Lith C4 Radiant",
        "Platinum": "0"
      },
      {
        "Name": "Lith C5 Exceptional",
        "Platinum": "0"
      },
      {
        "Name": "Lith C5 Flawless",
        "Platinum": "0"
      },
      {
        "Name": "Lith C5 Intact",
        "Platinum": "7"
      },
      {
        "Name": "Lith C5 Radiant",
        "Platinum": "0"
      },
      {
        "Name": "Lith C6 Exceptional",
        "Platinum": "0"
      },
      {
        "Name": "Lith C6 Flawless",
        "Platinum": "0"
      },
      {
        "Name": "Lith C6 Intact",
        "Platinum": "1"
      },
      {
        "Name": "Lith C6 Radiant",
        "Platinum": "0"
      },
      {
        "Name": "Lith D1 Exceptional",
        "Platinum": "0"
      },
      {
        "Name": "Lith D1 Flawless",
        "Platinum": "0"
      },
      {
        "Name": "Lith D1 Intact",
        "Platinum": "1"
      },
      {
        "Name": "Lith D1 Radiant",
        "Platinum": "1"
      },
      {
        "Name": "Lith D2 Exceptional",
        "Platinum": "0"
      },
      {
        "Name": "Lith D2 Flawless",
        "Platinum": "0"
      },
      {
        "Name": "Lith D2 Intact",
        "Platinum": "1"
      },
      {
        "Name": "Lith D2 Radiant",
        "Platinum": "0"
      },
      {
        "Name": "Lith D3 Exceptional",
        "Platinum": "0"
      },
      {
        "Name": "Lith D3 Flawless",
        "Platinum": "0"
      },
      {
        "Name": "Lith D3 Intact",
        "Platinum": "1"
      },
      {
        "Name": "Lith D3 Radiant",
        "Platinum": "9"
      },
      {
        "Name": "Lith F1 Exceptional",
        "Platinum": "0"
      },
      {
        "Name": "Lith F1 Flawless",
        "Platinum": "0"
      },
      {
        "Name": "Lith F1 Intact",
        "Platinum": "8"
      },
      {
        "Name": "Lith F1 Radiant",
        "Platinum": "0"
      },
      {
        "Name": "Lith F2 Exceptional",
        "Platinum": "0"
      },
      {
        "Name": "Lith F2 Flawless",
        "Platinum": "0"
      },
      {
        "Name": "Lith F2 Intact",
        "Platinum": "4"
      },
      {
        "Name": "Lith F2 Radiant",
        "Platinum": "0"
      },
      {
        "Name": "Lith G1 Exceptional",
        "Platinum": "0"
      },
      {
        "Name": "Lith G1 Flawless",
        "Platinum": "0"
      },
      {
        "Name": "Lith G1 Intact",
        "Platinum": "4"
      },
      {
        "Name": "Lith G1 Radiant",
        "Platinum": "9"
      },
      {
        "Name": "Lith G2 Exceptional",
        "Platinum": "0"
      },
      {
        "Name": "Lith G2 Flawless",
        "Platinum": "0"
      },
      {
        "Name": "Lith G2 Intact",
        "Platinum": "23"
      },
      {
        "Name": "Lith G2 Radiant",
        "Platinum": "14"
      },
      {
        "Name": "Lith H1 Exceptional",
        "Platinum": "0"
      },
      {
        "Name": "Lith H1 Flawless",
        "Platinum": "0"
      },
      {
        "Name": "Lith H1 Intact",
        "Platinum": "8"
      },
      {
        "Name": "Lith H1 Radiant",
        "Platinum": "0"
      },
      {
        "Name": "Lith H2 Exceptional",
        "Platinum": "0"
      },
      {
        "Name": "Lith H2 Flawless",
        "Platinum": "0"
      },
      {
        "Name": "Lith H2 Intact",
        "Platinum": "7"
      },
      {
        "Name": "Lith H2 Radiant",
        "Platinum": "22"
      },
      {
        "Name": "Lith K1 Exceptional",
        "Platinum": "0"
      },
      {
        "Name": "Lith K1 Flawless",
        "Platinum": "0"
      },
      {
        "Name": "Lith K1 Intact",
        "Platinum": "9"
      },
      {
        "Name": "Lith K1 Radiant",
        "Platinum": "0"
      },
      {
        "Name": "Lith K2 Exceptional",
        "Platinum": "0"
      },
      {
        "Name": "Lith K2 Flawless",
        "Platinum": "0"
      },
      {
        "Name": "Lith K2 Intact",
        "Platinum": "4"
      },
      {
        "Name": "Lith K2 Radiant",
        "Platinum": "0"
      },
      {
        "Name": "Lith K3 Exceptional",
        "Platinum": "10"
      },
      {
        "Name": "Lith K3 Flawless",
        "Platinum": "0"
      },
      {
        "Name": "Lith K3 Intact",
        "Platinum": "11"
      },
      {
        "Name": "Lith K3 Radiant",
        "Platinum": "0"
      },
      {
        "Name": "Lith K4 Exceptional",
        "Platinum": "0"
      },
      {
        "Name": "Lith K4 Flawless",
        "Platinum": "0"
      },
      {
        "Name": "Lith K4 Intact",
        "Platinum": "4"
      },
      {
        "Name": "Lith K4 Radiant",
        "Platinum": "6"
      },
      {
        "Name": "Lith L1 Exceptional",
        "Platinum": "0"
      },
      {
        "Name": "Lith L1 Flawless",
        "Platinum": "0"
      },
      {
        "Name": "Lith L1 Intact",
        "Platinum": "15"
      },
      {
        "Name": "Lith L1 Radiant",
        "Platinum": "0"
      },
      {
        "Name": "Lith L2 Exceptional",
        "Platinum": "0"
      },
      {
        "Name": "Lith L2 Flawless",
        "Platinum": "0"
      },
      {
        "Name": "Lith L2 Intact",
        "Platinum": "2"
      },
      {
        "Name": "Lith L2 Radiant",
        "Platinum": "3"
      },
      {
        "Name": "Lith M1 Exceptional",
        "Platinum": "0"
      },
      {
        "Name": "Lith M1 Flawless",
        "Platinum": "0"
      },
      {
        "Name": "Lith M1 Intact",
        "Platinum": "12"
      },
      {
        "Name": "Lith M1 Radiant",
        "Platinum": "18"
      },
      {
        "Name": "Lith M2 Exceptional",
        "Platinum": "0"
      },
      {
        "Name": "Lith M2 Flawless",
        "Platinum": "0"
      },
      {
        "Name": "Lith M2 Intact",
        "Platinum": "10"
      },
      {
        "Name": "Lith M2 Radiant",
        "Platinum": "0"
      },
      {
        "Name": "Lith M3 Exceptional",
        "Platinum": "0"
      },
      {
        "Name": "Lith M3 Flawless",
        "Platinum": "0"
      },
      {
        "Name": "Lith M3 Intact",
        "Platinum": "3"
      },
      {
        "Name": "Lith M3 Radiant",
        "Platinum": "0"
      },
      {
        "Name": "Lith M4 Exceptional",
        "Platinum": "0"
      },
      {
        "Name": "Lith M4 Flawless",
        "Platinum": "0"
      },
      {
        "Name": "Lith M4 Intact",
        "Platinum": "2"
      },
      {
        "Name": "Lith M4 Radiant",
        "Platinum": "13"
      },
      {
        "Name": "Lith M5 Exceptional",
        "Platinum": "2"
      },
      {
        "Name": "Lith M5 Flawless",
        "Platinum": "0"
      },
      {
        "Name": "Lith M5 Intact",
        "Platinum": "1"
      },
      {
        "Name": "Lith M5 Radiant",
        "Platinum": "6"
      },
      {
        "Name": "Lith M6 Exceptional",
        "Platinum": "0"
      },
      {
        "Name": "Lith M6 Flawless",
        "Platinum": "0"
      },
      {
        "Name": "Lith M6 Intact",
        "Platinum": "1"
      },
      {
        "Name": "Lith M6 Radiant",
        "Platinum": "5"
      },
      {
        "Name": "Lith N1 Exceptional",
        "Platinum": "0"
      },
      {
        "Name": "Lith N1 Flawless",
        "Platinum": "0"
      },
      {
        "Name": "Lith N1 Intact",
        "Platinum": "24"
      },
      {
        "Name": "Lith N1 Radiant",
        "Platinum": "0"
      },
      {
        "Name": "Lith N2 Exceptional",
        "Platinum": "0"
      },
      {
        "Name": "Lith N2 Flawless",
        "Platinum": "0"
      },
      {
        "Name": "Lith N2 Intact",
        "Platinum": "8"
      },
      {
        "Name": "Lith N2 Radiant",
        "Platinum": "0"
      },
      {
        "Name": "Lith N3 Exceptional",
        "Platinum": "0"
      },
      {
        "Name": "Lith N3 Flawless",
        "Platinum": "0"
      },
      {
        "Name": "Lith N3 Intact",
        "Platinum": "6"
      },
      {
        "Name": "Lith N3 Radiant",
        "Platinum": "0"
      },
      {
        "Name": "Lith N4 Exceptional",
        "Platinum": "0"
      },
      {
        "Name": "Lith N4 Flawless",
        "Platinum": "0"
      },
      {
        "Name": "Lith N4 Intact",
        "Platinum": "0"
      },
      {
        "Name": "Lith N4 Radiant",
        "Platinum": "3"
      },
      {
        "Name": "Lith N5 Exceptional",
        "Platinum": "0"
      },
      {
        "Name": "Lith N5 Flawless",
        "Platinum": "0"
      },
      {
        "Name": "Lith N5 Intact",
        "Platinum": "1"
      },
      {
        "Name": "Lith N5 Radiant",
        "Platinum": "0"
      },
      {
        "Name": "Lith N6 Exceptional",
        "Platinum": "0"
      },
      {
        "Name": "Lith N6 Flawless",
        "Platinum": "0"
      },
      {
        "Name": "Lith N6 Intact",
        "Platinum": "2"
      },
      {
        "Name": "Lith N6 Radiant",
        "Platinum": "5"
      },
      {
        "Name": "Lith O1 Exceptional",
        "Platinum": "0"
      },
      {
        "Name": "Lith O1 Flawless",
        "Platinum": "0"
      },
      {
        "Name": "Lith O1 Intact",
        "Platinum": "3"
      },
      {
        "Name": "Lith O1 Radiant",
        "Platinum": "0"
      },
      {
        "Name": "Lith O2 Exceptional",
        "Platinum": "2"
      },
      {
        "Name": "Lith O2 Flawless",
        "Platinum": "0"
      },
      {
        "Name": "Lith O2 Intact",
        "Platinum": "26"
      },
      {
        "Name": "Lith O2 Radiant",
        "Platinum": "27"
      },
      {
        "Name": "Lith P1 Exceptional",
        "Platinum": "0"
      },
      {
        "Name": "Lith P1 Flawless",
        "Platinum": "0"
      },
      {
        "Name": "Lith P1 Intact",
        "Platinum": "2"
      },
      {
        "Name": "Lith P1 Radiant",
        "Platinum": "0"
      },
      {
        "Name": "Lith P2 Exceptional",
        "Platinum": "0"
      },
      {
        "Name": "Lith P2 Flawless",
        "Platinum": "0"
      },
      {
        "Name": "Lith P2 Intact",
        "Platinum": "3"
      },
      {
        "Name": "Lith P2 Radiant",
        "Platinum": "0"
      },
      {
        "Name": "Lith P3 Exceptional",
        "Platinum": "0"
      },
      {
        "Name": "Lith P3 Flawless",
        "Platinum": "0"
      },
      {
        "Name": "Lith P3 Intact",
        "Platinum": "1"
      },
      {
        "Name": "Lith P3 Radiant",
        "Platinum": "2"
      },
      {
        "Name": "Lith P4 Exceptional",
        "Platinum": "0"
      },
      {
        "Name": "Lith P4 Flawless",
        "Platinum": "0"
      },
      {
        "Name": "Lith P4 Intact",
        "Platinum": "1"
      },
      {
        "Name": "Lith P4 Radiant",
        "Platinum": "0"
      },
      {
        "Name": "Lith P5 Exceptional",
        "Platinum": "0"
      },
      {
        "Name": "Lith P5 Flawless",
        "Platinum": "0"
      },
      {
        "Name": "Lith P5 Intact",
        "Platinum": "1"
      },
      {
        "Name": "Lith P5 Radiant",
        "Platinum": "0"
      },
      {
        "Name": "Lith S1 Exceptional",
        "Platinum": "0"
      },
      {
        "Name": "Lith S1 Flawless",
        "Platinum": "0"
      },
      {
        "Name": "Lith S1 Intact",
        "Platinum": "4"
      },
      {
        "Name": "Lith S1 Radiant",
        "Platinum": "0"
      },
      {
        "Name": "Lith S10 Exceptional",
        "Platinum": "0"
      },
      {
        "Name": "Lith S10 Flawless",
        "Platinum": "0"
      },
      {
        "Name": "Lith S10 Intact",
        "Platinum": "1"
      },
      {
        "Name": "Lith S10 Radiant",
        "Platinum": "8"
      },
      {
        "Name": "Lith S2 Exceptional",
        "Platinum": "0"
      },
      {
        "Name": "Lith S2 Flawless",
        "Platinum": "0"
      },
      {
        "Name": "Lith S2 Intact",
        "Platinum": "5"
      },
      {
        "Name": "Lith S2 Radiant",
        "Platinum": "0"
      },
      {
        "Name": "Lith S3 Exceptional",
        "Platinum": "0"
      },
      {
        "Name": "Lith S3 Flawless",
        "Platinum": "0"
      },
      {
        "Name": "Lith S3 Intact",
        "Platinum": "16"
      },
      {
        "Name": "Lith S3 Radiant",
        "Platinum": "0"
      },
      {
        "Name": "Lith S4 Exceptional",
        "Platinum": "0"
      },
      {
        "Name": "Lith S4 Flawless",
        "Platinum": "0"
      },
      {
        "Name": "Lith S4 Intact",
        "Platinum": "10"
      },
      {
        "Name": "Lith S4 Radiant",
        "Platinum": "0"
      },
      {
        "Name": "Lith S5 Exceptional",
        "Platinum": "0"
      },
      {
        "Name": "Lith S5 Flawless",
        "Platinum": "0"
      },
      {
        "Name": "Lith S5 Intact",
        "Platinum": "7"
      },
      {
        "Name": "Lith S5 Radiant",
        "Platinum": "0"
      },
      {
        "Name": "Lith S6 Exceptional",
        "Platinum": "0"
      },
      {
        "Name": "Lith S6 Flawless",
        "Platinum": "0"
      },
      {
        "Name": "Lith S6 Intact",
        "Platinum": "8"
      },
      {
        "Name": "Lith S6 Radiant",
        "Platinum": "0"
      },
      {
        "Name": "Lith S7 Exceptional",
        "Platinum": "0"
      },
      {
        "Name": "Lith S7 Flawless",
        "Platinum": "0"
      },
      {
        "Name": "Lith S7 Intact",
        "Platinum": "4"
      },
      {
        "Name": "Lith S7 Radiant",
        "Platinum": "0"
      },
      {
        "Name": "Lith S8 Exceptional",
        "Platinum": "0"
      },
      {
        "Name": "Lith S8 Flawless",
        "Platinum": "0"
      },
      {
        "Name": "Lith S8 Intact",
        "Platinum": "1"
      },
      {
        "Name": "Lith S8 Radiant",
        "Platinum": "3"
      },
      {
        "Name": "Lith S9 Exceptional",
        "Platinum": "0"
      },
      {
        "Name": "Lith S9 Flawless",
        "Platinum": "0"
      },
      {
        "Name": "Lith S9 Intact",
        "Platinum": "6"
      },
      {
        "Name": "Lith S9 Radiant",
        "Platinum": "0"
      },
      {
        "Name": "Lith T1 Exceptional",
        "Platinum": "0"
      },
      {
        "Name": "Lith T1 Flawless",
        "Platinum": "0"
      },
      {
        "Name": "Lith T1 Intact",
        "Platinum": "4"
      },
      {
        "Name": "Lith T1 Radiant",
        "Platinum": "0"
      },
      {
        "Name": "Lith T2 Exceptional",
        "Platinum": "0"
      },
      {
        "Name": "Lith T2 Flawless",
        "Platinum": "0"
      },
      {
        "Name": "Lith T2 Intact",
        "Platinum": "3"
      },
      {
        "Name": "Lith T2 Radiant",
        "Platinum": "0"
      },
      {
        "Name": "Lith T3 Exceptional",
        "Platinum": "0"
      },
      {
        "Name": "Lith T3 Flawless",
        "Platinum": "0"
      },
      {
        "Name": "Lith T3 Intact",
        "Platinum": "9"
      },
      {
        "Name": "Lith T3 Radiant",
        "Platinum": "16"
      },
      {
        "Name": "Lith T4 Exceptional",
        "Platinum": "0"
      },
      {
        "Name": "Lith T4 Flawless",
        "Platinum": "0"
      },
      {
        "Name": "Lith T4 Intact",
        "Platinum": "1"
      },
      {
        "Name": "Lith T4 Radiant",
        "Platinum": "6"
      },
      {
        "Name": "Lith V1 Exceptional",
        "Platinum": "2"
      },
      {
        "Name": "Lith V1 Flawless",
        "Platinum": "0"
      },
      {
        "Name": "Lith V1 Intact",
        "Platinum": "8"
      },
      {
        "Name": "Lith V1 Radiant",
        "Platinum": "28"
      },
      {
        "Name": "Lith V2 Exceptional",
        "Platinum": "0"
      },
      {
        "Name": "Lith V2 Flawless",
        "Platinum": "0"
      },
      {
        "Name": "Lith V2 Intact",
        "Platinum": "10"
      },
      {
        "Name": "Lith V2 Radiant",
        "Platinum": "30"
      },
      {
        "Name": "Lith V3 Exceptional",
        "Platinum": "0"
      },
      {
        "Name": "Lith V3 Flawless",
        "Platinum": "0"
      },
      {
        "Name": "Lith V3 Intact",
        "Platinum": "6"
      },
      {
        "Name": "Lith V3 Radiant",
        "Platinum": "0"
      },
      {
        "Name": "Lith V4 Exceptional",
        "Platinum": "0"
      },
      {
        "Name": "Lith V4 Flawless",
        "Platinum": "0"
      },
      {
        "Name": "Lith V4 Intact",
        "Platinum": "4"
      },
      {
        "Name": "Lith V4 Radiant",
        "Platinum": "0"
      },
      {
        "Name": "Lith V5 Exceptional",
        "Platinum": "0"
      },
      {
        "Name": "Lith V5 Flawless",
        "Platinum": "0"
      },
      {
        "Name": "Lith V5 Intact",
        "Platinum": "3"
      },
      {
        "Name": "Lith V5 Radiant",
        "Platinum": "0"
      },
      {
        "Name": "Lith V6 Exceptional",
        "Platinum": "0"
      },
      {
        "Name": "Lith V6 Flawless",
        "Platinum": "0"
      },
      {
        "Name": "Lith V6 Intact",
        "Platinum": "12"
      },
      {
        "Name": "Lith V6 Radiant",
        "Platinum": "0"
      },
      {
        "Name": "Lith V7 Exceptional",
        "Platinum": "0"
      },
      {
        "Name": "Lith V7 Flawless",
        "Platinum": "0"
      },
      {
        "Name": "Lith V7 Intact",
        "Platinum": "9"
      },
      {
        "Name": "Lith V7 Radiant",
        "Platinum": "22"
      },
      {
        "Name": "Lith V8 Exceptional",
        "Platinum": "0"
      },
      {
        "Name": "Lith V8 Flawless",
        "Platinum": "0"
      },
      {
        "Name": "Lith V8 Intact",
        "Platinum": "9"
      },
      {
        "Name": "Lith V8 Radiant",
        "Platinum": "0"
      },
      {
        "Name": "Lith W1 Exceptional",
        "Platinum": "0"
      },
      {
        "Name": "Lith W1 Flawless",
        "Platinum": "0"
      },
      {
        "Name": "Lith W1 Intact",
        "Platinum": "0"
      },
      {
        "Name": "Lith W1 Radiant",
        "Platinum": "0"
      },
      {
        "Name": "Lith W2 Exceptional",
        "Platinum": "0"
      },
      {
        "Name": "Lith W2 Flawless",
        "Platinum": "0"
      },
      {
        "Name": "Lith W2 Intact",
        "Platinum": "1"
      },
      {
        "Name": "Lith W2 Radiant",
        "Platinum": "0"
      },
      {
        "Name": "Lith Z1 Exceptional",
        "Platinum": "0"
      },
      {
        "Name": "Lith Z1 Flawless",
        "Platinum": "0"
      },
      {
        "Name": "Lith Z1 Intact",
        "Platinum": "3"
      },
      {
        "Name": "Lith Z1 Radiant",
        "Platinum": "0"
      },
      {
        "Name": "Lith Z2 Exceptional",
        "Platinum": "0"
      },
      {
        "Name": "Lith Z2 Flawless",
        "Platinum": "0"
      },
      {
        "Name": "Lith Z2 Intact",
        "Platinum": "5"
      },
      {
        "Name": "Lith Z2 Radiant",
        "Platinum": "0"
      },
      {
        "Name": "Live Wire",
        "Platinum": "5"
      },
      {
        "Name": "Loaded Capacity",
        "Platinum": "3"
      },
      {
        "Name": "Lock and Load",
        "Platinum": "7"
      },
      {
        "Name": "LOHK",
        "Platinum": "9"
      },
      {
        "Name": "Loki Prime Blueprint",
        "Platinum": "11"
      },
      {
        "Name": "Loki Prime Chassis",
        "Platinum": "32"
      },
      {
        "Name": "Loki Prime Neuroptics",
        "Platinum": "24"
      },
      {
        "Name": "Loki Prime Set",
        "Platinum": "430"
      },
      {
        "Name": "Loki Prime Systems",
        "Platinum": "330"
      },
      {
        "Name": "Loose Chamber",
        "Platinum": "0"
      },
      {
        "Name": "Loose Hatch",
        "Platinum": "1"
      },
      {
        "Name": "Loose Magazine",
        "Platinum": "1"
      },
      {
        "Name": "Loot Detector",
        "Platinum": "27"
      },
      {
        "Name": "Looter",
        "Platinum": "51"
      },
      {
        "Name": "Low Current Leap",
        "Platinum": "0"
      },
      {
        "Name": "Loyal Companion",
        "Platinum": "9"
      },
      {
        "Name": "Lua Balcony Scene",
        "Platinum": "3"
      },
      {
        "Name": "Lua Containment Scene",
        "Platinum": "20"
      },
      {
        "Name": "Lua Lens Blueprint",
        "Platinum": "17"
      },
      {
        "Name": "Lua Madurai Lens",
        "Platinum": "101"
      },
      {
        "Name": "Lua Naramon Lens",
        "Platinum": "103"
      },
      {
        "Name": "Lua Nursery Scene",
        "Platinum": "23"
      },
      {
        "Name": "Lua Unairu Lens",
        "Platinum": "98"
      },
      {
        "Name": "Lua Vazarin Lens",
        "Platinum": "96"
      },
      {
        "Name": "Lua Zenurik Lens",
        "Platinum": "101"
      },
      {
        "Name": "Lucky Shot",
        "Platinum": "4"
      },
      {
        "Name": "Lunaro Arena Scene",
        "Platinum": "95"
      },
      {
        "Name": "Mach Crash",
        "Platinum": "13"
      },
      {
        "Name": "Machete Wraith",
        "Platinum": "61"
      },
      {
        "Name": "Mad Stack",
        "Platinum": "16"
      },
      {
        "Name": "Madurai Lens",
        "Platinum": "4"
      },
      {
        "Name": "Madurai Transmute Core",
        "Platinum": "0"
      },
      {
        "Name": "Mafic Rain",
        "Platinum": "2"
      },
      {
        "Name": "Mag Locks",
        "Platinum": "16"
      },
      {
        "Name": "Mag Prime Blueprint",
        "Platinum": "72"
      },
      {
        "Name": "Mag Prime Chassis",
        "Platinum": "13"
      },
      {
        "Name": "Mag Prime Neuroptics",
        "Platinum": "21"
      },
      {
        "Name": "Mag Prime Set",
        "Platinum": "154"
      },
      {
        "Name": "Mag Prime Systems",
        "Platinum": "19"
      },
      {
        "Name": "Magazine Extension",
        "Platinum": "6"
      },
      {
        "Name": "Magazine Warp",
        "Platinum": "17"
      },
      {
        "Name": "Maglev",
        "Platinum": "7"
      },
      {
        "Name": "Magma Chamber",
        "Platinum": "18"
      },
      {
        "Name": "Magnetized Discharge",
        "Platinum": "14"
      },
      {
        "Name": "Magnificent Brickie",
        "Platinum": "1"
      },
      {
        "Name": "Magnificent Charamote",
        "Platinum": "2"
      },
      {
        "Name": "Magnificent Echowinder",
        "Platinum": "1"
      },
      {
        "Name": "Magnificent Eye-Eye",
        "Platinum": "2"
      },
      {
        "Name": "Magnificent Kriller",
        "Platinum": "2"
      },
      {
        "Name": "Magnificent Longwinder",
        "Platinum": "3"
      },
      {
        "Name": "Magnificent Mirewinder",
        "Platinum": "4"
      },
      {
        "Name": "Magnificent Recaster",
        "Platinum": "2"
      },
      {
        "Name": "Magnificent Sapcaddy",
        "Platinum": "2"
      },
      {
        "Name": "Magnificent Scrubber",
        "Platinum": "2"
      },
      {
        "Name": "Magnificent Synathid",
        "Platinum": "3"
      },
      {
        "Name": "Magnificent Tink",
        "Platinum": "3"
      },
      {
        "Name": "Magnificent Tromyzon",
        "Platinum": "3"
      },
      {
        "Name": "Magnum Force",
        "Platinum": "14"
      },
      {
        "Name": "Magus Accelerant",
        "Platinum": "188"
      },
      {
        "Name": "Magus Anomaly",
        "Platinum": "75"
      },
      {
        "Name": "Magus Cadence",
        "Platinum": "38"
      },
      {
        "Name": "Magus Cloud",
        "Platinum": "37"
      },
      {
        "Name": "Magus Destruct",
        "Platinum": "188"
      },
      {
        "Name": "Magus Drive",
        "Platinum": "216"
      },
      {
        "Name": "Magus Elevate",
        "Platinum": "22"
      },
      {
        "Name": "Magus Firewall",
        "Platinum": "53"
      },
      {
        "Name": "Magus Glitch",
        "Platinum": "119"
      },
      {
        "Name": "Magus Husk",
        "Platinum": "22"
      },
      {
        "Name": "Magus Lockdown",
        "Platinum": "48"
      },
      {
        "Name": "Magus Melt",
        "Platinum": "70"
      },
      {
        "Name": "Magus Nourish",
        "Platinum": "29"
      },
      {
        "Name": "Magus Overload",
        "Platinum": "104"
      },
      {
        "Name": "Magus Repair",
        "Platinum": "65"
      },
      {
        "Name": "Magus Replenish",
        "Platinum": "34"
      },
      {
        "Name": "Magus Revert",
        "Platinum": "77"
      },
      {
        "Name": "Magus Vigor",
        "Platinum": "13"
      },
      {
        "Name": "Maim",
        "Platinum": "9"
      },
      {
        "Name": "Maiming Strike",
        "Platinum": "7"
      },
      {
        "Name": "Malicious Raptor",
        "Platinum": "8"
      },
      {
        "Name": "Malignant Force",
        "Platinum": "5"
      },
      {
        "Name": "Mantis Avionics",
        "Platinum": "5"
      },
      {
        "Name": "Mantis Engines",
        "Platinum": "6"
      },
      {
        "Name": "Mantis Fuselage",
        "Platinum": "14"
      },
      {
        "Name": "Mantis Set",
        "Platinum": "26"
      },
      {
        "Name": "Mara Detron",
        "Platinum": "76"
      },
      {
        "Name": "Marked Target",
        "Platinum": "9"
      },
      {
        "Name": "Marquise Thyst",
        "Platinum": "2"
      },
      {
        "Name": "Marquise Veridos",
        "Platinum": "1"
      },
      {
        "Name": "Martial Fury",
        "Platinum": "0"
      },
      {
        "Name": "Martyr Symbiosis",
        "Platinum": "15"
      },
      {
        "Name": "Master Key",
        "Platinum": "3"
      },
      {
        "Name": "Master Thief",
        "Platinum": "2"
      },
      {
        "Name": "Maul",
        "Platinum": "14"
      },
      {
        "Name": "Maxima",
        "Platinum": "7"
      },
      {
        "Name": "Maximum Capacity",
        "Platinum": "1"
      },
      {
        "Name": "Measured Burst",
        "Platinum": "6"
      },
      {
        "Name": "Mecha Empowered",
        "Platinum": "5"
      },
      {
        "Name": "Mecha Overdrive",
        "Platinum": "8"
      },
      {
        "Name": "Mecha Pulse",
        "Platinum": "4"
      },
      {
        "Name": "Mecha Recharge",
        "Platinum": "5"
      },
      {
        "Name": "Medi-Pet Kit",
        "Platinum": "3"
      },
      {
        "Name": "Medi-Ray",
        "Platinum": "23"
      },
      {
        "Name": "Medium Charc Eel",
        "Platinum": "1"
      },
      {
        "Name": "Medium Cuthol",
        "Platinum": "2"
      },
      {
        "Name": "Medium Glappid",
        "Platinum": "1"
      },
      {
        "Name": "Medium Goopolla",
        "Platinum": "1"
      },
      {
        "Name": "Medium Karkina",
        "Platinum": "2"
      },
      {
        "Name": "Medium Khut-Khut",
        "Platinum": "0"
      },
      {
        "Name": "Medium Mawfish",
        "Platinum": "0"
      },
      {
        "Name": "Medium Mortus Lungfish",
        "Platinum": "1"
      },
      {
        "Name": "Medium Murkray",
        "Platinum": "2"
      },
      {
        "Name": "Medium Norg",
        "Platinum": "2"
      },
      {
        "Name": "Medium Sharrac",
        "Platinum": "2"
      },
      {
        "Name": "Medium Tralok",
        "Platinum": "2"
      },
      {
        "Name": "Medium Yogwun",
        "Platinum": "0"
      },
      {
        "Name": "Melee Guidance",
        "Platinum": "4"
      },
      {
        "Name": "Melee Prowess",
        "Platinum": "2"
      },
      {
        "Name": "Melee Riven Mod (Veiled)",
        "Platinum": "30"
      },
      {
        "Name": "Mending Shot",
        "Platinum": "27"
      },
      {
        "Name": "Mending Splinters",
        "Platinum": "13"
      },
      {
        "Name": "Mesa Prime Blueprint",
        "Platinum": "3"
      },
      {
        "Name": "Mesa Prime Chassis",
        "Platinum": "4"
      },
      {
        "Name": "Mesa Prime Neuroptics",
        "Platinum": "18"
      },
      {
        "Name": "Mesa Prime Set",
        "Platinum": "56"
      },
      {
        "Name": "Mesa Prime Systems",
        "Platinum": "22"
      },
      {
        "Name": "Mesa’s Waltz",
        "Platinum": "10"
      },
      {
        "Name": "Meso A1 Exceptional",
        "Platinum": "0"
      },
      {
        "Name": "Meso A1 Flawless",
        "Platinum": "0"
      },
      {
        "Name": "Meso A1 Intact",
        "Platinum": "7"
      },
      {
        "Name": "Meso A1 Radiant",
        "Platinum": "0"
      },
      {
        "Name": "Meso A2 Exceptional",
        "Platinum": "0"
      },
      {
        "Name": "Meso A2 Flawless",
        "Platinum": "0"
      },
      {
        "Name": "Meso A2 Intact",
        "Platinum": "2"
      },
      {
        "Name": "Meso A2 Radiant",
        "Platinum": "0"
      },
      {
        "Name": "Meso B1 Exceptional",
        "Platinum": "0"
      },
      {
        "Name": "Meso B1 Flawless",
        "Platinum": "0"
      },
      {
        "Name": "Meso B1 Intact",
        "Platinum": "8"
      },
      {
        "Name": "Meso B1 Radiant",
        "Platinum": "0"
      },
      {
        "Name": "Meso B2 Exceptional",
        "Platinum": "0"
      },
      {
        "Name": "Meso B2 Flawless",
        "Platinum": "0"
      },
      {
        "Name": "Meso B2 Intact",
        "Platinum": "4"
      },
      {
        "Name": "Meso B2 Radiant",
        "Platinum": "10"
      },
      {
        "Name": "Meso B3 Exceptional",
        "Platinum": "0"
      },
      {
        "Name": "Meso B3 Flawless",
        "Platinum": "0"
      },
      {
        "Name": "Meso B3 Intact",
        "Platinum": "9"
      },
      {
        "Name": "Meso B3 Radiant",
        "Platinum": "0"
      },
      {
        "Name": "Meso B4 Exceptional",
        "Platinum": "0"
      },
      {
        "Name": "Meso B4 Flawless",
        "Platinum": "0"
      },
      {
        "Name": "Meso B4 Intact",
        "Platinum": "2"
      },
      {
        "Name": "Meso B4 Radiant",
        "Platinum": "12"
      },
      {
        "Name": "Meso C1 Exceptional",
        "Platinum": "0"
      },
      {
        "Name": "Meso C1 Flawless",
        "Platinum": "0"
      },
      {
        "Name": "Meso C1 Intact",
        "Platinum": "9"
      },
      {
        "Name": "Meso C1 Radiant",
        "Platinum": "0"
      },
      {
        "Name": "Meso C2 Exceptional",
        "Platinum": "0"
      },
      {
        "Name": "Meso C2 Flawless",
        "Platinum": "0"
      },
      {
        "Name": "Meso C2 Intact",
        "Platinum": "11"
      },
      {
        "Name": "Meso C2 Radiant",
        "Platinum": "0"
      },
      {
        "Name": "Meso C3 Exceptional",
        "Platinum": "0"
      },
      {
        "Name": "Meso C3 Flawless",
        "Platinum": "0"
      },
      {
        "Name": "Meso C3 Intact",
        "Platinum": "11"
      },
      {
        "Name": "Meso C3 Radiant",
        "Platinum": "0"
      },
      {
        "Name": "Meso C4 Exceptional",
        "Platinum": "0"
      },
      {
        "Name": "Meso C4 Flawless",
        "Platinum": "0"
      },
      {
        "Name": "Meso C4 Intact",
        "Platinum": "3"
      },
      {
        "Name": "Meso C4 Radiant",
        "Platinum": "0"
      },
      {
        "Name": "Meso C5 Exceptional",
        "Platinum": "0"
      },
      {
        "Name": "Meso C5 Flawless",
        "Platinum": "0"
      },
      {
        "Name": "Meso C5 Intact",
        "Platinum": "2"
      },
      {
        "Name": "Meso C5 Radiant",
        "Platinum": "0"
      },
      {
        "Name": "Meso C6 Exceptional",
        "Platinum": "0"
      },
      {
        "Name": "Meso C6 Flawless",
        "Platinum": "0"
      },
      {
        "Name": "Meso C6 Intact",
        "Platinum": "1"
      },
      {
        "Name": "Meso C6 Radiant",
        "Platinum": "5"
      },
      {
        "Name": "Meso D1 Exceptional",
        "Platinum": "0"
      },
      {
        "Name": "Meso D1 Flawless",
        "Platinum": "0"
      },
      {
        "Name": "Meso D1 Intact",
        "Platinum": "6"
      },
      {
        "Name": "Meso D1 Radiant",
        "Platinum": "0"
      },
      {
        "Name": "Meso D2 Exceptional",
        "Platinum": "0"
      },
      {
        "Name": "Meso D2 Flawless",
        "Platinum": "0"
      },
      {
        "Name": "Meso D2 Intact",
        "Platinum": "7"
      },
      {
        "Name": "Meso D2 Radiant",
        "Platinum": "0"
      },
      {
        "Name": "Meso D3 Exceptional",
        "Platinum": "0"
      },
      {
        "Name": "Meso D3 Flawless",
        "Platinum": "0"
      },
      {
        "Name": "Meso D3 Intact",
        "Platinum": "3"
      },
      {
        "Name": "Meso D3 Radiant",
        "Platinum": "0"
      },
      {
        "Name": "Meso D4 Exceptional",
        "Platinum": "0"
      },
      {
        "Name": "Meso D4 Flawless",
        "Platinum": "0"
      },
      {
        "Name": "Meso D4 Intact",
        "Platinum": "1"
      },
      {
        "Name": "Meso D4 Radiant",
        "Platinum": "9"
      },
      {
        "Name": "Meso D5 Exceptional",
        "Platinum": "0"
      },
      {
        "Name": "Meso D5 Flawless",
        "Platinum": "0"
      },
      {
        "Name": "Meso D5 Intact",
        "Platinum": "3"
      },
      {
        "Name": "Meso D5 Radiant",
        "Platinum": "0"
      },
      {
        "Name": "Meso E1 Exceptional",
        "Platinum": "0"
      },
      {
        "Name": "Meso E1 Flawless",
        "Platinum": "0"
      },
      {
        "Name": "Meso E1 Intact",
        "Platinum": "25"
      },
      {
        "Name": "Meso E1 Radiant",
        "Platinum": "35"
      },
      {
        "Name": "Meso E2 Exceptional",
        "Platinum": "0"
      },
      {
        "Name": "Meso E2 Flawless",
        "Platinum": "0"
      },
      {
        "Name": "Meso E2 Intact",
        "Platinum": "0"
      },
      {
        "Name": "Meso E2 Radiant",
        "Platinum": "0"
      },
      {
        "Name": "Meso E3 Exceptional",
        "Platinum": "0"
      },
      {
        "Name": "Meso E3 Flawless",
        "Platinum": "0"
      },
      {
        "Name": "Meso E3 Intact",
        "Platinum": "0"
      },
      {
        "Name": "Meso E3 Radiant",
        "Platinum": "0"
      },
      {
        "Name": "Meso E4 Exceptional",
        "Platinum": "0"
      },
      {
        "Name": "Meso E4 Flawless",
        "Platinum": "0"
      },
      {
        "Name": "Meso E4 Intact",
        "Platinum": "1"
      },
      {
        "Name": "Meso E4 Radiant",
        "Platinum": "4"
      },
      {
        "Name": "Meso F1 Exceptional",
        "Platinum": "0"
      },
      {
        "Name": "Meso F1 Flawless",
        "Platinum": "0"
      },
      {
        "Name": "Meso F1 Intact",
        "Platinum": "8"
      },
      {
        "Name": "Meso F1 Radiant",
        "Platinum": "0"
      },
      {
        "Name": "Meso F2 Exceptional",
        "Platinum": "0"
      },
      {
        "Name": "Meso F2 Flawless",
        "Platinum": "0"
      },
      {
        "Name": "Meso F2 Intact",
        "Platinum": "4"
      },
      {
        "Name": "Meso F2 Radiant",
        "Platinum": "9"
      },
      {
        "Name": "Meso F3 Exceptional",
        "Platinum": "0"
      },
      {
        "Name": "Meso F3 Flawless",
        "Platinum": "0"
      },
      {
        "Name": "Meso F3 Intact",
        "Platinum": "19"
      },
      {
        "Name": "Meso F3 Radiant",
        "Platinum": "0"
      },
      {
        "Name": "Meso G1 Exceptional",
        "Platinum": "0"
      },
      {
        "Name": "Meso G1 Flawless",
        "Platinum": "0"
      },
      {
        "Name": "Meso G1 Intact",
        "Platinum": "8"
      },
      {
        "Name": "Meso G1 Radiant",
        "Platinum": "0"
      },
      {
        "Name": "Meso G2 Exceptional",
        "Platinum": "0"
      },
      {
        "Name": "Meso G2 Flawless",
        "Platinum": "0"
      },
      {
        "Name": "Meso G2 Intact",
        "Platinum": "4"
      },
      {
        "Name": "Meso G2 Radiant",
        "Platinum": "0"
      },
      {
        "Name": "Meso H1 Exceptional",
        "Platinum": "0"
      },
      {
        "Name": "Meso H1 Flawless",
        "Platinum": "0"
      },
      {
        "Name": "Meso H1 Intact",
        "Platinum": "7"
      },
      {
        "Name": "Meso H1 Radiant",
        "Platinum": "20"
      },
      {
        "Name": "Meso I1 Exceptional",
        "Platinum": "0"
      },
      {
        "Name": "Meso I1 Flawless",
        "Platinum": "0"
      },
      {
        "Name": "Meso I1 Intact",
        "Platinum": "3"
      },
      {
        "Name": "Meso I1 Radiant",
        "Platinum": "8"
      },
      {
        "Name": "Meso K1 Exceptional",
        "Platinum": "0"
      },
      {
        "Name": "Meso K1 Flawless",
        "Platinum": "0"
      },
      {
        "Name": "Meso K1 Intact",
        "Platinum": "7"
      },
      {
        "Name": "Meso K1 Radiant",
        "Platinum": "0"
      },
      {
        "Name": "Meso K2 Exceptional",
        "Platinum": "2"
      },
      {
        "Name": "Meso K2 Flawless",
        "Platinum": "0"
      },
      {
        "Name": "Meso K2 Intact",
        "Platinum": "9"
      },
      {
        "Name": "Meso K2 Radiant",
        "Platinum": "0"
      },
      {
        "Name": "Meso K3 Exceptional",
        "Platinum": "0"
      },
      {
        "Name": "Meso K3 Flawless",
        "Platinum": "0"
      },
      {
        "Name": "Meso K3 Intact",
        "Platinum": "1"
      },
      {
        "Name": "Meso K3 Radiant",
        "Platinum": "13"
      },
      {
        "Name": "Meso L1 Exceptional",
        "Platinum": "0"
      },
      {
        "Name": "Meso L1 Flawless",
        "Platinum": "0"
      },
      {
        "Name": "Meso L1 Intact",
        "Platinum": "4"
      },
      {
        "Name": "Meso L1 Radiant",
        "Platinum": "25"
      },
      {
        "Name": "Meso M1 Exceptional",
        "Platinum": "0"
      },
      {
        "Name": "Meso M1 Flawless",
        "Platinum": "0"
      },
      {
        "Name": "Meso M1 Intact",
        "Platinum": "28"
      },
      {
        "Name": "Meso M1 Radiant",
        "Platinum": "0"
      },
      {
        "Name": "Meso M2 Exceptional",
        "Platinum": "0"
      },
      {
        "Name": "Meso M2 Flawless",
        "Platinum": "0"
      },
      {
        "Name": "Meso M2 Intact",
        "Platinum": "5"
      },
      {
        "Name": "Meso M2 Radiant",
        "Platinum": "0"
      },
      {
        "Name": "Meso M3 Exceptional",
        "Platinum": "0"
      },
      {
        "Name": "Meso M3 Flawless",
        "Platinum": "0"
      },
      {
        "Name": "Meso M3 Intact",
        "Platinum": "5"
      },
      {
        "Name": "Meso M3 Radiant",
        "Platinum": "0"
      },
      {
        "Name": "Meso N1 Exceptional",
        "Platinum": "0"
      },
      {
        "Name": "Meso N1 Flawless",
        "Platinum": "0"
      },
      {
        "Name": "Meso N1 Intact",
        "Platinum": "9"
      },
      {
        "Name": "Meso N1 Radiant",
        "Platinum": "15"
      },
      {
        "Name": "Meso N10 Exceptional",
        "Platinum": "0"
      },
      {
        "Name": "Meso N10 Flawless",
        "Platinum": "0"
      },
      {
        "Name": "Meso N10 Intact",
        "Platinum": "1"
      },
      {
        "Name": "Meso N10 Radiant",
        "Platinum": "0"
      },
      {
        "Name": "Meso N2 Exceptional",
        "Platinum": "0"
      },
      {
        "Name": "Meso N2 Flawless",
        "Platinum": "0"
      },
      {
        "Name": "Meso N2 Intact",
        "Platinum": "8"
      },
      {
        "Name": "Meso N2 Radiant",
        "Platinum": "0"
      },
      {
        "Name": "Meso N3 Exceptional",
        "Platinum": "0"
      },
      {
        "Name": "Meso N3 Flawless",
        "Platinum": "0"
      },
      {
        "Name": "Meso N3 Intact",
        "Platinum": "25"
      },
      {
        "Name": "Meso N3 Radiant",
        "Platinum": "0"
      },
      {
        "Name": "Meso N4 Exceptional",
        "Platinum": "0"
      },
      {
        "Name": "Meso N4 Flawless",
        "Platinum": "0"
      },
      {
        "Name": "Meso N4 Intact",
        "Platinum": "7"
      },
      {
        "Name": "Meso N4 Radiant",
        "Platinum": "0"
      },
      {
        "Name": "Meso N5 Exceptional",
        "Platinum": "0"
      },
      {
        "Name": "Meso N5 Flawless",
        "Platinum": "0"
      },
      {
        "Name": "Meso N5 Intact",
        "Platinum": "10"
      },
      {
        "Name": "Meso N5 Radiant",
        "Platinum": "17"
      },
      {
        "Name": "Meso N6 Exceptional",
        "Platinum": "0"
      },
      {
        "Name": "Meso N6 Flawless",
        "Platinum": "0"
      },
      {
        "Name": "Meso N6 Intact",
        "Platinum": "17"
      },
      {
        "Name": "Meso N6 Radiant",
        "Platinum": "28"
      },
      {
        "Name": "Meso N7 Exceptional",
        "Platinum": "0"
      },
      {
        "Name": "Meso N7 Flawless",
        "Platinum": "0"
      },
      {
        "Name": "Meso N7 Intact",
        "Platinum": "0"
      },
      {
        "Name": "Meso N7 Radiant",
        "Platinum": "0"
      },
      {
        "Name": "Meso N8 Exceptional",
        "Platinum": "0"
      },
      {
        "Name": "Meso N8 Flawless",
        "Platinum": "0"
      },
      {
        "Name": "Meso N8 Intact",
        "Platinum": "7"
      },
      {
        "Name": "Meso N8 Radiant",
        "Platinum": "0"
      },
      {
        "Name": "Meso N9 Exceptional",
        "Platinum": "0"
      },
      {
        "Name": "Meso N9 Flawless",
        "Platinum": "0"
      },
      {
        "Name": "Meso N9 Intact",
        "Platinum": "1"
      },
      {
        "Name": "Meso N9 Radiant",
        "Platinum": "2"
      },
      {
        "Name": "Meso O1 Exceptional",
        "Platinum": "0"
      },
      {
        "Name": "Meso O1 Flawless",
        "Platinum": "0"
      },
      {
        "Name": "Meso O1 Intact",
        "Platinum": "5"
      },
      {
        "Name": "Meso O1 Radiant",
        "Platinum": "0"
      },
      {
        "Name": "Meso O2 Exceptional",
        "Platinum": "0"
      },
      {
        "Name": "Meso O2 Flawless",
        "Platinum": "0"
      },
      {
        "Name": "Meso O2 Intact",
        "Platinum": "4"
      },
      {
        "Name": "Meso O2 Radiant",
        "Platinum": "0"
      },
      {
        "Name": "Meso O3 Exceptional",
        "Platinum": "0"
      },
      {
        "Name": "Meso O3 Flawless",
        "Platinum": "0"
      },
      {
        "Name": "Meso O3 Intact",
        "Platinum": "18"
      },
      {
        "Name": "Meso O3 Radiant",
        "Platinum": "29"
      },
      {
        "Name": "Meso O4 Exceptional",
        "Platinum": "0"
      },
      {
        "Name": "Meso O4 Flawless",
        "Platinum": "0"
      },
      {
        "Name": "Meso O4 Intact",
        "Platinum": "3"
      },
      {
        "Name": "Meso O4 Radiant",
        "Platinum": "0"
      },
      {
        "Name": "Meso P1 Exceptional",
        "Platinum": "0"
      },
      {
        "Name": "Meso P1 Flawless",
        "Platinum": "0"
      },
      {
        "Name": "Meso P1 Intact",
        "Platinum": "12"
      },
      {
        "Name": "Meso P1 Radiant",
        "Platinum": "0"
      },
      {
        "Name": "Meso P2 Exceptional",
        "Platinum": "0"
      },
      {
        "Name": "Meso P2 Flawless",
        "Platinum": "0"
      },
      {
        "Name": "Meso P2 Intact",
        "Platinum": "3"
      },
      {
        "Name": "Meso P2 Radiant",
        "Platinum": "0"
      },
      {
        "Name": "Meso P3 Exceptional",
        "Platinum": "0"
      },
      {
        "Name": "Meso P3 Flawless",
        "Platinum": "0"
      },
      {
        "Name": "Meso P3 Intact",
        "Platinum": "1"
      },
      {
        "Name": "Meso P3 Radiant",
        "Platinum": "0"
      },
      {
        "Name": "Meso R1 Exceptional",
        "Platinum": "0"
      },
      {
        "Name": "Meso R1 Flawless",
        "Platinum": "0"
      },
      {
        "Name": "Meso R1 Intact",
        "Platinum": "3"
      },
      {
        "Name": "Meso R1 Radiant",
        "Platinum": "0"
      },
      {
        "Name": "Meso R2 Exceptional",
        "Platinum": "0"
      },
      {
        "Name": "Meso R2 Flawless",
        "Platinum": "0"
      },
      {
        "Name": "Meso R2 Intact",
        "Platinum": "3"
      },
      {
        "Name": "Meso R2 Radiant",
        "Platinum": "0"
      },
      {
        "Name": "Meso R3 Exceptional",
        "Platinum": "0"
      },
      {
        "Name": "Meso R3 Flawless",
        "Platinum": "0"
      },
      {
        "Name": "Meso R3 Intact",
        "Platinum": "3"
      },
      {
        "Name": "Meso R3 Radiant",
        "Platinum": "0"
      },
      {
        "Name": "Meso S1 Exceptional",
        "Platinum": "0"
      },
      {
        "Name": "Meso S1 Flawless",
        "Platinum": "0"
      },
      {
        "Name": "Meso S1 Intact",
        "Platinum": "18"
      },
      {
        "Name": "Meso S1 Radiant",
        "Platinum": "0"
      },
      {
        "Name": "Meso S2 Exceptional",
        "Platinum": "0"
      },
      {
        "Name": "Meso S2 Flawless",
        "Platinum": "0"
      },
      {
        "Name": "Meso S2 Intact",
        "Platinum": "14"
      },
      {
        "Name": "Meso S2 Radiant",
        "Platinum": "23"
      },
      {
        "Name": "Meso S3 Exceptional",
        "Platinum": "0"
      },
      {
        "Name": "Meso S3 Flawless",
        "Platinum": "0"
      },
      {
        "Name": "Meso S3 Intact",
        "Platinum": "9"
      },
      {
        "Name": "Meso S3 Radiant",
        "Platinum": "0"
      },
      {
        "Name": "Meso S4 Exceptional",
        "Platinum": "0"
      },
      {
        "Name": "Meso S4 Flawless",
        "Platinum": "0"
      },
      {
        "Name": "Meso S4 Intact",
        "Platinum": "11"
      },
      {
        "Name": "Meso S4 Radiant",
        "Platinum": "0"
      },
      {
        "Name": "Meso S5 Exceptional",
        "Platinum": "0"
      },
      {
        "Name": "Meso S5 Flawless",
        "Platinum": "0"
      },
      {
        "Name": "Meso S5 Intact",
        "Platinum": "8"
      },
      {
        "Name": "Meso S5 Radiant",
        "Platinum": "0"
      },
      {
        "Name": "Meso S6 Exceptional",
        "Platinum": "0"
      },
      {
        "Name": "Meso S6 Flawless",
        "Platinum": "0"
      },
      {
        "Name": "Meso S6 Intact",
        "Platinum": "8"
      },
      {
        "Name": "Meso S6 Radiant",
        "Platinum": "0"
      },
      {
        "Name": "Meso S7 Exceptional",
        "Platinum": "0"
      },
      {
        "Name": "Meso S7 Flawless",
        "Platinum": "0"
      },
      {
        "Name": "Meso S7 Intact",
        "Platinum": "4"
      },
      {
        "Name": "Meso S7 Radiant",
        "Platinum": "0"
      },
      {
        "Name": "Meso S8 Exceptional",
        "Platinum": "0"
      },
      {
        "Name": "Meso S8 Flawless",
        "Platinum": "0"
      },
      {
        "Name": "Meso S8 Intact",
        "Platinum": "8"
      },
      {
        "Name": "Meso S8 Radiant",
        "Platinum": "0"
      },
      {
        "Name": "Meso S9 Exceptional",
        "Platinum": "0"
      },
      {
        "Name": "Meso S9 Flawless",
        "Platinum": "0"
      },
      {
        "Name": "Meso S9 Intact",
        "Platinum": "4"
      },
      {
        "Name": "Meso S9 Radiant",
        "Platinum": "0"
      },
      {
        "Name": "Meso T1 Exceptional",
        "Platinum": "0"
      },
      {
        "Name": "Meso T1 Flawless",
        "Platinum": "0"
      },
      {
        "Name": "Meso T1 Intact",
        "Platinum": "2"
      },
      {
        "Name": "Meso T1 Radiant",
        "Platinum": "0"
      },
      {
        "Name": "Meso T2 Exceptional",
        "Platinum": "0"
      },
      {
        "Name": "Meso T2 Flawless",
        "Platinum": "0"
      },
      {
        "Name": "Meso T2 Intact",
        "Platinum": "4"
      },
      {
        "Name": "Meso T2 Radiant",
        "Platinum": "0"
      },
      {
        "Name": "Meso T3 Exceptional",
        "Platinum": "0"
      },
      {
        "Name": "Meso T3 Flawless",
        "Platinum": "0"
      },
      {
        "Name": "Meso T3 Intact",
        "Platinum": "3"
      },
      {
        "Name": "Meso T3 Radiant",
        "Platinum": "0"
      },
      {
        "Name": "Meso V1 Exceptional",
        "Platinum": "0"
      },
      {
        "Name": "Meso V1 Flawless",
        "Platinum": "0"
      },
      {
        "Name": "Meso V1 Intact",
        "Platinum": "6"
      },
      {
        "Name": "Meso V1 Radiant",
        "Platinum": "0"
      },
      {
        "Name": "Meso V2 Exceptional",
        "Platinum": "0"
      },
      {
        "Name": "Meso V2 Flawless",
        "Platinum": "0"
      },
      {
        "Name": "Meso V2 Intact",
        "Platinum": "9"
      },
      {
        "Name": "Meso V2 Radiant",
        "Platinum": "0"
      },
      {
        "Name": "Meso V3 Exceptional",
        "Platinum": "0"
      },
      {
        "Name": "Meso V3 Flawless",
        "Platinum": "0"
      },
      {
        "Name": "Meso V3 Intact",
        "Platinum": "13"
      },
      {
        "Name": "Meso V3 Radiant",
        "Platinum": "0"
      },
      {
        "Name": "Meso V4 Exceptional",
        "Platinum": "0"
      },
      {
        "Name": "Meso V4 Flawless",
        "Platinum": "0"
      },
      {
        "Name": "Meso V4 Intact",
        "Platinum": "9"
      },
      {
        "Name": "Meso V4 Radiant",
        "Platinum": "0"
      },
      {
        "Name": "Meso V5 Exceptional",
        "Platinum": "0"
      },
      {
        "Name": "Meso V5 Flawless",
        "Platinum": "0"
      },
      {
        "Name": "Meso V5 Intact",
        "Platinum": "13"
      },
      {
        "Name": "Meso V5 Radiant",
        "Platinum": "32"
      },
      {
        "Name": "Meso V6 Exceptional",
        "Platinum": "0"
      },
      {
        "Name": "Meso V6 Flawless",
        "Platinum": "0"
      },
      {
        "Name": "Meso V6 Intact",
        "Platinum": "13"
      },
      {
        "Name": "Meso V6 Radiant",
        "Platinum": "0"
      },
      {
        "Name": "Meso W1 Exceptional",
        "Platinum": "0"
      },
      {
        "Name": "Meso W1 Flawless",
        "Platinum": "0"
      },
      {
        "Name": "Meso W1 Intact",
        "Platinum": "6"
      },
      {
        "Name": "Meso W1 Radiant",
        "Platinum": "0"
      },
      {
        "Name": "Meso Z1 Exceptional",
        "Platinum": "0"
      },
      {
        "Name": "Meso Z1 Flawless",
        "Platinum": "0"
      },
      {
        "Name": "Meso Z1 Intact",
        "Platinum": "3"
      },
      {
        "Name": "Meso Z1 Radiant",
        "Platinum": "0"
      },
      {
        "Name": "Meso Z2 Exceptional",
        "Platinum": "0"
      },
      {
        "Name": "Meso Z2 Flawless",
        "Platinum": "0"
      },
      {
        "Name": "Meso Z2 Intact",
        "Platinum": "5"
      },
      {
        "Name": "Meso Z2 Radiant",
        "Platinum": "0"
      },
      {
        "Name": "Meso Z3 Exceptional",
        "Platinum": "0"
      },
      {
        "Name": "Meso Z3 Flawless",
        "Platinum": "0"
      },
      {
        "Name": "Meso Z3 Intact",
        "Platinum": "4"
      },
      {
        "Name": "Meso Z3 Radiant",
        "Platinum": "0"
      },
      {
        "Name": "Metal Auger",
        "Platinum": "4"
      },
      {
        "Name": "Metal Fiber",
        "Platinum": "19"
      },
      {
        "Name": "Meteor Crash",
        "Platinum": "5"
      },
      {
        "Name": "Meteor Munitions",
        "Platinum": "0"
      },
      {
        "Name": "Meticulous Aim",
        "Platinum": "35"
      },
      {
        "Name": "Mind Freak",
        "Platinum": "14"
      },
      {
        "Name": "Mirage Prime Blueprint",
        "Platinum": "33"
      },
      {
        "Name": "Mirage Prime Chassis",
        "Platinum": "11"
      },
      {
        "Name": "Mirage Prime Neuroptics",
        "Platinum": "4"
      },
      {
        "Name": "Mirage Prime Set",
        "Platinum": "58"
      },
      {
        "Name": "Mirage Prime Systems",
        "Platinum": "12"
      },
      {
        "Name": "Mischief",
        "Platinum": "7"
      },
      {
        "Name": "Mobilize",
        "Platinum": "6"
      },
      {
        "Name": "Modified Munitions",
        "Platinum": "5"
      },
      {
        "Name": "Molecular Fission",
        "Platinum": "11"
      },
      {
        "Name": "Molten Impact",
        "Platinum": "5"
      },
      {
        "Name": "Momentary Pause",
        "Platinum": "0"
      },
      {
        "Name": "Morphic Transformer",
        "Platinum": "4"
      },
      {
        "Name": "Mortal Conduct",
        "Platinum": "12"
      },
      {
        "Name": "Motus Impact",
        "Platinum": "4"
      },
      {
        "Name": "Motus Setup",
        "Platinum": "5"
      },
      {
        "Name": "Motus Signal",
        "Platinum": "3"
      },
      {
        "Name": "Munitions Vortex",
        "Platinum": "6"
      },
      {
        "Name": "Mutalist Alad V Assassinate Key",
        "Platinum": "8"
      },
      {
        "Name": "Mutalist Nav Coordinates",
        "Platinum": "7"
      },
      {
        "Name": "Muzzle Flash",
        "Platinum": "14"
      },
      {
        "Name": "Mycona Colony Scene",
        "Platinum": "35"
      },
      {
        "Name": "Myxostomata (Large)",
        "Platinum": "10"
      },
      {
        "Name": "Myxostomata (Medium)",
        "Platinum": "18"
      },
      {
        "Name": "Myxostomata (Small)",
        "Platinum": "6"
      },
      {
        "Name": "Nami Skyla Prime Blade",
        "Platinum": "41"
      },
      {
        "Name": "Nami Skyla Prime Blueprint",
        "Platinum": "8"
      },
      {
        "Name": "Nami Skyla Prime Handle",
        "Platinum": "10"
      },
      {
        "Name": "Nami Skyla Prime Set",
        "Platinum": "141"
      },
      {
        "Name": "Nano-Applicator",
        "Platinum": "4"
      },
      {
        "Name": "Napalm Grenades",
        "Platinum": "27"
      },
      {
        "Name": "Naramon Lens",
        "Platinum": "4"
      },
      {
        "Name": "Naramon Transmute Core",
        "Platinum": "7"
      },
      {
        "Name": "Narrow Barrel",
        "Platinum": "5"
      },
      {
        "Name": "Narrow Minded",
        "Platinum": "23"
      },
      {
        "Name": "Natural Talent",
        "Platinum": "7"
      },
      {
        "Name": "Nebula Bore",
        "Platinum": "5"
      },
      {
        "Name": "Necramech Blitz",
        "Platinum": "5"
      },
      {
        "Name": "Necramech Continuity",
        "Platinum": "11"
      },
      {
        "Name": "Necramech Drift",
        "Platinum": "9"
      },
      {
        "Name": "Necramech Efficiency",
        "Platinum": "14"
      },
      {
        "Name": "Necramech Flow",
        "Platinum": "17"
      },
      {
        "Name": "Necramech Friction",
        "Platinum": "7"
      },
      {
        "Name": "Necramech Fury",
        "Platinum": "4"
      },
      {
        "Name": "Necramech Hydraulics",
        "Platinum": "18"
      },
      {
        "Name": "Necramech Intensify",
        "Platinum": "9"
      },
      {
        "Name": "Necramech Pressure Point",
        "Platinum": "10"
      },
      {
        "Name": "Necramech Reach",
        "Platinum": "8"
      },
      {
        "Name": "Necramech Redirection",
        "Platinum": "10"
      },
      {
        "Name": "Necramech Refuel",
        "Platinum": "9"
      },
      {
        "Name": "Necramech Seismic Wave",
        "Platinum": "78"
      },
      {
        "Name": "Necramech Slipstream",
        "Platinum": "11"
      },
      {
        "Name": "Necramech Steel Fiber",
        "Platinum": "16"
      },
      {
        "Name": "Necramech Streamline",
        "Platinum": "24"
      },
      {
        "Name": "Necramech Stretch",
        "Platinum": "16"
      },
      {
        "Name": "Necramech Thrusters",
        "Platinum": "42"
      },
      {
        "Name": "Necramech Vitality",
        "Platinum": "9"
      },
      {
        "Name": "Negate",
        "Platinum": "52"
      },
      {
        "Name": "Negation Swarm",
        "Platinum": "12"
      },
      {
        "Name": "Nekros Prime Blueprint",
        "Platinum": "45"
      },
      {
        "Name": "Nekros Prime Chassis",
        "Platinum": "6"
      },
      {
        "Name": "Nekros Prime Neuroptics",
        "Platinum": "16"
      },
      {
        "Name": "Nekros Prime Set",
        "Platinum": "139"
      },
      {
        "Name": "Nekros Prime Systems",
        "Platinum": "52"
      },
      {
        "Name": "Neo A1 Exceptional",
        "Platinum": "0"
      },
      {
        "Name": "Neo A1 Flawless",
        "Platinum": "0"
      },
      {
        "Name": "Neo A1 Intact",
        "Platinum": "5"
      },
      {
        "Name": "Neo A1 Radiant",
        "Platinum": "10"
      },
      {
        "Name": "Neo A2 Exceptional",
        "Platinum": "0"
      },
      {
        "Name": "Neo A2 Flawless",
        "Platinum": "0"
      },
      {
        "Name": "Neo A2 Intact",
        "Platinum": "1"
      },
      {
        "Name": "Neo A2 Radiant",
        "Platinum": "0"
      },
      {
        "Name": "Neo A3 Exceptional",
        "Platinum": "0"
      },
      {
        "Name": "Neo A3 Flawless",
        "Platinum": "0"
      },
      {
        "Name": "Neo A3 Intact",
        "Platinum": "1"
      },
      {
        "Name": "Neo A3 Radiant",
        "Platinum": "9"
      },
      {
        "Name": "Neo A4 Exceptional",
        "Platinum": "0"
      },
      {
        "Name": "Neo A4 Flawless",
        "Platinum": "0"
      },
      {
        "Name": "Neo A4 Intact",
        "Platinum": "7"
      },
      {
        "Name": "Neo A4 Radiant",
        "Platinum": "0"
      },
      {
        "Name": "Neo B1 Exceptional",
        "Platinum": "0"
      },
      {
        "Name": "Neo B1 Flawless",
        "Platinum": "0"
      },
      {
        "Name": "Neo B1 Intact",
        "Platinum": "15"
      },
      {
        "Name": "Neo B1 Radiant",
        "Platinum": "0"
      },
      {
        "Name": "Neo B2 Exceptional",
        "Platinum": "0"
      },
      {
        "Name": "Neo B2 Flawless",
        "Platinum": "0"
      },
      {
        "Name": "Neo B2 Intact",
        "Platinum": "3"
      },
      {
        "Name": "Neo B2 Radiant",
        "Platinum": "0"
      },
      {
        "Name": "Neo B3 Exceptional",
        "Platinum": "0"
      },
      {
        "Name": "Neo B3 Flawless",
        "Platinum": "0"
      },
      {
        "Name": "Neo B3 Intact",
        "Platinum": "15"
      },
      {
        "Name": "Neo B3 Radiant",
        "Platinum": "0"
      },
      {
        "Name": "Neo B4 Exceptional",
        "Platinum": "0"
      },
      {
        "Name": "Neo B4 Flawless",
        "Platinum": "0"
      },
      {
        "Name": "Neo B4 Intact",
        "Platinum": "5"
      },
      {
        "Name": "Neo B4 Radiant",
        "Platinum": "13"
      },
      {
        "Name": "Neo B5 Exceptional",
        "Platinum": "0"
      },
      {
        "Name": "Neo B5 Flawless",
        "Platinum": "0"
      },
      {
        "Name": "Neo B5 Intact",
        "Platinum": "3"
      },
      {
        "Name": "Neo B5 Radiant",
        "Platinum": "0"
      },
      {
        "Name": "Neo C1 Exceptional",
        "Platinum": "0"
      },
      {
        "Name": "Neo C1 Flawless",
        "Platinum": "0"
      },
      {
        "Name": "Neo C1 Intact",
        "Platinum": "3"
      },
      {
        "Name": "Neo C1 Radiant",
        "Platinum": "0"
      },
      {
        "Name": "Neo D1 Exceptional",
        "Platinum": "0"
      },
      {
        "Name": "Neo D1 Flawless",
        "Platinum": "0"
      },
      {
        "Name": "Neo D1 Intact",
        "Platinum": "11"
      },
      {
        "Name": "Neo D1 Radiant",
        "Platinum": "0"
      },
      {
        "Name": "Neo D2 Exceptional",
        "Platinum": "0"
      },
      {
        "Name": "Neo D2 Flawless",
        "Platinum": "0"
      },
      {
        "Name": "Neo D2 Intact",
        "Platinum": "1"
      },
      {
        "Name": "Neo D2 Radiant",
        "Platinum": "5"
      },
      {
        "Name": "Neo E1 Exceptional",
        "Platinum": "0"
      },
      {
        "Name": "Neo E1 Flawless",
        "Platinum": "0"
      },
      {
        "Name": "Neo E1 Intact",
        "Platinum": "20"
      },
      {
        "Name": "Neo E1 Radiant",
        "Platinum": "22"
      },
      {
        "Name": "Neo E2 Exceptional",
        "Platinum": "0"
      },
      {
        "Name": "Neo E2 Flawless",
        "Platinum": "0"
      },
      {
        "Name": "Neo E2 Intact",
        "Platinum": "1"
      },
      {
        "Name": "Neo E2 Radiant",
        "Platinum": "0"
      },
      {
        "Name": "Neo F1 Exceptional",
        "Platinum": "0"
      },
      {
        "Name": "Neo F1 Flawless",
        "Platinum": "0"
      },
      {
        "Name": "Neo F1 Intact",
        "Platinum": "23"
      },
      {
        "Name": "Neo F1 Radiant",
        "Platinum": "0"
      },
      {
        "Name": "Neo G1 Exceptional",
        "Platinum": "0"
      },
      {
        "Name": "Neo G1 Flawless",
        "Platinum": "0"
      },
      {
        "Name": "Neo G1 Intact",
        "Platinum": "1"
      },
      {
        "Name": "Neo G1 Radiant",
        "Platinum": "0"
      },
      {
        "Name": "Neo G2 Exceptional",
        "Platinum": "0"
      },
      {
        "Name": "Neo G2 Flawless",
        "Platinum": "0"
      },
      {
        "Name": "Neo G2 Intact",
        "Platinum": "2"
      },
      {
        "Name": "Neo G2 Radiant",
        "Platinum": "0"
      },
      {
        "Name": "Neo G3 Exceptional",
        "Platinum": "0"
      },
      {
        "Name": "Neo G3 Flawless",
        "Platinum": "0"
      },
      {
        "Name": "Neo G3 Intact",
        "Platinum": "4"
      },
      {
        "Name": "Neo G3 Radiant",
        "Platinum": "0"
      },
      {
        "Name": "Neo H1 Exceptional",
        "Platinum": "0"
      },
      {
        "Name": "Neo H1 Flawless",
        "Platinum": "0"
      },
      {
        "Name": "Neo H1 Intact",
        "Platinum": "5"
      },
      {
        "Name": "Neo H1 Radiant",
        "Platinum": "0"
      },
      {
        "Name": "Neo H2 Exceptional",
        "Platinum": "0"
      },
      {
        "Name": "Neo H2 Flawless",
        "Platinum": "0"
      },
      {
        "Name": "Neo H2 Intact",
        "Platinum": "6"
      },
      {
        "Name": "Neo H2 Radiant",
        "Platinum": "0"
      },
      {
        "Name": "Neo I1 Exceptional",
        "Platinum": "0"
      },
      {
        "Name": "Neo I1 Flawless",
        "Platinum": "0"
      },
      {
        "Name": "Neo I1 Intact",
        "Platinum": "4"
      },
      {
        "Name": "Neo I1 Radiant",
        "Platinum": "0"
      },
      {
        "Name": "Neo I2 Exceptional",
        "Platinum": "0"
      },
      {
        "Name": "Neo I2 Flawless",
        "Platinum": "0"
      },
      {
        "Name": "Neo I2 Intact",
        "Platinum": "1"
      },
      {
        "Name": "Neo I2 Radiant",
        "Platinum": "13"
      },
      {
        "Name": "Neo K1 Exceptional",
        "Platinum": "0"
      },
      {
        "Name": "Neo K1 Flawless",
        "Platinum": "0"
      },
      {
        "Name": "Neo K1 Intact",
        "Platinum": "6"
      },
      {
        "Name": "Neo K1 Radiant",
        "Platinum": "0"
      },
      {
        "Name": "Neo K2 Exceptional",
        "Platinum": "0"
      },
      {
        "Name": "Neo K2 Flawless",
        "Platinum": "0"
      },
      {
        "Name": "Neo K2 Intact",
        "Platinum": "5"
      },
      {
        "Name": "Neo K2 Radiant",
        "Platinum": "0"
      },
      {
        "Name": "Neo L1 Exceptional",
        "Platinum": "0"
      },
      {
        "Name": "Neo L1 Flawless",
        "Platinum": "0"
      },
      {
        "Name": "Neo L1 Intact",
        "Platinum": "5"
      },
      {
        "Name": "Neo L1 Radiant",
        "Platinum": "0"
      },
      {
        "Name": "Neo M1 Exceptional",
        "Platinum": "0"
      },
      {
        "Name": "Neo M1 Flawless",
        "Platinum": "0"
      },
      {
        "Name": "Neo M1 Intact",
        "Platinum": "4"
      },
      {
        "Name": "Neo M1 Radiant",
        "Platinum": "18"
      },
      {
        "Name": "Neo M2 Exceptional",
        "Platinum": "0"
      },
      {
        "Name": "Neo M2 Flawless",
        "Platinum": "0"
      },
      {
        "Name": "Neo M2 Intact",
        "Platinum": "2"
      },
      {
        "Name": "Neo M2 Radiant",
        "Platinum": "0"
      },
      {
        "Name": "Neo M3 Exceptional",
        "Platinum": "0"
      },
      {
        "Name": "Neo M3 Flawless",
        "Platinum": "0"
      },
      {
        "Name": "Neo M3 Intact",
        "Platinum": "1"
      },
      {
        "Name": "Neo M3 Radiant",
        "Platinum": "0"
      },
      {
        "Name": "Neo N1 Exceptional",
        "Platinum": "0"
      },
      {
        "Name": "Neo N1 Flawless",
        "Platinum": "0"
      },
      {
        "Name": "Neo N1 Intact",
        "Platinum": "14"
      },
      {
        "Name": "Neo N1 Radiant",
        "Platinum": "50"
      },
      {
        "Name": "Neo N10 Exceptional",
        "Platinum": "0"
      },
      {
        "Name": "Neo N10 Flawless",
        "Platinum": "0"
      },
      {
        "Name": "Neo N10 Intact",
        "Platinum": "3"
      },
      {
        "Name": "Neo N10 Radiant",
        "Platinum": "0"
      },
      {
        "Name": "Neo N11 Exceptional",
        "Platinum": "0"
      },
      {
        "Name": "Neo N11 Flawless",
        "Platinum": "0"
      },
      {
        "Name": "Neo N11 Intact",
        "Platinum": "10"
      },
      {
        "Name": "Neo N11 Radiant",
        "Platinum": "16"
      },
      {
        "Name": "Neo N12 Exceptional",
        "Platinum": "2"
      },
      {
        "Name": "Neo N12 Flawless",
        "Platinum": "5"
      },
      {
        "Name": "Neo N12 Intact",
        "Platinum": "4"
      },
      {
        "Name": "Neo N12 Radiant",
        "Platinum": "11"
      },
      {
        "Name": "Neo N13 Exceptional",
        "Platinum": "0"
      },
      {
        "Name": "Neo N13 Flawless",
        "Platinum": "0"
      },
      {
        "Name": "Neo N13 Intact",
        "Platinum": "3"
      },
      {
        "Name": "Neo N13 Radiant",
        "Platinum": "15"
      },
      {
        "Name": "Neo N2 Exceptional",
        "Platinum": "0"
      },
      {
        "Name": "Neo N2 Flawless",
        "Platinum": "0"
      },
      {
        "Name": "Neo N2 Intact",
        "Platinum": "9"
      },
      {
        "Name": "Neo N2 Radiant",
        "Platinum": "29"
      },
      {
        "Name": "Neo N3 Exceptional",
        "Platinum": "0"
      },
      {
        "Name": "Neo N3 Flawless",
        "Platinum": "0"
      },
      {
        "Name": "Neo N3 Intact",
        "Platinum": "8"
      },
      {
        "Name": "Neo N3 Radiant",
        "Platinum": "0"
      },
      {
        "Name": "Neo N4 Exceptional",
        "Platinum": "0"
      },
      {
        "Name": "Neo N4 Flawless",
        "Platinum": "0"
      },
      {
        "Name": "Neo N4 Intact",
        "Platinum": "5"
      },
      {
        "Name": "Neo N4 Radiant",
        "Platinum": "0"
      },
      {
        "Name": "Neo N5 Exceptional",
        "Platinum": "0"
      },
      {
        "Name": "Neo N5 Flawless",
        "Platinum": "0"
      },
      {
        "Name": "Neo N5 Intact",
        "Platinum": "27"
      },
      {
        "Name": "Neo N5 Radiant",
        "Platinum": "0"
      },
      {
        "Name": "Neo N6 Exceptional",
        "Platinum": "0"
      },
      {
        "Name": "Neo N6 Flawless",
        "Platinum": "0"
      },
      {
        "Name": "Neo N6 Intact",
        "Platinum": "7"
      },
      {
        "Name": "Neo N6 Radiant",
        "Platinum": "0"
      },
      {
        "Name": "Neo N7 Exceptional",
        "Platinum": "4"
      },
      {
        "Name": "Neo N7 Flawless",
        "Platinum": "0"
      },
      {
        "Name": "Neo N7 Intact",
        "Platinum": "8"
      },
      {
        "Name": "Neo N7 Radiant",
        "Platinum": "0"
      },
      {
        "Name": "Neo N8 Exceptional",
        "Platinum": "0"
      },
      {
        "Name": "Neo N8 Flawless",
        "Platinum": "0"
      },
      {
        "Name": "Neo N8 Intact",
        "Platinum": "4"
      },
      {
        "Name": "Neo N8 Radiant",
        "Platinum": "0"
      },
      {
        "Name": "Neo N9 Exceptional",
        "Platinum": "0"
      },
      {
        "Name": "Neo N9 Flawless",
        "Platinum": "0"
      },
      {
        "Name": "Neo N9 Intact",
        "Platinum": "10"
      },
      {
        "Name": "Neo N9 Radiant",
        "Platinum": "0"
      },
      {
        "Name": "Neo O1 Exceptional",
        "Platinum": "0"
      },
      {
        "Name": "Neo O1 Flawless",
        "Platinum": "0"
      },
      {
        "Name": "Neo O1 Intact",
        "Platinum": "32"
      },
      {
        "Name": "Neo O1 Radiant",
        "Platinum": "0"
      },
      {
        "Name": "Neo P1 Exceptional",
        "Platinum": "0"
      },
      {
        "Name": "Neo P1 Flawless",
        "Platinum": "0"
      },
      {
        "Name": "Neo P1 Intact",
        "Platinum": "3"
      },
      {
        "Name": "Neo P1 Radiant",
        "Platinum": "0"
      },
      {
        "Name": "Neo R1 Exceptional",
        "Platinum": "0"
      },
      {
        "Name": "Neo R1 Flawless",
        "Platinum": "0"
      },
      {
        "Name": "Neo R1 Intact",
        "Platinum": "18"
      },
      {
        "Name": "Neo R1 Radiant",
        "Platinum": "33"
      },
      {
        "Name": "Neo R2 Exceptional",
        "Platinum": "0"
      },
      {
        "Name": "Neo R2 Flawless",
        "Platinum": "0"
      },
      {
        "Name": "Neo R2 Intact",
        "Platinum": "4"
      },
      {
        "Name": "Neo R2 Radiant",
        "Platinum": "0"
      },
      {
        "Name": "Neo R3 Exceptional",
        "Platinum": "0"
      },
      {
        "Name": "Neo R3 Flawless",
        "Platinum": "0"
      },
      {
        "Name": "Neo R3 Intact",
        "Platinum": "3"
      },
      {
        "Name": "Neo R3 Radiant",
        "Platinum": "0"
      },
      {
        "Name": "Neo R4 Exceptional",
        "Platinum": "0"
      },
      {
        "Name": "Neo R4 Flawless",
        "Platinum": "0"
      },
      {
        "Name": "Neo R4 Intact",
        "Platinum": "1"
      },
      {
        "Name": "Neo R4 Radiant",
        "Platinum": "0"
      },
      {
        "Name": "Neo S1 Exceptional",
        "Platinum": "0"
      },
      {
        "Name": "Neo S1 Flawless",
        "Platinum": "0"
      },
      {
        "Name": "Neo S1 Intact",
        "Platinum": "11"
      },
      {
        "Name": "Neo S1 Radiant",
        "Platinum": "0"
      },
      {
        "Name": "Neo S10 Exceptional",
        "Platinum": "0"
      },
      {
        "Name": "Neo S10 Flawless",
        "Platinum": "0"
      },
      {
        "Name": "Neo S10 Intact",
        "Platinum": "16"
      },
      {
        "Name": "Neo S10 Radiant",
        "Platinum": "18"
      },
      {
        "Name": "Neo S11 Exceptional",
        "Platinum": "0"
      },
      {
        "Name": "Neo S11 Flawless",
        "Platinum": "0"
      },
      {
        "Name": "Neo S11 Intact",
        "Platinum": "3"
      },
      {
        "Name": "Neo S11 Radiant",
        "Platinum": "0"
      },
      {
        "Name": "Neo S12 Exceptional",
        "Platinum": "0"
      },
      {
        "Name": "Neo S12 Flawless",
        "Platinum": "0"
      },
      {
        "Name": "Neo S12 Intact",
        "Platinum": "2"
      },
      {
        "Name": "Neo S12 Radiant",
        "Platinum": "0"
      },
      {
        "Name": "Neo S13 Exceptional",
        "Platinum": "0"
      },
      {
        "Name": "Neo S13 Flawless",
        "Platinum": "0"
      },
      {
        "Name": "Neo S13 Intact",
        "Platinum": "19"
      },
      {
        "Name": "Neo S13 Radiant",
        "Platinum": "29"
      },
      {
        "Name": "Neo S14 Exceptional",
        "Platinum": "0"
      },
      {
        "Name": "Neo S14 Flawless",
        "Platinum": "0"
      },
      {
        "Name": "Neo S14 Intact",
        "Platinum": "1"
      },
      {
        "Name": "Neo S14 Radiant",
        "Platinum": "0"
      },
      {
        "Name": "Neo S2 Exceptional",
        "Platinum": "0"
      },
      {
        "Name": "Neo S2 Flawless",
        "Platinum": "0"
      },
      {
        "Name": "Neo S2 Intact",
        "Platinum": "16"
      },
      {
        "Name": "Neo S2 Radiant",
        "Platinum": "0"
      },
      {
        "Name": "Neo S3 Exceptional",
        "Platinum": "0"
      },
      {
        "Name": "Neo S3 Flawless",
        "Platinum": "0"
      },
      {
        "Name": "Neo S3 Intact",
        "Platinum": "8"
      },
      {
        "Name": "Neo S3 Radiant",
        "Platinum": "0"
      },
      {
        "Name": "Neo S4 Exceptional",
        "Platinum": "0"
      },
      {
        "Name": "Neo S4 Flawless",
        "Platinum": "0"
      },
      {
        "Name": "Neo S4 Intact",
        "Platinum": "5"
      },
      {
        "Name": "Neo S4 Radiant",
        "Platinum": "0"
      },
      {
        "Name": "Neo S5 Exceptional",
        "Platinum": "0"
      },
      {
        "Name": "Neo S5 Flawless",
        "Platinum": "0"
      },
      {
        "Name": "Neo S5 Intact",
        "Platinum": "2"
      },
      {
        "Name": "Neo S5 Radiant",
        "Platinum": "13"
      },
      {
        "Name": "Neo S6 Exceptional",
        "Platinum": "0"
      },
      {
        "Name": "Neo S6 Flawless",
        "Platinum": "0"
      },
      {
        "Name": "Neo S6 Intact",
        "Platinum": "4"
      },
      {
        "Name": "Neo S6 Radiant",
        "Platinum": "0"
      },
      {
        "Name": "Neo S7 Exceptional",
        "Platinum": "0"
      },
      {
        "Name": "Neo S7 Flawless",
        "Platinum": "0"
      },
      {
        "Name": "Neo S7 Intact",
        "Platinum": "2"
      },
      {
        "Name": "Neo S7 Radiant",
        "Platinum": "0"
      },
      {
        "Name": "Neo S8 Exceptional",
        "Platinum": "0"
      },
      {
        "Name": "Neo S8 Flawless",
        "Platinum": "0"
      },
      {
        "Name": "Neo S8 Intact",
        "Platinum": "4"
      },
      {
        "Name": "Neo S8 Radiant",
        "Platinum": "0"
      },
      {
        "Name": "Neo S9 Exceptional",
        "Platinum": "0"
      },
      {
        "Name": "Neo S9 Flawless",
        "Platinum": "0"
      },
      {
        "Name": "Neo S9 Intact",
        "Platinum": "2"
      },
      {
        "Name": "Neo S9 Radiant",
        "Platinum": "0"
      },
      {
        "Name": "Neo T1 Exceptional",
        "Platinum": "0"
      },
      {
        "Name": "Neo T1 Flawless",
        "Platinum": "0"
      },
      {
        "Name": "Neo T1 Intact",
        "Platinum": "4"
      },
      {
        "Name": "Neo T1 Radiant",
        "Platinum": "0"
      },
      {
        "Name": "Neo T2 Exceptional",
        "Platinum": "0"
      },
      {
        "Name": "Neo T2 Flawless",
        "Platinum": "0"
      },
      {
        "Name": "Neo T2 Intact",
        "Platinum": "1"
      },
      {
        "Name": "Neo T2 Radiant",
        "Platinum": "2"
      },
      {
        "Name": "Neo T3 Exceptional",
        "Platinum": "0"
      },
      {
        "Name": "Neo T3 Flawless",
        "Platinum": "0"
      },
      {
        "Name": "Neo T3 Intact",
        "Platinum": "1"
      },
      {
        "Name": "Neo T3 Radiant",
        "Platinum": "2"
      },
      {
        "Name": "Neo V1 Exceptional",
        "Platinum": "0"
      },
      {
        "Name": "Neo V1 Flawless",
        "Platinum": "0"
      },
      {
        "Name": "Neo V1 Intact",
        "Platinum": "20"
      },
      {
        "Name": "Neo V1 Radiant",
        "Platinum": "24"
      },
      {
        "Name": "Neo V2 Exceptional",
        "Platinum": "0"
      },
      {
        "Name": "Neo V2 Flawless",
        "Platinum": "0"
      },
      {
        "Name": "Neo V2 Intact",
        "Platinum": "4"
      },
      {
        "Name": "Neo V2 Radiant",
        "Platinum": "0"
      },
      {
        "Name": "Neo V3 Exceptional",
        "Platinum": "0"
      },
      {
        "Name": "Neo V3 Flawless",
        "Platinum": "0"
      },
      {
        "Name": "Neo V3 Intact",
        "Platinum": "6"
      },
      {
        "Name": "Neo V3 Radiant",
        "Platinum": "0"
      },
      {
        "Name": "Neo V4 Exceptional",
        "Platinum": "0"
      },
      {
        "Name": "Neo V4 Flawless",
        "Platinum": "0"
      },
      {
        "Name": "Neo V4 Intact",
        "Platinum": "10"
      },
      {
        "Name": "Neo V4 Radiant",
        "Platinum": "0"
      },
      {
        "Name": "Neo V5 Exceptional",
        "Platinum": "0"
      },
      {
        "Name": "Neo V5 Flawless",
        "Platinum": "0"
      },
      {
        "Name": "Neo V5 Intact",
        "Platinum": "5"
      },
      {
        "Name": "Neo V5 Radiant",
        "Platinum": "0"
      },
      {
        "Name": "Neo V6 Exceptional",
        "Platinum": "4"
      },
      {
        "Name": "Neo V6 Flawless",
        "Platinum": "0"
      },
      {
        "Name": "Neo V6 Intact",
        "Platinum": "4"
      },
      {
        "Name": "Neo V6 Radiant",
        "Platinum": "0"
      },
      {
        "Name": "Neo V7 Exceptional",
        "Platinum": "10"
      },
      {
        "Name": "Neo V7 Flawless",
        "Platinum": "0"
      },
      {
        "Name": "Neo V7 Intact",
        "Platinum": "5"
      },
      {
        "Name": "Neo V7 Radiant",
        "Platinum": "0"
      },
      {
        "Name": "Neo V8 Exceptional",
        "Platinum": "0"
      },
      {
        "Name": "Neo V8 Flawless",
        "Platinum": "0"
      },
      {
        "Name": "Neo V8 Intact",
        "Platinum": "22"
      },
      {
        "Name": "Neo V8 Radiant",
        "Platinum": "39"
      },
      {
        "Name": "Neo Z1 Exceptional",
        "Platinum": "0"
      },
      {
        "Name": "Neo Z1 Flawless",
        "Platinum": "0"
      },
      {
        "Name": "Neo Z1 Intact",
        "Platinum": "6"
      },
      {
        "Name": "Neo Z1 Radiant",
        "Platinum": "0"
      },
      {
        "Name": "Neo Z2 Exceptional",
        "Platinum": "0"
      },
      {
        "Name": "Neo Z2 Flawless",
        "Platinum": "0"
      },
      {
        "Name": "Neo Z2 Intact",
        "Platinum": "2"
      },
      {
        "Name": "Neo Z2 Radiant",
        "Platinum": "0"
      },
      {
        "Name": "Neo Z3 Exceptional",
        "Platinum": "0"
      },
      {
        "Name": "Neo Z3 Flawless",
        "Platinum": "0"
      },
      {
        "Name": "Neo Z3 Intact",
        "Platinum": "2"
      },
      {
        "Name": "Neo Z3 Radiant",
        "Platinum": "0"
      },
      {
        "Name": "Neo Z4 Exceptional",
        "Platinum": "0"
      },
      {
        "Name": "Neo Z4 Flawless",
        "Platinum": "0"
      },
      {
        "Name": "Neo Z4 Intact",
        "Platinum": "12"
      },
      {
        "Name": "Neo Z4 Radiant",
        "Platinum": "0"
      },
      {
        "Name": "Neo Z5 Exceptional",
        "Platinum": "0"
      },
      {
        "Name": "Neo Z5 Flawless",
        "Platinum": "0"
      },
      {
        "Name": "Neo Z5 Intact",
        "Platinum": "1"
      },
      {
        "Name": "Neo Z5 Radiant",
        "Platinum": "0"
      },
      {
        "Name": "Neo Z6 Exceptional",
        "Platinum": "0"
      },
      {
        "Name": "Neo Z6 Flawless",
        "Platinum": "0"
      },
      {
        "Name": "Neo Z6 Intact",
        "Platinum": "2"
      },
      {
        "Name": "Neo Z6 Radiant",
        "Platinum": "9"
      },
      {
        "Name": "NETRA",
        "Platinum": "10"
      },
      {
        "Name": "Neutralize",
        "Platinum": "12"
      },
      {
        "Name": "Neutralizing Justice",
        "Platinum": "12"
      },
      {
        "Name": "Neutron Star",
        "Platinum": "11"
      },
      {
        "Name": "New Loka Augment Mod",
        "Platinum": "10"
      },
      {
        "Name": "Nezha Prime Blueprint",
        "Platinum": "6"
      },
      {
        "Name": "Nezha Prime Chassis",
        "Platinum": "24"
      },
      {
        "Name": "Nezha Prime Neuroptics",
        "Platinum": "14"
      },
      {
        "Name": "Nezha Prime Set",
        "Platinum": "64"
      },
      {
        "Name": "Nezha Prime Systems",
        "Platinum": "7"
      },
      {
        "Name": "Night Stalker",
        "Platinum": "0"
      },
      {
        "Name": "Nightwatch Napalm",
        "Platinum": "17"
      },
      {
        "Name": "Nikana Prime Blade",
        "Platinum": "17"
      },
      {
        "Name": "Nikana Prime Blueprint",
        "Platinum": "8"
      },
      {
        "Name": "Nikana Prime Hilt",
        "Platinum": "62"
      },
      {
        "Name": "Nikana Prime Set",
        "Platinum": "97"
      },
      {
        "Name": "Ninkondi Prime Blueprint",
        "Platinum": "2"
      },
      {
        "Name": "Ninkondi Prime Chain",
        "Platinum": "2"
      },
      {
        "Name": "Ninkondi Prime Handle",
        "Platinum": "8"
      },
      {
        "Name": "Ninkondi Prime Set",
        "Platinum": "21"
      },
      {
        "Name": "Nitro Boost",
        "Platinum": "16"
      },
      {
        "Name": "No Current Leap",
        "Platinum": "5"
      },
      {
        "Name": "No Return",
        "Platinum": "2"
      },
      {
        "Name": "Noble Cadence",
        "Platinum": "2"
      },
      {
        "Name": "North Wind",
        "Platinum": "2"
      },
      {
        "Name": "Nova Prime Blueprint",
        "Platinum": "8"
      },
      {
        "Name": "Nova Prime Chassis",
        "Platinum": "38"
      },
      {
        "Name": "Nova Prime Neuroptics",
        "Platinum": "9"
      },
      {
        "Name": "Nova Prime Set",
        "Platinum": "73"
      },
      {
        "Name": "Nova Prime Systems",
        "Platinum": "6"
      },
      {
        "Name": "Nyx Prime Blueprint",
        "Platinum": "7"
      },
      {
        "Name": "Nyx Prime Chassis",
        "Platinum": "15"
      },
      {
        "Name": "Nyx Prime Neuroptics",
        "Platinum": "77"
      },
      {
        "Name": "Nyx Prime Set",
        "Platinum": "129"
      },
      {
        "Name": "Nyx Prime Systems",
        "Platinum": "13"
      },
      {
        "Name": "Oberon Prime Blueprint",
        "Platinum": "4"
      },
      {
        "Name": "Oberon Prime Chassis",
        "Platinum": "7"
      },
      {
        "Name": "Oberon Prime Neuroptics",
        "Platinum": "20"
      },
      {
        "Name": "Oberon Prime Set",
        "Platinum": "72"
      },
      {
        "Name": "Oberon Prime Systems",
        "Platinum": "24"
      },
      {
        "Name": "Odomedic",
        "Platinum": "18"
      },
      {
        "Name": "Odonata Prime Blueprint",
        "Platinum": "8"
      },
      {
        "Name": "Odonata Prime Harness",
        "Platinum": "16"
      },
      {
        "Name": "Odonata Prime Set",
        "Platinum": "64"
      },
      {
        "Name": "Odonata Prime Systems",
        "Platinum": "5"
      },
      {
        "Name": "Odonata Prime Wings",
        "Platinum": "32"
      },
      {
        "Name": "Omega Beacon",
        "Platinum": "0"
      },
      {
        "Name": "Onkko's Command Post Scene",
        "Platinum": "30"
      },
      {
        "Name": "Onorix Blade",
        "Platinum": "10"
      },
      {
        "Name": "Onorix Handle",
        "Platinum": "10"
      },
      {
        "Name": "Onorix Set",
        "Platinum": "31"
      },
      {
        "Name": "Orb Vallis Scene",
        "Platinum": "35"
      },
      {
        "Name": "Orbiter Scene",
        "Platinum": "1609"
      },
      {
        "Name": "Ordnance Cheap Shot",
        "Platinum": "6"
      },
      {
        "Name": "Ordnance Velocity",
        "Platinum": "13"
      },
      {
        "Name": "Ore Gaze",
        "Platinum": "11"
      },
      {
        "Name": "Organ Shatter",
        "Platinum": "6"
      },
      {
        "Name": "Orokin Derelict Plaza Scene",
        "Platinum": "37"
      },
      {
        "Name": "Orokin Tower Extraction Scene",
        "Platinum": "214"
      },
      {
        "Name": "Orta Ayatan Sculpture",
        "Platinum": "6"
      },
      {
        "Name": "Orthos Prime Blade",
        "Platinum": "3"
      },
      {
        "Name": "Orthos Prime Blueprint",
        "Platinum": "2"
      },
      {
        "Name": "Orthos Prime Handle",
        "Platinum": "2"
      },
      {
        "Name": "Orthos Prime Set",
        "Platinum": "9"
      },
      {
        "Name": "Orvius Blade",
        "Platinum": "2"
      },
      {
        "Name": "Orvius Disc",
        "Platinum": "1"
      },
      {
        "Name": "Ostimyr (Large)",
        "Platinum": "0"
      },
      {
        "Name": "Ostimyr (Medium)",
        "Platinum": "0"
      },
      {
        "Name": "Ostimyr (Small)",
        "Platinum": "0"
      },
      {
        "Name": "Out Of Sight",
        "Platinum": "5"
      },
      {
        "Name": "Overcharge Detectors",
        "Platinum": "0"
      },
      {
        "Name": "Overcharged",
        "Platinum": "0"
      },
      {
        "Name": "Overextended",
        "Platinum": "16"
      },
      {
        "Name": "Overloader",
        "Platinum": "10"
      },
      {
        "Name": "Overview",
        "Platinum": "0"
      },
      {
        "Name": "Pacifying Bolts",
        "Platinum": "14"
      },
      {
        "Name": "Pack Leader",
        "Platinum": "4"
      },
      {
        "Name": "Pain Threshold",
        "Platinum": "5"
      },
      {
        "Name": "Pangolin Prime Blade",
        "Platinum": "4"
      },
      {
        "Name": "Pangolin Prime Blueprint",
        "Platinum": "8"
      },
      {
        "Name": "Pangolin Prime Handle",
        "Platinum": "3"
      },
      {
        "Name": "Pangolin Prime Set",
        "Platinum": "14"
      },
      {
        "Name": "Panthera Prime Barrel",
        "Platinum": "8"
      },
      {
        "Name": "Panthera Prime Blueprint",
        "Platinum": "5"
      },
      {
        "Name": "Panthera Prime Receiver",
        "Platinum": "11"
      },
      {
        "Name": "Panthera Prime Set",
        "Platinum": "39"
      },
      {
        "Name": "Panthera Prime Stock",
        "Platinum": "4"
      },
      {
        "Name": "Panzer Devolution",
        "Platinum": "45"
      },
      {
        "Name": "Parallax Scope",
        "Platinum": "3"
      },
      {
        "Name": "Paralytic Spores",
        "Platinum": "0"
      },
      {
        "Name": "Paris Prime Blueprint",
        "Platinum": "1"
      },
      {
        "Name": "Paris Prime Grip",
        "Platinum": "4"
      },
      {
        "Name": "Paris Prime Lower Limb",
        "Platinum": "2"
      },
      {
        "Name": "Paris Prime Set",
        "Platinum": "9"
      },
      {
        "Name": "Paris Prime String",
        "Platinum": "3"
      },
      {
        "Name": "Paris Prime Upper Limb",
        "Platinum": "2"
      },
      {
        "Name": "Parry",
        "Platinum": "5"
      },
      {
        "Name": "Particle Ram",
        "Platinum": "6"
      },
      {
        "Name": "Partitioned Mallet",
        "Platinum": "11"
      },
      {
        "Name": "Patagium",
        "Platinum": "4"
      },
      {
        "Name": "Path of Statues",
        "Platinum": "12"
      },
      {
        "Name": "Pathocyst Blade",
        "Platinum": "16"
      },
      {
        "Name": "Pathocyst Blueprint",
        "Platinum": "3"
      },
      {
        "Name": "Pathocyst Set",
        "Platinum": "43"
      },
      {
        "Name": "Pathocyst Subcortex",
        "Platinum": "4"
      },
      {
        "Name": "Pathogen Rounds",
        "Platinum": "9"
      },
      {
        "Name": "Pax Bolt",
        "Platinum": "19"
      },
      {
        "Name": "Pax Charge",
        "Platinum": "17"
      },
      {
        "Name": "Pax Seeker",
        "Platinum": "18"
      },
      {
        "Name": "Pax Soar",
        "Platinum": "20"
      },
      {
        "Name": "Peaceful Provocation",
        "Platinum": "13"
      },
      {
        "Name": "Peculiar Bloom",
        "Platinum": "18"
      },
      {
        "Name": "Peculiar Growth",
        "Platinum": "16"
      },
      {
        "Name": "Pennant Blueprint",
        "Platinum": "47"
      },
      {
        "Name": "Perfect Balance",
        "Platinum": "34"
      },
      {
        "Name": "Perpetual Agony",
        "Platinum": "0"
      },
      {
        "Name": "Phaedra Barrel",
        "Platinum": "10"
      },
      {
        "Name": "Phaedra Receiver",
        "Platinum": "10"
      },
      {
        "Name": "Phaedra Set",
        "Platinum": "48"
      },
      {
        "Name": "Phaedra Stock",
        "Platinum": "10"
      },
      {
        "Name": "Phasic Weave",
        "Platinum": "0"
      },
      {
        "Name": "Phoenix Renewal",
        "Platinum": "11"
      },
      {
        "Name": "Photon Repeater",
        "Platinum": "13"
      },
      {
        "Name": "Physique",
        "Platinum": "10"
      },
      {
        "Name": "Piercing Caliber",
        "Platinum": "17"
      },
      {
        "Name": "Piercing Fury",
        "Platinum": "2"
      },
      {
        "Name": "Piercing Hit",
        "Platinum": "2"
      },
      {
        "Name": "Piercing Navigator",
        "Platinum": "12"
      },
      {
        "Name": "Piercing Roar",
        "Platinum": "11"
      },
      {
        "Name": "Piercing Step",
        "Platinum": "5"
      },
      {
        "Name": "Pilfering Strangledome",
        "Platinum": "10"
      },
      {
        "Name": "Pilfering Swarm",
        "Platinum": "10"
      },
      {
        "Name": "Pistol Ammo Mutation",
        "Platinum": "4"
      },
      {
        "Name": "Pistol Amp",
        "Platinum": "5"
      },
      {
        "Name": "Pistol Gambit",
        "Platinum": "2"
      },
      {
        "Name": "Pistol Pestilence",
        "Platinum": "4"
      },
      {
        "Name": "Pistol Riven Mod (Veiled)",
        "Platinum": "5"
      },
      {
        "Name": "Pistol Scavenger",
        "Platinum": "9"
      },
      {
        "Name": "Piv Ayatan Sculpture",
        "Platinum": "4"
      },
      {
        "Name": "Plains of Eidolon Scene",
        "Platinum": "55"
      },
      {
        "Name": "Plan B",
        "Platinum": "12"
      },
      {
        "Name": "Point Blank",
        "Platinum": "3"
      },
      {
        "Name": "Point Strike",
        "Platinum": "4"
      },
      {
        "Name": "Pointed Wind",
        "Platinum": "5"
      },
      {
        "Name": "Poisonous Sting",
        "Platinum": "7"
      },
      {
        "Name": "Polar Coil",
        "Platinum": "7"
      },
      {
        "Name": "Polar Magazine",
        "Platinum": "4"
      },
      {
        "Name": "Pool of Life",
        "Platinum": "12"
      },
      {
        "Name": "Pop Top",
        "Platinum": "14"
      },
      {
        "Name": "Poppin' Vert",
        "Platinum": "14"
      },
      {
        "Name": "Pounce",
        "Platinum": "6"
      },
      {
        "Name": "Power Donation",
        "Platinum": "18"
      },
      {
        "Name": "Power Drift",
        "Platinum": "6"
      },
      {
        "Name": "Power of Three",
        "Platinum": "17"
      },
      {
        "Name": "Power Throw",
        "Platinum": "2"
      },
      {
        "Name": "Precision Munition",
        "Platinum": "0"
      },
      {
        "Name": "Precision Strike",
        "Platinum": "10"
      },
      {
        "Name": "Predator",
        "Platinum": "9"
      },
      {
        "Name": "Preparation",
        "Platinum": "35"
      },
      {
        "Name": "Pressure Point",
        "Platinum": "36369"
      },
      {
        "Name": "Pressurized Magazine",
        "Platinum": "4"
      },
      {
        "Name": "Primal Rage",
        "Platinum": "11"
      },
      {
        "Name": "Primed Animal Instinct",
        "Platinum": "141"
      },
      {
        "Name": "Primed Bane of Corpus",
        "Platinum": "59"
      },
      {
        "Name": "Primed Bane of Corrupted",
        "Platinum": "64"
      },
      {
        "Name": "Primed Bane of Grineer",
        "Platinum": "68"
      },
      {
        "Name": "Primed Bane of Infested",
        "Platinum": "59"
      },
      {
        "Name": "Primed Chamber",
        "Platinum": "482"
      },
      {
        "Name": "Primed Charged Shell",
        "Platinum": "104"
      },
      {
        "Name": "Primed Cleanse Corpus",
        "Platinum": "63"
      },
      {
        "Name": "Primed Cleanse Corrupted",
        "Platinum": "60"
      },
      {
        "Name": "Primed Cleanse Grineer",
        "Platinum": "66"
      },
      {
        "Name": "Primed Cleanse Infested",
        "Platinum": "62"
      },
      {
        "Name": "Primed Continuity",
        "Platinum": "130"
      },
      {
        "Name": "Primed Cryo Rounds",
        "Platinum": "119"
      },
      {
        "Name": "Primed Expel Corpus",
        "Platinum": "55"
      },
      {
        "Name": "Primed Expel Corrupted",
        "Platinum": "48"
      },
      {
        "Name": "Primed Expel Grineer",
        "Platinum": "56"
      },
      {
        "Name": "Primed Expel Infested",
        "Platinum": "50"
      },
      {
        "Name": "Primed Fast Hands",
        "Platinum": "103"
      },
      {
        "Name": "Primed Fever Strike",
        "Platinum": "112"
      },
      {
        "Name": "Primed Firestorm",
        "Platinum": "69"
      },
      {
        "Name": "Primed Flow",
        "Platinum": "129"
      },
      {
        "Name": "Primed Fulmination",
        "Platinum": "73"
      },
      {
        "Name": "Primed Heated Charge",
        "Platinum": "76"
      },
      {
        "Name": "Primed Heavy Trauma",
        "Platinum": "58"
      },
      {
        "Name": "Primed Morphic Transformer",
        "Platinum": "98"
      },
      {
        "Name": "Primed Pack Leader",
        "Platinum": "131"
      },
      {
        "Name": "Primed Pistol Ammo Mutation",
        "Platinum": "193"
      },
      {
        "Name": "Primed Pistol Gambit",
        "Platinum": "130"
      },
      {
        "Name": "Primed Point Blank",
        "Platinum": "114"
      },
      {
        "Name": "Primed Pressure Point",
        "Platinum": "133"
      },
      {
        "Name": "Primed Quickdraw",
        "Platinum": "99"
      },
      {
        "Name": "Primed Ravage",
        "Platinum": "99"
      },
      {
        "Name": "Primed Reach",
        "Platinum": "59"
      },
      {
        "Name": "Primed Regen",
        "Platinum": "123"
      },
      {
        "Name": "Primed Rifle Ammo Mutation",
        "Platinum": "172"
      },
      {
        "Name": "Primed Rubedo-Lined Barrel",
        "Platinum": "211"
      },
      {
        "Name": "Primed Shotgun Ammo Mutation",
        "Platinum": "175"
      },
      {
        "Name": "Primed Slip Magazine",
        "Platinum": "72"
      },
      {
        "Name": "Primed Smite Corpus",
        "Platinum": "179"
      },
      {
        "Name": "Primed Smite Corrupted",
        "Platinum": "185"
      },
      {
        "Name": "Primed Smite Grineer",
        "Platinum": "197"
      },
      {
        "Name": "Primed Smite Infested",
        "Platinum": "163"
      },
      {
        "Name": "Primed Target Cracker",
        "Platinum": "120"
      },
      {
        "Name": "Primo Flair",
        "Platinum": "20"
      },
      {
        "Name": "Prism Guard",
        "Platinum": "19"
      },
      {
        "Name": "Prisma Angstrum",
        "Platinum": "43"
      },
      {
        "Name": "Prisma Dual Cleavers",
        "Platinum": "92"
      },
      {
        "Name": "Prisma Gorgon",
        "Platinum": "60"
      },
      {
        "Name": "Prisma Grakata",
        "Platinum": "91"
      },
      {
        "Name": "Prisma Grinlok",
        "Platinum": "63"
      },
      {
        "Name": "Prisma Obex",
        "Platinum": "56"
      },
      {
        "Name": "Prisma Shade",
        "Platinum": "119"
      },
      {
        "Name": "Prisma Skana",
        "Platinum": "54"
      },
      {
        "Name": "Prisma Tetra",
        "Platinum": "52"
      },
      {
        "Name": "Prisma Twin Gremlins",
        "Platinum": "95"
      },
      {
        "Name": "Prisma Veritux",
        "Platinum": "57"
      },
      {
        "Name": "Prize Kill",
        "Platinum": "0"
      },
      {
        "Name": "Proboscis",
        "Platinum": "6"
      },
      {
        "Name": "Prolonged Paralysis",
        "Platinum": "13"
      },
      {
        "Name": "Proof Fragment",
        "Platinum": "1"
      },
      {
        "Name": "Protect",
        "Platinum": "5"
      },
      {
        "Name": "Proton Jet",
        "Platinum": "6"
      },
      {
        "Name": "Proton Pulse",
        "Platinum": "5"
      },
      {
        "Name": "Proton Snap",
        "Platinum": "5"
      },
      {
        "Name": "Prova Vandal",
        "Platinum": "47"
      },
      {
        "Name": "Provoked",
        "Platinum": "14289"
      },
      {
        "Name": "Pummel",
        "Platinum": "3"
      },
      {
        "Name": "Purged Dagonic",
        "Platinum": "1"
      },
      {
        "Name": "Purging Slash",
        "Platinum": "8"
      },
      {
        "Name": "Purified Heciphron",
        "Platinum": "1"
      },
      {
        "Name": "Purifying Flames",
        "Platinum": "12"
      },
      {
        "Name": "Push & Pull",
        "Platinum": "0"
      },
      {
        "Name": "Pyrana Prime Barrel",
        "Platinum": "4"
      },
      {
        "Name": "Pyrana Prime Blueprint",
        "Platinum": "24"
      },
      {
        "Name": "Pyrana Prime Receiver",
        "Platinum": "5"
      },
      {
        "Name": "Pyrana Prime Set",
        "Platinum": "46"
      },
      {
        "Name": "Pyroclastic Flow",
        "Platinum": "12"
      },
      {
        "Name": "Quaking Hand",
        "Platinum": "2"
      },
      {
        "Name": "Quanta Vandal",
        "Platinum": "44"
      },
      {
        "Name": "Quasar Drill",
        "Platinum": "6"
      },
      {
        "Name": "Quellor Blueprint",
        "Platinum": "20"
      },
      {
        "Name": "Quick Charge",
        "Platinum": "0"
      },
      {
        "Name": "Quick Escape",
        "Platinum": "15"
      },
      {
        "Name": "Quick Reload",
        "Platinum": "13"
      },
      {
        "Name": "Quick Return",
        "Platinum": "1"
      },
      {
        "Name": "Quick Thinking",
        "Platinum": "6"
      },
      {
        "Name": "Quickdraw",
        "Platinum": "1"
      },
      {
        "Name": "Quickening",
        "Platinum": "7"
      },
      {
        "Name": "Quicklock",
        "Platinum": "5"
      },
      {
        "Name": "Radian Sentirum",
        "Platinum": "1"
      },
      {
        "Name": "Radiant Finish",
        "Platinum": "12"
      },
      {
        "Name": "Radiant Zodian",
        "Platinum": "2"
      },
      {
        "Name": "Rage",
        "Platinum": "9"
      },
      {
        "Name": "Rail Guards",
        "Platinum": "16"
      },
      {
        "Name": "Raksa Kubrow Imprint",
        "Platinum": "13"
      },
      {
        "Name": "Rakta Ballistica",
        "Platinum": "29"
      },
      {
        "Name": "Rakta Cernos",
        "Platinum": "28"
      },
      {
        "Name": "Rakta Dark Dagger",
        "Platinum": "30"
      },
      {
        "Name": "Rapid Resilience",
        "Platinum": "5"
      },
      {
        "Name": "Rathbone Handle",
        "Platinum": "9"
      },
      {
        "Name": "Rathbone Head",
        "Platinum": "10"
      },
      {
        "Name": "Rathbone Set",
        "Platinum": "31"
      },
      {
        "Name": "Ravage",
        "Platinum": "3"
      },
      {
        "Name": "Razor Munitions",
        "Platinum": "0"
      },
      {
        "Name": "Razor Shot",
        "Platinum": "1"
      },
      {
        "Name": "Razorwing Blitz",
        "Platinum": "11"
      },
      {
        "Name": "Reach",
        "Platinum": "3"
      },
      {
        "Name": "Reactive Storm",
        "Platinum": "12"
      },
      {
        "Name": "Reaper Prime Blade",
        "Platinum": "5"
      },
      {
        "Name": "Reaper Prime Blueprint",
        "Platinum": "5"
      },
      {
        "Name": "Reaper Prime Handle",
        "Platinum": "9"
      },
      {
        "Name": "Reaper Prime Set",
        "Platinum": "27"
      },
      {
        "Name": "Reaping Chakram",
        "Platinum": "12"
      },
      {
        "Name": "Reaping Spiral",
        "Platinum": "3"
      },
      {
        "Name": "Reawaken",
        "Platinum": "50"
      },
      {
        "Name": "Rebound",
        "Platinum": "8"
      },
      {
        "Name": "Recharge Barrier",
        "Platinum": "11"
      },
      {
        "Name": "Recover",
        "Platinum": "0"
      },
      {
        "Name": "Recuperate",
        "Platinum": "0"
      },
      {
        "Name": "Red Veil Augment Mod",
        "Platinum": "9"
      },
      {
        "Name": "Redeemer Prime Blade",
        "Platinum": "3"
      },
      {
        "Name": "Redeemer Prime Blueprint",
        "Platinum": "2"
      },
      {
        "Name": "Redeemer Prime Handle",
        "Platinum": "26"
      },
      {
        "Name": "Redeemer Prime Set",
        "Platinum": "36"
      },
      {
        "Name": "Redirection",
        "Platinum": "24"
      },
      {
        "Name": "Reflect",
        "Platinum": "2"
      },
      {
        "Name": "Reflection",
        "Platinum": "3"
      },
      {
        "Name": "Reflex Coil",
        "Platinum": "4"
      },
      {
        "Name": "Reflex Draw",
        "Platinum": "9"
      },
      {
        "Name": "Reflex Guard",
        "Platinum": "24"
      },
      {
        "Name": "Regen",
        "Platinum": "1"
      },
      {
        "Name": "Regenerative Molt",
        "Platinum": "10"
      },
      {
        "Name": "Reinforcing Stomp",
        "Platinum": "12"
      },
      {
        "Name": "Rejuvenation",
        "Platinum": "29"
      },
      {
        "Name": "Relentless Assault",
        "Platinum": "0"
      },
      {
        "Name": "Relentless Combination",
        "Platinum": "4"
      },
      {
        "Name": "Rending Crane",
        "Platinum": "9"
      },
      {
        "Name": "Rending Strike",
        "Platinum": "3"
      },
      {
        "Name": "Rending Turn",
        "Platinum": "5"
      },
      {
        "Name": "Rending Wind",
        "Platinum": "2"
      },
      {
        "Name": "Repair Kit",
        "Platinum": "3"
      },
      {
        "Name": "Repeater Clip",
        "Platinum": "9"
      },
      {
        "Name": "Repelling Bastille",
        "Platinum": "13"
      },
      {
        "Name": "Requiem I Exceptional",
        "Platinum": "7"
      },
      {
        "Name": "Requiem I Flawless",
        "Platinum": "0"
      },
      {
        "Name": "Requiem I Intact",
        "Platinum": "1"
      },
      {
        "Name": "Requiem I Radiant",
        "Platinum": "8"
      },
      {
        "Name": "Requiem II Exceptional",
        "Platinum": "8"
      },
      {
        "Name": "Requiem II Flawless",
        "Platinum": "0"
      },
      {
        "Name": "Requiem II Intact",
        "Platinum": "1"
      },
      {
        "Name": "Requiem II Radiant",
        "Platinum": "7"
      },
      {
        "Name": "Requiem III Exceptional",
        "Platinum": "0"
      },
      {
        "Name": "Requiem III Flawless",
        "Platinum": "0"
      },
      {
        "Name": "Requiem III Intact",
        "Platinum": "1"
      },
      {
        "Name": "Requiem III Radiant",
        "Platinum": "5"
      },
      {
        "Name": "Requiem IV Exceptional",
        "Platinum": "13"
      },
      {
        "Name": "Requiem IV Flawless",
        "Platinum": "0"
      },
      {
        "Name": "Requiem IV Intact",
        "Platinum": "2"
      },
      {
        "Name": "Requiem IV Radiant",
        "Platinum": "5"
      },
      {
        "Name": "Residual Boils",
        "Platinum": "19"
      },
      {
        "Name": "Residual Malodor",
        "Platinum": "14"
      },
      {
        "Name": "Residual Shock",
        "Platinum": "23"
      },
      {
        "Name": "Residual Viremia",
        "Platinum": "20"
      },
      {
        "Name": "Resolute Focus",
        "Platinum": "5"
      },
      {
        "Name": "Resonance",
        "Platinum": "13"
      },
      {
        "Name": "Resonating Quake",
        "Platinum": "12"
      },
      {
        "Name": "Retarget",
        "Platinum": "0"
      },
      {
        "Name": "Retribution",
        "Platinum": "5"
      },
      {
        "Name": "Retrieve",
        "Platinum": "8"
      },
      {
        "Name": "Revealing Spores",
        "Platinum": "13"
      },
      {
        "Name": "Revenge",
        "Platinum": "20"
      },
      {
        "Name": "Revo Reducer",
        "Platinum": "9"
      },
      {
        "Name": "Rhino Prime Blueprint",
        "Platinum": "92"
      },
      {
        "Name": "Rhino Prime Chassis",
        "Platinum": "34"
      },
      {
        "Name": "Rhino Prime Neuroptics",
        "Platinum": "34"
      },
      {
        "Name": "Rhino Prime Set",
        "Platinum": "195"
      },
      {
        "Name": "Rhino Prime Systems",
        "Platinum": "13"
      },
      {
        "Name": "Rifle Ammo Mutation",
        "Platinum": "4"
      },
      {
        "Name": "Rifle Amp",
        "Platinum": "17"
      },
      {
        "Name": "Rifle Aptitude",
        "Platinum": "3"
      },
      {
        "Name": "Rifle Riven Mod (Veiled)",
        "Platinum": "28"
      },
      {
        "Name": "Rifle Scavenger",
        "Platinum": "9"
      },
      {
        "Name": "Rift Haven",
        "Platinum": "12"
      },
      {
        "Name": "Rift Strike",
        "Platinum": "6"
      },
      {
        "Name": "Rift Torrent",
        "Platinum": "14"
      },
      {
        "Name": "Rime Rounds",
        "Platinum": "21"
      },
      {
        "Name": "Rime Vault",
        "Platinum": "0"
      },
      {
        "Name": "Ripload",
        "Platinum": "5"
      },
      {
        "Name": "Ripper Rounds",
        "Platinum": "0"
      },
      {
        "Name": "RIS",
        "Platinum": "9"
      },
      {
        "Name": "Rising Skill",
        "Platinum": "0"
      },
      {
        "Name": "Rising Steel",
        "Platinum": "3"
      },
      {
        "Name": "Rising Storm",
        "Platinum": "13"
      },
      {
        "Name": "Rolling Guard",
        "Platinum": "27"
      },
      {
        "Name": "Rubble Heap",
        "Platinum": "12"
      },
      {
        "Name": "Rubedo-Lined Barrel",
        "Platinum": "5"
      },
      {
        "Name": "Rubico Prime Barrel",
        "Platinum": "5"
      },
      {
        "Name": "Rubico Prime Blueprint",
        "Platinum": "38"
      },
      {
        "Name": "Rubico Prime Receiver",
        "Platinum": "4"
      },
      {
        "Name": "Rubico Prime Set",
        "Platinum": "64"
      },
      {
        "Name": "Rubico Prime Stock",
        "Platinum": "9"
      },
      {
        "Name": "Ruinous Extension",
        "Platinum": "9"
      },
      {
        "Name": "Rumbled",
        "Platinum": "17"
      },
      {
        "Name": "Runtime",
        "Platinum": "8"
      },
      {
        "Name": "Rupture",
        "Platinum": "1"
      },
      {
        "Name": "Rush",
        "Platinum": "5"
      },
      {
        "Name": "Sabot Rounds",
        "Platinum": "27"
      },
      {
        "Name": "Sacrifice",
        "Platinum": "29"
      },
      {
        "Name": "Safeguard",
        "Platinum": "12"
      },
      {
        "Name": "Safeguard Switch",
        "Platinum": "16"
      },
      {
        "Name": "Sah Ayatan Sculpture",
        "Platinum": "4"
      },
      {
        "Name": "Sahasa Kubrow Imprint",
        "Platinum": "13"
      },
      {
        "Name": "Sancti Castanas",
        "Platinum": "32"
      },
      {
        "Name": "Sancti Magistar",
        "Platinum": "35"
      },
      {
        "Name": "Sancti Tigris",
        "Platinum": "33"
      },
      {
        "Name": "Sanctuary",
        "Platinum": "18"
      },
      {
        "Name": "Sanctuary Conduit Scene",
        "Platinum": "35"
      },
      {
        "Name": "Sands of Inaros",
        "Platinum": "10"
      },
      {
        "Name": "Sapping Reach",
        "Platinum": "0"
      },
      {
        "Name": "Saryn Prime Blueprint",
        "Platinum": "39"
      },
      {
        "Name": "Saryn Prime Chassis",
        "Platinum": "96"
      },
      {
        "Name": "Saryn Prime Neuroptics",
        "Platinum": "13"
      },
      {
        "Name": "Saryn Prime Set",
        "Platinum": "172"
      },
      {
        "Name": "Saryn Prime Systems",
        "Platinum": "8"
      },
      {
        "Name": "Savage Silence",
        "Platinum": "13"
      },
      {
        "Name": "Savagery",
        "Platinum": "6"
      },
      {
        "Name": "Savior Decoy",
        "Platinum": "14"
      },
      {
        "Name": "Sawtooth Clip",
        "Platinum": "1"
      },
      {
        "Name": "Saxum Carapace",
        "Platinum": "27"
      },
      {
        "Name": "Saxum Spittle",
        "Platinum": "53"
      },
      {
        "Name": "Saxum Thorax",
        "Platinum": "5"
      },
      {
        "Name": "Scan Lifeforms",
        "Platinum": "0"
      },
      {
        "Name": "Scan Matter",
        "Platinum": "0"
      },
      {
        "Name": "Scarlet Hurricane",
        "Platinum": "2"
      },
      {
        "Name": "Scattered Justice",
        "Platinum": "9"
      },
      {
        "Name": "Scattering Inferno",
        "Platinum": "9"
      },
      {
        "Name": "Scavenge",
        "Platinum": "4"
      },
      {
        "Name": "Scimitar Avionics",
        "Platinum": "9"
      },
      {
        "Name": "Scimitar Engines",
        "Platinum": "21"
      },
      {
        "Name": "Scimitar Fuselage",
        "Platinum": "7"
      },
      {
        "Name": "Scimitar Set",
        "Platinum": "46"
      },
      {
        "Name": "Scindo Prime Blade",
        "Platinum": "45"
      },
      {
        "Name": "Scindo Prime Blueprint",
        "Platinum": "6"
      },
      {
        "Name": "Scindo Prime Handle",
        "Platinum": "9"
      },
      {
        "Name": "Scindo Prime Set",
        "Platinum": "71"
      },
      {
        "Name": "Scorch",
        "Platinum": "8"
      },
      {
        "Name": "Searing Leap",
        "Platinum": "0"
      },
      {
        "Name": "Searing Steel",
        "Platinum": "56"
      },
      {
        "Name": "Secondary Wind",
        "Platinum": "12"
      },
      {
        "Name": "Section Density",
        "Platinum": "7"
      },
      {
        "Name": "Secura Dual Cestra",
        "Platinum": "35"
      },
      {
        "Name": "Secura Lecta",
        "Platinum": "36"
      },
      {
        "Name": "Secura Penta",
        "Platinum": "36"
      },
      {
        "Name": "Security Override",
        "Platinum": "0"
      },
      {
        "Name": "Seeker",
        "Platinum": "3"
      },
      {
        "Name": "Seeker Volley",
        "Platinum": "4"
      },
      {
        "Name": "Seeking Force",
        "Platinum": "4"
      },
      {
        "Name": "Seeking Fury",
        "Platinum": "3"
      },
      {
        "Name": "Seeking Shuriken",
        "Platinum": "11"
      },
      {
        "Name": "Seismic Palm",
        "Platinum": "2"
      },
      {
        "Name": "Seismic Wave",
        "Platinum": "6"
      },
      {
        "Name": "Self Destruct",
        "Platinum": "8"
      },
      {
        "Name": "Sense Danger",
        "Platinum": "3"
      },
      {
        "Name": "Sentient Altar Scene",
        "Platinum": "21"
      },
      {
        "Name": "Sentient Balcony Scene",
        "Platinum": "22"
      },
      {
        "Name": "Sentient Basin Scene",
        "Platinum": "25"
      },
      {
        "Name": "Sentient Concourse Scene",
        "Platinum": "30"
      },
      {
        "Name": "Sentient Fortitude",
        "Platinum": "0"
      },
      {
        "Name": "Sentient Fountain Scene",
        "Platinum": "25"
      },
      {
        "Name": "Sentient Scalpel",
        "Platinum": "85"
      },
      {
        "Name": "Sequence Burn",
        "Platinum": "12"
      },
      {
        "Name": "Serrated Edges",
        "Platinum": "0"
      },
      {
        "Name": "Serrated Rounds",
        "Platinum": "0"
      },
      {
        "Name": "Serration",
        "Platinum": "40"
      },
      {
        "Name": "Shadow Harvest",
        "Platinum": "2"
      },
      {
        "Name": "Sharpened Blade",
        "Platinum": "0"
      },
      {
        "Name": "Sharpened Bullets",
        "Platinum": "5"
      },
      {
        "Name": "Sharpened Claws",
        "Platinum": "3"
      },
      {
        "Name": "Sharpshooter",
        "Platinum": "44"
      },
      {
        "Name": "Shatter Burst",
        "Platinum": "9"
      },
      {
        "Name": "Shattering Impact",
        "Platinum": "4"
      },
      {
        "Name": "Shattering Justice",
        "Platinum": "11"
      },
      {
        "Name": "Shattering Storm",
        "Platinum": "7"
      },
      {
        "Name": "Shedu Barrel",
        "Platinum": "16"
      },
      {
        "Name": "Shedu Chassis",
        "Platinum": "15"
      },
      {
        "Name": "Shedu Handle",
        "Platinum": "16"
      },
      {
        "Name": "Shedu Receiver",
        "Platinum": "15"
      },
      {
        "Name": "Shedu Set",
        "Platinum": "67"
      },
      {
        "Name": "Sheev Blade",
        "Platinum": "13"
      },
      {
        "Name": "Sheev Blueprint",
        "Platinum": "14"
      },
      {
        "Name": "Sheev Heatsink",
        "Platinum": "13"
      },
      {
        "Name": "Sheev Hilt",
        "Platinum": "13"
      },
      {
        "Name": "Sheev Set",
        "Platinum": "47"
      },
      {
        "Name": "Shell Compression",
        "Platinum": "3"
      },
      {
        "Name": "Shell Rush",
        "Platinum": "8"
      },
      {
        "Name": "Shell Shock",
        "Platinum": "34"
      },
      {
        "Name": "Shelter",
        "Platinum": "10"
      },
      {
        "Name": "Shepherd",
        "Platinum": "6"
      },
      {
        "Name": "Shield Charger",
        "Platinum": "2"
      },
      {
        "Name": "Shield Disruption",
        "Platinum": "18"
      },
      {
        "Name": "Shield of Shadows",
        "Platinum": "11"
      },
      {
        "Name": "Shield Overload",
        "Platinum": "0"
      },
      {
        "Name": "Shimmering Blight",
        "Platinum": "4"
      },
      {
        "Name": "Shock Absorbers",
        "Platinum": "5"
      },
      {
        "Name": "Shock Collar",
        "Platinum": "31"
      },
      {
        "Name": "Shock Trooper",
        "Platinum": "12"
      },
      {
        "Name": "Shocking Speed",
        "Platinum": "12"
      },
      {
        "Name": "Shocking Touch",
        "Platinum": "3"
      },
      {
        "Name": "Shockwave Actuators",
        "Platinum": "0"
      },
      {
        "Name": "Shotgun Ammo Mutation",
        "Platinum": "3"
      },
      {
        "Name": "Shotgun Amp",
        "Platinum": "5"
      },
      {
        "Name": "Shotgun Riven Mod (Veiled)",
        "Platinum": "33"
      },
      {
        "Name": "Shotgun Savvy",
        "Platinum": "3"
      },
      {
        "Name": "Shotgun Scavenger",
        "Platinum": "12"
      },
      {
        "Name": "Shotgun Spazz",
        "Platinum": "4"
      },
      {
        "Name": "Shrapnel Rounds (Marelok)",
        "Platinum": "12"
      },
      {
        "Name": "Shrapnel Shot",
        "Platinum": "3"
      },
      {
        "Name": "Shred",
        "Platinum": "4"
      },
      {
        "Name": "Shred Shot",
        "Platinum": "0"
      },
      {
        "Name": "Shredder",
        "Platinum": "3"
      },
      {
        "Name": "Sicarus Prime Barrel",
        "Platinum": "4"
      },
      {
        "Name": "Sicarus Prime Blueprint",
        "Platinum": "3"
      },
      {
        "Name": "Sicarus Prime Receiver",
        "Platinum": "11"
      },
      {
        "Name": "Sicarus Prime Set",
        "Platinum": "20"
      },
      {
        "Name": "Signal Flare",
        "Platinum": "0"
      },
      {
        "Name": "Silent Battery",
        "Platinum": "7"
      },
      {
        "Name": "Silva & Aegis Prime Blade",
        "Platinum": "6"
      },
      {
        "Name": "Silva & Aegis Prime Blueprint",
        "Platinum": "5"
      },
      {
        "Name": "Silva & Aegis Prime Guard",
        "Platinum": "24"
      },
      {
        "Name": "Silva & Aegis Prime Hilt",
        "Platinum": "4"
      },
      {
        "Name": "Silva & Aegis Prime Set",
        "Platinum": "46"
      },
      {
        "Name": "Silver Grove Shrine Scene",
        "Platinum": "25"
      },
      {
        "Name": "Singularity",
        "Platinum": "13"
      },
      {
        "Name": "Sinister Reach",
        "Platinum": "3"
      },
      {
        "Name": "Sinking Talon",
        "Platinum": "2"
      },
      {
        "Name": "Skull Shots (Viper)",
        "Platinum": "11"
      },
      {
        "Name": "Slay Board",
        "Platinum": "12"
      },
      {
        "Name": "Slicing Feathers",
        "Platinum": "5"
      },
      {
        "Name": "Slip Magazine",
        "Platinum": "2"
      },
      {
        "Name": "Sly Devolution",
        "Platinum": "0"
      },
      {
        "Name": "Small Charc Eel",
        "Platinum": "1"
      },
      {
        "Name": "Small Cuthol",
        "Platinum": "2"
      },
      {
        "Name": "Small Glappid",
        "Platinum": "1"
      },
      {
        "Name": "Small Goopolla",
        "Platinum": "1"
      },
      {
        "Name": "Small Karkina",
        "Platinum": "1"
      },
      {
        "Name": "Small Khut-Khut",
        "Platinum": "0"
      },
      {
        "Name": "Small Mawfish",
        "Platinum": "0"
      },
      {
        "Name": "Small Mortus Lungfish",
        "Platinum": "1"
      },
      {
        "Name": "Small Murkray",
        "Platinum": "1"
      },
      {
        "Name": "Small Norg",
        "Platinum": "2"
      },
      {
        "Name": "Small Sharrac",
        "Platinum": "1"
      },
      {
        "Name": "Small Tralok",
        "Platinum": "3"
      },
      {
        "Name": "Small Yogwun",
        "Platinum": "1"
      },
      {
        "Name": "Smeeta Kavat Imprint",
        "Platinum": "25"
      },
      {
        "Name": "Smite Corpus",
        "Platinum": "279"
      },
      {
        "Name": "Smite Corrupted",
        "Platinum": "8"
      },
      {
        "Name": "Smite Grineer",
        "Platinum": "4"
      },
      {
        "Name": "Smite Infested",
        "Platinum": "9"
      },
      {
        "Name": "Smite Infusion",
        "Platinum": "11"
      },
      {
        "Name": "Smoke Shadow",
        "Platinum": "11"
      },
      {
        "Name": "Smooth Phasmin",
        "Platinum": "1"
      },
      {
        "Name": "Snap Shot",
        "Platinum": "8"
      },
      {
        "Name": "Sniper Ammo Mutation",
        "Platinum": "3"
      },
      {
        "Name": "Sniper Scavenger",
        "Platinum": "11"
      },
      {
        "Name": "Snipetron Vandal Barrel",
        "Platinum": "14"
      },
      {
        "Name": "Snipetron Vandal Blueprint",
        "Platinum": "8"
      },
      {
        "Name": "Snipetron Vandal Receiver",
        "Platinum": "10"
      },
      {
        "Name": "Snipetron Vandal Set",
        "Platinum": "43"
      },
      {
        "Name": "Snipetron Vandal Stock",
        "Platinum": "13"
      },
      {
        "Name": "Soaring Strike",
        "Platinum": "11"
      },
      {
        "Name": "Soft Hands",
        "Platinum": "4"
      },
      {
        "Name": "Soma Prime Barrel",
        "Platinum": "8"
      },
      {
        "Name": "Soma Prime Blueprint",
        "Platinum": "4"
      },
      {
        "Name": "Soma Prime Receiver",
        "Platinum": "10"
      },
      {
        "Name": "Soma Prime Set",
        "Platinum": "49"
      },
      {
        "Name": "Soma Prime Stock",
        "Platinum": "15"
      },
      {
        "Name": "Sonic Boost",
        "Platinum": "17"
      },
      {
        "Name": "Sonic Fracture",
        "Platinum": "14"
      },
      {
        "Name": "Soul Survivor",
        "Platinum": "12"
      },
      {
        "Name": "Sovereign Outcast",
        "Platinum": "9"
      },
      {
        "Name": "Spare Parts",
        "Platinum": "3"
      },
      {
        "Name": "Spectra Vandal Barrel",
        "Platinum": "30"
      },
      {
        "Name": "Spectra Vandal Blueprint",
        "Platinum": "27"
      },
      {
        "Name": "Spectra Vandal Chassis",
        "Platinum": "32"
      },
      {
        "Name": "Spectra Vandal Handle",
        "Platinum": "30"
      },
      {
        "Name": "Spectra Vandal Set",
        "Platinum": "117"
      },
      {
        "Name": "Spectrosiphon",
        "Platinum": "14"
      },
      {
        "Name": "Speed Drift",
        "Platinum": "18"
      },
      {
        "Name": "Speed Holster",
        "Platinum": "21"
      },
      {
        "Name": "Speed Trigger",
        "Platinum": "1"
      },
      {
        "Name": "Spellbound Harvest",
        "Platinum": "13"
      },
      {
        "Name": "Spinning Needle",
        "Platinum": "5"
      },
      {
        "Name": "Spira Prime Blade",
        "Platinum": "18"
      },
      {
        "Name": "Spira Prime Blueprint",
        "Platinum": "4"
      },
      {
        "Name": "Spira Prime Pouch",
        "Platinum": "43"
      },
      {
        "Name": "Spira Prime Set",
        "Platinum": "148"
      },
      {
        "Name": "Split Chamber",
        "Platinum": "3"
      },
      {
        "Name": "Split Flights",
        "Platinum": "44"
      },
      {
        "Name": "Spoiled Strike",
        "Platinum": "5"
      },
      {
        "Name": "Sporothrix Barrel",
        "Platinum": "7"
      },
      {
        "Name": "Sporothrix Blueprint",
        "Platinum": "13"
      },
      {
        "Name": "Sporothrix Receiver",
        "Platinum": "7"
      },
      {
        "Name": "Sporothrix Set",
        "Platinum": "58"
      },
      {
        "Name": "Sporothrix Stock",
        "Platinum": "39"
      },
      {
        "Name": "Spring-Loaded Blade",
        "Platinum": "15"
      },
      {
        "Name": "Spring-Loaded Broadhead",
        "Platinum": "12"
      },
      {
        "Name": "Spring-Loaded Chamber",
        "Platinum": "6"
      },
      {
        "Name": "Sprint Boost",
        "Platinum": "25"
      },
      {
        "Name": "Spry Sights",
        "Platinum": "7"
      },
      {
        "Name": "Squad Renew",
        "Platinum": "0"
      },
      {
        "Name": "Stabilizer",
        "Platinum": "3"
      },
      {
        "Name": "Staggering Shield",
        "Platinum": "15"
      },
      {
        "Name": "Stahlta Barrel",
        "Platinum": "4"
      },
      {
        "Name": "Stahlta Receiver",
        "Platinum": "4"
      },
      {
        "Name": "Stahlta Set",
        "Platinum": "18"
      },
      {
        "Name": "Stahlta Stock",
        "Platinum": "4"
      },
      {
        "Name": "Stalk",
        "Platinum": "8"
      },
      {
        "Name": "Stalking Fan",
        "Platinum": "9"
      },
      {
        "Name": "Stand Ground",
        "Platinum": "0"
      },
      {
        "Name": "Stand United",
        "Platinum": "7"
      },
      {
        "Name": "Star Amarast",
        "Platinum": "1"
      },
      {
        "Name": "Star Crimzian",
        "Platinum": "1"
      },
      {
        "Name": "Star Divide",
        "Platinum": "2"
      },
      {
        "Name": "Stasis Field",
        "Platinum": "40"
      },
      {
        "Name": "Static Alacrity (Staticor)",
        "Platinum": "6"
      },
      {
        "Name": "Static Discharge",
        "Platinum": "2"
      },
      {
        "Name": "Steady Hands",
        "Platinum": "2"
      },
      {
        "Name": "Stealth Drift",
        "Platinum": "4"
      },
      {
        "Name": "Steel Charge",
        "Platinum": "33"
      },
      {
        "Name": "Steel Fiber",
        "Platinum": "26"
      },
      {
        "Name": "Steel Meridian Augment Mod",
        "Platinum": "9"
      },
      {
        "Name": "Stellated Necrathene",
        "Platinum": "2"
      },
      {
        "Name": "Stinging Thorn",
        "Platinum": "9"
      },
      {
        "Name": "Stinging Truth",
        "Platinum": "12"
      },
      {
        "Name": "Stockpiled Blight",
        "Platinum": "11"
      },
      {
        "Name": "Stormbringer",
        "Platinum": "4"
      },
      {
        "Name": "Stradavar Prime Barrel",
        "Platinum": "2"
      },
      {
        "Name": "Stradavar Prime Blueprint",
        "Platinum": "7"
      },
      {
        "Name": "Stradavar Prime Receiver",
        "Platinum": "3"
      },
      {
        "Name": "Stradavar Prime Set",
        "Platinum": "13"
      },
      {
        "Name": "Stradavar Prime Stock",
        "Platinum": "2"
      },
      {
        "Name": "Strafing Slide",
        "Platinum": "6"
      },
      {
        "Name": "Strain Consume",
        "Platinum": "9"
      },
      {
        "Name": "Strain Eruption",
        "Platinum": "21"
      },
      {
        "Name": "Strain Fever",
        "Platinum": "10"
      },
      {
        "Name": "Strain Infection",
        "Platinum": "15"
      },
      {
        "Name": "Streamline",
        "Platinum": "3"
      },
      {
        "Name": "Streamlined Form",
        "Platinum": "4"
      },
      {
        "Name": "Stretch",
        "Platinum": "4"
      },
      {
        "Name": "Striker",
        "Platinum": "7"
      },
      {
        "Name": "Stropha Barrel",
        "Platinum": "7"
      },
      {
        "Name": "Stropha Blade",
        "Platinum": "7"
      },
      {
        "Name": "Stropha Receiver",
        "Platinum": "7"
      },
      {
        "Name": "Stropha Set",
        "Platinum": "37"
      },
      {
        "Name": "Stropha Stock",
        "Platinum": "7"
      },
      {
        "Name": "Strun Wraith Barrel",
        "Platinum": "12"
      },
      {
        "Name": "Strun Wraith Blueprint",
        "Platinum": "13"
      },
      {
        "Name": "Strun Wraith Receiver",
        "Platinum": "14"
      },
      {
        "Name": "Strun Wraith Set",
        "Platinum": "53"
      },
      {
        "Name": "Strun Wraith Stock",
        "Platinum": "16"
      },
      {
        "Name": "Stunning Speed",
        "Platinum": "2"
      },
      {
        "Name": "Suda's Datascape Scene",
        "Platinum": "21"
      },
      {
        "Name": "Sudden Impact",
        "Platinum": "4"
      },
      {
        "Name": "Sudden Justice",
        "Platinum": "425"
      },
      {
        "Name": "Sundering Strike",
        "Platinum": "9"
      },
      {
        "Name": "Sundering Weave",
        "Platinum": "6"
      },
      {
        "Name": "Sunika Kubrow Imprint",
        "Platinum": "13"
      },
      {
        "Name": "Superior Defenses",
        "Platinum": "6"
      },
      {
        "Name": "Suppress",
        "Platinum": "1"
      },
      {
        "Name": "Supra Vandal",
        "Platinum": "58"
      },
      {
        "Name": "Sure Footed",
        "Platinum": "6"
      },
      {
        "Name": "Sure Shot",
        "Platinum": "4"
      },
      {
        "Name": "Surging Dash",
        "Platinum": "13"
      },
      {
        "Name": "Surplus Diverters",
        "Platinum": "0"
      },
      {
        "Name": "Survival Instinct",
        "Platinum": "30"
      },
      {
        "Name": "Sweeping Serration",
        "Platinum": "9"
      },
      {
        "Name": "Swift Deth",
        "Platinum": "9"
      },
      {
        "Name": "Swift Momentum",
        "Platinum": "10"
      },
      {
        "Name": "Swing Line",
        "Platinum": "14"
      },
      {
        "Name": "Swipe",
        "Platinum": "5"
      },
      {
        "Name": "Swirling Tiger",
        "Platinum": "3"
      },
      {
        "Name": "Swooping Falcon",
        "Platinum": "9"
      },
      {
        "Name": "Sword Alone",
        "Platinum": "0"
      },
      {
        "Name": "Sybaris Prime Barrel",
        "Platinum": "18"
      },
      {
        "Name": "Sybaris Prime Blueprint",
        "Platinum": "4"
      },
      {
        "Name": "Sybaris Prime Receiver",
        "Platinum": "6"
      },
      {
        "Name": "Sybaris Prime Set",
        "Platinum": "37"
      },
      {
        "Name": "Sybaris Prime Stock",
        "Platinum": "6"
      },
      {
        "Name": "Synoid Gammacor",
        "Platinum": "31"
      },
      {
        "Name": "Synoid Heliocor",
        "Platinum": "34"
      },
      {
        "Name": "Synoid Simulor",
        "Platinum": "32"
      },
      {
        "Name": "Synth Charge",
        "Platinum": "6"
      },
      {
        "Name": "Synth Deconstruct",
        "Platinum": "9"
      },
      {
        "Name": "Synth Fiber",
        "Platinum": "9"
      },
      {
        "Name": "Synth Reflex",
        "Platinum": "5"
      },
      {
        "Name": "System Reroute",
        "Platinum": "16"
      },
      {
        "Name": "Tactical Pump",
        "Platinum": "3"
      },
      {
        "Name": "Tactical Reload",
        "Platinum": "9"
      },
      {
        "Name": "Tactical Retreat",
        "Platinum": "12"
      },
      {
        "Name": "Tainted Clip",
        "Platinum": "2"
      },
      {
        "Name": "Tainted Hydra",
        "Platinum": "0"
      },
      {
        "Name": "Tainted Mag",
        "Platinum": "7"
      },
      {
        "Name": "Tainted Shell",
        "Platinum": "9"
      },
      {
        "Name": "Target Acquired",
        "Platinum": "5"
      },
      {
        "Name": "Target Cracker",
        "Platinum": "3"
      },
      {
        "Name": "Target Fixation",
        "Platinum": "13"
      },
      {
        "Name": "Targeting Receptor",
        "Platinum": "0"
      },
      {
        "Name": "Targeting Subsystem",
        "Platinum": "8"
      },
      {
        "Name": "Tear Azurite",
        "Platinum": "1"
      },
      {
        "Name": "Tear Gas",
        "Platinum": "0"
      },
      {
        "Name": "Tectonic Fracture",
        "Platinum": "11"
      },
      {
        "Name": "Teeming Virulence",
        "Platinum": "13"
      },
      {
        "Name": "Tek Assault",
        "Platinum": "20"
      },
      {
        "Name": "Tek Collateral",
        "Platinum": "3"
      },
      {
        "Name": "Tek Enhance",
        "Platinum": "11"
      },
      {
        "Name": "Tek Gravity",
        "Platinum": "4"
      },
      {
        "Name": "Tekko Prime Blade",
        "Platinum": "11"
      },
      {
        "Name": "Tekko Prime Blueprint",
        "Platinum": "2"
      },
      {
        "Name": "Tekko Prime Gauntlet",
        "Platinum": "3"
      },
      {
        "Name": "Tekko Prime Set",
        "Platinum": "36"
      },
      {
        "Name": "Telos Akbolto",
        "Platinum": "33"
      },
      {
        "Name": "Telos Boltace",
        "Platinum": "35"
      },
      {
        "Name": "Telos Boltor",
        "Platinum": "35"
      },
      {
        "Name": "Tempered Blade",
        "Platinum": "4"
      },
      {
        "Name": "Tempered Bound",
        "Platinum": "0"
      },
      {
        "Name": "Tempo Royale",
        "Platinum": "27"
      },
      {
        "Name": "Terminal Velocity",
        "Platinum": "4"
      },
      {
        "Name": "Territorial Aggression",
        "Platinum": "4"
      },
      {
        "Name": "Teshin's Refuge Scene",
        "Platinum": "97"
      },
      {
        "Name": "Tesla Bank",
        "Platinum": "13"
      },
      {
        "Name": "Tether",
        "Platinum": "12"
      },
      {
        "Name": "Tether Grenades",
        "Platinum": "2"
      },
      {
        "Name": "The Perrin Sequence Augment Mod",
        "Platinum": "10"
      },
      {
        "Name": "Theorem Contagion",
        "Platinum": "41"
      },
      {
        "Name": "Theorem Demulcent",
        "Platinum": "20"
      },
      {
        "Name": "Theorem Infection",
        "Platinum": "20"
      },
      {
        "Name": "Thermagnetic Shells",
        "Platinum": "6"
      },
      {
        "Name": "Thermatic",
        "Platinum": "0"
      },
      {
        "Name": "Thermite Rounds",
        "Platinum": "9"
      },
      {
        "Name": "Thief's Wit",
        "Platinum": "3"
      },
      {
        "Name": "Thrall Pact",
        "Platinum": "14"
      },
      {
        "Name": "Thrash Landing",
        "Platinum": "20"
      },
      {
        "Name": "Thumper",
        "Platinum": "100"
      },
      {
        "Name": "Thunderbolt",
        "Platinum": "2634"
      },
      {
        "Name": "Thundermiter (Miter)",
        "Platinum": "16"
      },
      {
        "Name": "Tiberon Prime Barrel",
        "Platinum": "20"
      },
      {
        "Name": "Tiberon Prime Blueprint",
        "Platinum": "3"
      },
      {
        "Name": "Tiberon Prime Receiver",
        "Platinum": "8"
      },
      {
        "Name": "Tiberon Prime Set",
        "Platinum": "51"
      },
      {
        "Name": "Tiberon Prime Stock",
        "Platinum": "14"
      },
      {
        "Name": "Tidal Impunity",
        "Platinum": "14"
      },
      {
        "Name": "Tigris Prime Barrel",
        "Platinum": "4"
      },
      {
        "Name": "Tigris Prime Blueprint",
        "Platinum": "23"
      },
      {
        "Name": "Tigris Prime Receiver",
        "Platinum": "6"
      },
      {
        "Name": "Tigris Prime Set",
        "Platinum": "44"
      },
      {
        "Name": "Tigris Prime Stock",
        "Platinum": "5"
      },
      {
        "Name": "Tipedo Prime Blueprint",
        "Platinum": "2"
      },
      {
        "Name": "Tipedo Prime Handle",
        "Platinum": "21"
      },
      {
        "Name": "Tipedo Prime Ornament",
        "Platinum": "3"
      },
      {
        "Name": "Tipedo Prime Set",
        "Platinum": "28"
      },
      {
        "Name": "Titania Prime Blueprint",
        "Platinum": "4"
      },
      {
        "Name": "Titania Prime Chassis",
        "Platinum": "2"
      },
      {
        "Name": "Titania Prime Neuroptics",
        "Platinum": "3"
      },
      {
        "Name": "Titania Prime Set",
        "Platinum": "29"
      },
      {
        "Name": "Titania Prime Systems",
        "Platinum": "15"
      },
      {
        "Name": "Titanic Rumbler",
        "Platinum": "12"
      },
      {
        "Name": "Topaz antitoxin",
        "Platinum": "0"
      },
      {
        "Name": "Total Eclipse",
        "Platinum": "13"
      },
      {
        "Name": "Toxic Barrage",
        "Platinum": "4"
      },
      {
        "Name": "Toxic Blight",
        "Platinum": "11"
      },
      {
        "Name": "Toxic Flight",
        "Platinum": "24"
      },
      {
        "Name": "Toxic Sequence",
        "Platinum": "14"
      },
      {
        "Name": "Toxin Resistance",
        "Platinum": "4"
      },
      {
        "Name": "Tractor Beam",
        "Platinum": "0"
      },
      {
        "Name": "Trail Blazer",
        "Platinum": "14"
      },
      {
        "Name": "Trample",
        "Platinum": "6"
      },
      {
        "Name": "Tranquil Cleave",
        "Platinum": "5"
      },
      {
        "Name": "Transfusion",
        "Platinum": "0"
      },
      {
        "Name": "Transient Fortitude",
        "Platinum": "25"
      },
      {
        "Name": "Transistor Shield",
        "Platinum": "12"
      },
      {
        "Name": "Trapezium Xenorhast",
        "Platinum": "2"
      },
      {
        "Name": "Tribunal",
        "Platinum": "12"
      },
      {
        "Name": "Trick Mag",
        "Platinum": "1"
      },
      {
        "Name": "Trinity Prime Blueprint",
        "Platinum": "15"
      },
      {
        "Name": "Trinity Prime Chassis",
        "Platinum": "7"
      },
      {
        "Name": "Trinity Prime Neuroptics",
        "Platinum": "9"
      },
      {
        "Name": "Trinity Prime Set",
        "Platinum": "54"
      },
      {
        "Name": "Trinity Prime Systems",
        "Platinum": "9"
      },
      {
        "Name": "Triple Tap",
        "Platinum": "7"
      },
      {
        "Name": "True Punishment",
        "Platinum": "8"
      },
      {
        "Name": "True Steel",
        "Platinum": "5"
      },
      {
        "Name": "Turret Velocity",
        "Platinum": "37"
      },
      {
        "Name": "Twin Vipers Wraith Barrels",
        "Platinum": "10"
      },
      {
        "Name": "Twin Vipers Wraith Blueprint",
        "Platinum": "10"
      },
      {
        "Name": "Twin Vipers Wraith Link",
        "Platinum": "14"
      },
      {
        "Name": "Twin Vipers Wraith Receivers",
        "Platinum": "13"
      },
      {
        "Name": "Twin Vipers Wraith Set",
        "Platinum": "46"
      },
      {
        "Name": "Twirling Spire",
        "Platinum": "9"
      },
      {
        "Name": "Twitch",
        "Platinum": "14"
      },
      {
        "Name": "Unairu Lens",
        "Platinum": "3"
      },
      {
        "Name": "Undying Will",
        "Platinum": "3"
      },
      {
        "Name": "Unleashed",
        "Platinum": "0"
      },
      {
        "Name": "Untraceable",
        "Platinum": "9"
      },
      {
        "Name": "Vacuum",
        "Platinum": "3"
      },
      {
        "Name": "Valana Ayatan Sculpture",
        "Platinum": "4"
      },
      {
        "Name": "Valkyr Prime Blueprint",
        "Platinum": "3"
      },
      {
        "Name": "Valkyr Prime Chassis",
        "Platinum": "56"
      },
      {
        "Name": "Valkyr Prime Neuroptics",
        "Platinum": "7"
      },
      {
        "Name": "Valkyr Prime Set",
        "Platinum": "104"
      },
      {
        "Name": "Valkyr Prime Systems",
        "Platinum": "29"
      },
      {
        "Name": "Vampire Leech",
        "Platinum": "11"
      },
      {
        "Name": "Vanquished Prey",
        "Platinum": "0"
      },
      {
        "Name": "Vapor Trail",
        "Platinum": "20"
      },
      {
        "Name": "Vaporize",
        "Platinum": "5"
      },
      {
        "Name": "Vasca Kavat Imprint",
        "Platinum": "18"
      },
      {
        "Name": "Vasto Prime Barrel",
        "Platinum": "8"
      },
      {
        "Name": "Vasto Prime Blueprint",
        "Platinum": "5"
      },
      {
        "Name": "Vasto Prime Receiver",
        "Platinum": "8"
      },
      {
        "Name": "Vasto Prime Set",
        "Platinum": "28"
      },
      {
        "Name": "Vauban Prime Blueprint",
        "Platinum": "20"
      },
      {
        "Name": "Vauban Prime Chassis",
        "Platinum": "15"
      },
      {
        "Name": "Vauban Prime Neuroptics",
        "Platinum": "48"
      },
      {
        "Name": "Vauban Prime Set",
        "Platinum": "171"
      },
      {
        "Name": "Vauban Prime Systems",
        "Platinum": "66"
      },
      {
        "Name": "Vay Hek Frequency Triangulator",
        "Platinum": "650"
      },
      {
        "Name": "Vaya Ayatan Sculpture",
        "Platinum": "4"
      },
      {
        "Name": "Vaykor Hek",
        "Platinum": "26"
      },
      {
        "Name": "Vaykor Marelok",
        "Platinum": "27"
      },
      {
        "Name": "Vaykor Sydon",
        "Platinum": "31"
      },
      {
        "Name": "Vazarin Lens",
        "Platinum": "3"
      },
      {
        "Name": "Vazarin Transmute Core",
        "Platinum": "6"
      },
      {
        "Name": "Vectis Prime Barrel",
        "Platinum": "25"
      },
      {
        "Name": "Vectis Prime Blueprint",
        "Platinum": "6"
      },
      {
        "Name": "Vectis Prime Receiver",
        "Platinum": "55"
      },
      {
        "Name": "Vectis Prime Set",
        "Platinum": "130"
      },
      {
        "Name": "Vectis Prime Stock",
        "Platinum": "26"
      },
      {
        "Name": "Veil's Binding Scene",
        "Platinum": "41"
      },
      {
        "Name": "Velocitus Barrel",
        "Platinum": "10"
      },
      {
        "Name": "Velocitus Receiver",
        "Platinum": "9"
      },
      {
        "Name": "Velocitus Set",
        "Platinum": "45"
      },
      {
        "Name": "Velocitus Stock",
        "Platinum": "9"
      },
      {
        "Name": "Velox Barrel",
        "Platinum": "4"
      },
      {
        "Name": "Velox Receiver",
        "Platinum": "4"
      },
      {
        "Name": "Velox Set",
        "Platinum": "9"
      },
      {
        "Name": "Venari Bodyguard",
        "Platinum": "13"
      },
      {
        "Name": "Venerdo Hoverdrive",
        "Platinum": "17"
      },
      {
        "Name": "Vengeful Charge (Kuva Lich Ephemera)",
        "Platinum": "175"
      },
      {
        "Name": "Vengeful Chill (Kuva Lich Ephemera)",
        "Platinum": "144"
      },
      {
        "Name": "Vengeful Flame (Kuva Lich Ephemera)",
        "Platinum": "83"
      },
      {
        "Name": "Vengeful Pull (Kuva Lich Ephemera)",
        "Platinum": "107"
      },
      {
        "Name": "Vengeful Revenant",
        "Platinum": "17"
      },
      {
        "Name": "Vengeful Shockwave (Kuva Lich Ephemera)",
        "Platinum": "105"
      },
      {
        "Name": "Vengeful Toxin (Kuva Lich Ephemera)",
        "Platinum": "77"
      },
      {
        "Name": "Vengeful Trickster (Kuva Lich Ephemera)",
        "Platinum": "108"
      },
      {
        "Name": "Venka Prime Blades",
        "Platinum": "7"
      },
      {
        "Name": "Venka Prime Blueprint",
        "Platinum": "6"
      },
      {
        "Name": "Venka Prime Gauntlet",
        "Platinum": "75"
      },
      {
        "Name": "Venka Prime Set",
        "Platinum": "177"
      },
      {
        "Name": "Venom Dose",
        "Platinum": "11"
      },
      {
        "Name": "Venom Teeth",
        "Platinum": "18"
      },
      {
        "Name": "Venomous Clip",
        "Platinum": "6"
      },
      {
        "Name": "Venomous Rise",
        "Platinum": "0"
      },
      {
        "Name": "Ventkids Clubhouse Scene",
        "Platinum": "41"
      },
      {
        "Name": "Vermillion antitoxin",
        "Platinum": "0"
      },
      {
        "Name": "Vermillion Storm",
        "Platinum": "9"
      },
      {
        "Name": "Vexing Retaliation",
        "Platinum": "12"
      },
      {
        "Name": "Vicious Approach",
        "Platinum": "2"
      },
      {
        "Name": "Vicious Frost",
        "Platinum": "9"
      },
      {
        "Name": "Vicious Spread",
        "Platinum": "6"
      },
      {
        "Name": "Vigilante Armaments",
        "Platinum": "6"
      },
      {
        "Name": "Vigilante Fervor",
        "Platinum": "5"
      },
      {
        "Name": "Vigilante Offense",
        "Platinum": "9"
      },
      {
        "Name": "Vigilante Pursuit",
        "Platinum": "7"
      },
      {
        "Name": "Vigilante Supplies",
        "Platinum": "19"
      },
      {
        "Name": "Vigilante Vigor",
        "Platinum": "3"
      },
      {
        "Name": "Vigor",
        "Platinum": "7"
      },
      {
        "Name": "Vigorous Swap",
        "Platinum": "31"
      },
      {
        "Name": "Vile Acceleration",
        "Platinum": "11"
      },
      {
        "Name": "Vile Precision",
        "Platinum": "3"
      },
      {
        "Name": "Viper Wraith",
        "Platinum": "39"
      },
      {
        "Name": "Viral Quills",
        "Platinum": "37"
      },
      {
        "Name": "Virtuos Forge",
        "Platinum": "33"
      },
      {
        "Name": "Virtuos Fury",
        "Platinum": "20"
      },
      {
        "Name": "Virtuos Ghost",
        "Platinum": "21"
      },
      {
        "Name": "Virtuos Null",
        "Platinum": "18"
      },
      {
        "Name": "Virtuos Shadow",
        "Platinum": "12"
      },
      {
        "Name": "Virtuos Spike",
        "Platinum": "50"
      },
      {
        "Name": "Virtuos Strike",
        "Platinum": "19"
      },
      {
        "Name": "Virtuos Surge",
        "Platinum": "64"
      },
      {
        "Name": "Virtuos Tempo",
        "Platinum": "16"
      },
      {
        "Name": "Virtuos Trojan",
        "Platinum": "76"
      },
      {
        "Name": "Virulent Scourge",
        "Platinum": "5"
      },
      {
        "Name": "Vital Sense",
        "Platinum": "4"
      },
      {
        "Name": "Vital Systems Bypass",
        "Platinum": "11"
      },
      {
        "Name": "Vitality",
        "Platinum": "34"
      },
      {
        "Name": "Vitreospina (Large)",
        "Platinum": "0"
      },
      {
        "Name": "Vitreospina (Medium)",
        "Platinum": "3"
      },
      {
        "Name": "Vitreospina (Small)",
        "Platinum": "0"
      },
      {
        "Name": "Void Cloak",
        "Platinum": "5"
      },
      {
        "Name": "Void Hole",
        "Platinum": "5"
      },
      {
        "Name": "Volatile Parasite",
        "Platinum": "21"
      },
      {
        "Name": "Volatile Quick Return",
        "Platinum": "6"
      },
      {
        "Name": "Volatile Rebound",
        "Platinum": "36"
      },
      {
        "Name": "Volcanic Edge",
        "Platinum": "5"
      },
      {
        "Name": "Volt Prime Blueprint",
        "Platinum": "62"
      },
      {
        "Name": "Volt Prime Chassis",
        "Platinum": "14"
      },
      {
        "Name": "Volt Prime Neuroptics",
        "Platinum": "46"
      },
      {
        "Name": "Volt Prime Set",
        "Platinum": "178"
      },
      {
        "Name": "Volt Prime Systems",
        "Platinum": "38"
      },
      {
        "Name": "Voltage Sequence",
        "Platinum": "12"
      },
      {
        "Name": "Voltaic Lance",
        "Platinum": "0"
      },
      {
        "Name": "Voltaic Strike",
        "Platinum": "52"
      },
      {
        "Name": "VOME",
        "Platinum": "9"
      },
      {
        "Name": "Vulcan Blitz",
        "Platinum": "7"
      },
      {
        "Name": "Vulkar Wraith",
        "Platinum": "78"
      },
      {
        "Name": "Vulpine Mask",
        "Platinum": "2"
      },
      {
        "Name": "War Blade",
        "Platinum": "31"
      },
      {
        "Name": "War Hilt",
        "Platinum": "9"
      },
      {
        "Name": "Ward Recovery",
        "Platinum": "0"
      },
      {
        "Name": "Warding Thurible",
        "Platinum": "14"
      },
      {
        "Name": "Warhead",
        "Platinum": "7"
      },
      {
        "Name": "Warm Coat",
        "Platinum": "49800"
      },
      {
        "Name": "Warrior",
        "Platinum": "0"
      },
      {
        "Name": "Weeping Wounds",
        "Platinum": "28"
      },
      {
        "Name": "Whiplash Mine",
        "Platinum": "0"
      },
      {
        "Name": "Whirlwind",
        "Platinum": "5"
      },
      {
        "Name": "Wild Frenzy",
        "Platinum": "17"
      },
      {
        "Name": "Wildfire",
        "Platinum": "2"
      },
      {
        "Name": "Winds of Purity",
        "Platinum": "14"
      },
      {
        "Name": "Winged Cyclone",
        "Platinum": "0"
      },
      {
        "Name": "Winged Force",
        "Platinum": "0"
      },
      {
        "Name": "Winged Steel",
        "Platinum": "0"
      },
      {
        "Name": "Winged Storm",
        "Platinum": "9"
      },
      {
        "Name": "Wise Razor",
        "Platinum": "10"
      },
      {
        "Name": "Wolf Sledge Blueprint",
        "Platinum": "80"
      },
      {
        "Name": "Wolf Sledge Handle",
        "Platinum": "4"
      },
      {
        "Name": "Wolf Sledge Head",
        "Platinum": "4"
      },
      {
        "Name": "Wolf Sledge Motor",
        "Platinum": "80"
      },
      {
        "Name": "Wolf Sledge Set",
        "Platinum": "184"
      },
      {
        "Name": "Wukong Prime Blueprint",
        "Platinum": "20"
      },
      {
        "Name": "Wukong Prime Chassis",
        "Platinum": "2"
      },
      {
        "Name": "Wukong Prime Neuroptics",
        "Platinum": "3"
      },
      {
        "Name": "Wukong Prime Set",
        "Platinum": "34"
      },
      {
        "Name": "Wukong Prime Systems",
        "Platinum": "4"
      },
      {
        "Name": "Wyrm Prime Blueprint",
        "Platinum": "9"
      },
      {
        "Name": "Wyrm Prime Carapace",
        "Platinum": "33"
      },
      {
        "Name": "Wyrm Prime Cerebrum",
        "Platinum": "19"
      },
      {
        "Name": "Wyrm Prime Set",
        "Platinum": "134"
      },
      {
        "Name": "Wyrm Prime Systems",
        "Platinum": "51"
      },
      {
        "Name": "XATA",
        "Platinum": "9"
      },
      {
        "Name": "Xiphos Avionics",
        "Platinum": "23"
      },
      {
        "Name": "Xiphos Engines",
        "Platinum": "36"
      },
      {
        "Name": "Xiphos Fuselage",
        "Platinum": "82"
      },
      {
        "Name": "Xiphos Set",
        "Platinum": "110"
      },
      {
        "Name": "Zakti Prime Barrel",
        "Platinum": "6"
      },
      {
        "Name": "Zakti Prime Blueprint",
        "Platinum": "29"
      },
      {
        "Name": "Zakti Prime Receiver",
        "Platinum": "4"
      },
      {
        "Name": "Zakti Prime Set",
        "Platinum": "55"
      },
      {
        "Name": "Zambuka Ayatan Sculpture",
        "Platinum": "31"
      },
      {
        "Name": "Zaw Riven Mod (Veiled)",
        "Platinum": "9"
      },
      {
        "Name": "Zazvat-Kar",
        "Platinum": "19"
      },
      {
        "Name": "Zenurik Lens",
        "Platinum": "7"
      },
      {
        "Name": "Zephyr Prime Blueprint",
        "Platinum": "26"
      },
      {
        "Name": "Zephyr Prime Chassis",
        "Platinum": "4"
      },
      {
        "Name": "Zephyr Prime Neuroptics",
        "Platinum": "3"
      },
      {
        "Name": "Zephyr Prime Set",
        "Platinum": "74"
      },
      {
        "Name": "Zephyr Prime Systems",
        "Platinum": "28"
      },
      {
        "Name": "Zhuge Prime Barrel",
        "Platinum": "9"
      },
      {
        "Name": "Zhuge Prime Blueprint",
        "Platinum": "2"
      },
      {
        "Name": "Zhuge Prime Grip",
        "Platinum": "2"
      },
      {
        "Name": "Zhuge Prime Receiver",
        "Platinum": "6"
      },
      {
        "Name": "Zhuge Prime Set",
        "Platinum": "20"
      },
      {
        "Name": "Zhuge Prime String",
        "Platinum": "5"
      },
      {
        "Name": "Zodiac Shred",
        "Platinum": "8"
      },
      {
        "Name": "Zylok",
        "Platinum": "67"
      }
    ];
  }

}
