// Angular.
import { Component } from '@angular/core';

// Modelos.
import { DescriptionCard } from 'src/app/core/models/description-card';



@Component({
  selector: 'app-observables',
  templateUrl: './observables.component.html',
  styleUrls: ['./observables.component.scss']
})
export class ObservablesComponent {

  dataCard: DescriptionCard = {
    imageURL: 'assets/images/rxjs.png',
    isList: true,
    listContent: [
      'Son la fuente de información.',
      'Pueden emitir múltiples valores, solo uno o ninguno.',
      'Pueden emitir errores.',
      'Pueden ser finitos o infinitos.',
      'Pueden ser síncronos o asíncronos.'
    ],
    title: '¿Qué son los observables?'
  };

  cardStyle = {
    'margin-bottom': '1rem',
    'padding-top': '2rem',
    'width': '400px'
  };

  headerStyle = {
    'font-size': '1.25rem',
    'text-align': 'center'
  };

  imageStyle = {
    'display': 'flex',
    'height': '100px',
    'margin': '0 auto',
    'width': '100px'
  };

  js_code: string = `
  import { Observable } from 'rxjs';
  import { DescriptionCard } from '../../core/models/description-card';

  // Esto es un observable que emite valores de tipo string.
  const observable = new Observable<string>(subscriber => {
    // Emite el primer valor.
    subscriber.next('Hola.');

    // El segundo valor...
    subscriber.next('Soy un fucking observable.');

    subscriber.next('Chao.');
    subscriber.complete();

    // Este mensaje no se emitirá 👻.
    subscriber.next('Hola otra vez.');
  });

  // Aquí se observan los valores emitidos.
  observable.subscribe(console.log);
  `
  
  constructor() { }
}
