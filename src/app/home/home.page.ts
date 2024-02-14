import { Component } from '@angular/core';
import { Firestore, doc, setDoc } from '@angular/fire/firestore';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {
  rutaDeTABLA: any;
  ledStatus: boolean=false;
  ledColor:boolean=false;
  ledColor2:boolean=false;
  ledColor3:boolean=false;
  ledColor4:boolean=false;

  constructor(private db:Firestore) {
    
  }

  
 // async apagar() {
  //  this.rutaDeTABLA = doc(this.db,'controlLED','LED1');//RUTA DE TABLA EN LA BD
  //  await setDoc(this.rutaDeTABLA, { encender: false });//CAMBIA EL ATRIBUTO DE LA TABLA}
 //async encender() {
  //this.rutaDeTABLA = doc(this.db,'controlLED','LED1');//RUTA DE TABLA EN LA BD
  //await setDoc(this.rutaDeTABLA, { encender: true });//CAMBIA EL ATRIBUTO DE LA TABLA }

//async toogleState() {
//  this.ledStatus=!this.ledStatus;
 // this.rutaDeTABLA = doc(this.db,'controlLED','LED1');//RUTA DE TABLA EN LA BD
  //await setDoc(this.rutaDeTABLA, { encender: true });//CAMBIA EL ATRIBUTO DE LA TABLA
 // console.log(this.ledStatus)}

//async colors() {
 // this.ledColor=!this.ledColor;
 // this.rutaDeTABLA = doc(this.db,'controlLED','LED1');//RUTA DE TABLA EN LA BD
  //await setDoc(this.rutaDeTABLA, { encender: true });//CAMBIA EL ATRIBUTO DE LA TABLA
 // console.log(this.ledColor)}

  async apagar() {
    this.rutaDeTABLA = doc(this.db,'controlLED','LED1');//RUTA DE TABLA EN LA BD
    await setDoc(this.rutaDeTABLA, { encender: false });//CAMBIA EL ATRIBUTO DE LA TABLA
}
async encender() {
  this.rutaDeTABLA = doc(this.db,'controlLED','LED1');//RUTA DE TABLA EN LA BD
  await setDoc(this.rutaDeTABLA, { encender: true });//CAMBIA EL ATRIBUTO DE LA TABLA
}

async toogleState() {
  this.ledStatus=!this.ledStatus;
 // this.rutaDeTABLA = doc(this.db,'controlLED','LED1');//RUTA DE TABLA EN LA BD
  //await setDoc(this.rutaDeTABLA, { encender: true });//CAMBIA EL ATRIBUTO DE LA TABLA
  console.log(this.ledStatus)
}

async colors() {
  this.ledColor = !this.ledColor;
  this.rutaDeTABLA = doc(this.db, 'controlLED', 'LED1'); // RUTA DE TABLA EN LA BD
  
  // Establece el valor de 'encender' en la base de datos según el valor actual de ledColor
  await setDoc(this.rutaDeTABLA, { encender: this.ledColor });
  
  // Agrega un mensaje de registro para mostrar el estado actual de encendido
  console.log('Estado de encendido:', this.ledColor);
}

async color2() {
  this.ledColor2 = !this.ledColor2;
  this.rutaDeTABLA = doc(this.db, 'controlLED', 'Led2'); // RUTA DE TABLA EN LA BD
  await setDoc(this.rutaDeTABLA, { estado: this.ledColor2 });
  console.log('Estado de encendido:', this.ledColor2);
}

async color3() {
  this.ledColor3 = !this.ledColor3;
  this.rutaDeTABLA = doc(this.db, 'controlLED', 'led3'); // RUTA DE TABLA EN LA BD
  await setDoc(this.rutaDeTABLA, { estado: this.ledColor3 });
  console.log('Estado de encendido:', this.ledColor3);
}

async color4() {
  this.ledColor4 = !this.ledColor4;
  this.rutaDeTABLA = doc(this.db, 'controlLED', 'led4'); // RUTA DE TABLA EN LA BD
  await setDoc(this.rutaDeTABLA, { estado: this.ledColor4 });
  console.log('Estado de encendido:', this.ledColor4);
}
}

