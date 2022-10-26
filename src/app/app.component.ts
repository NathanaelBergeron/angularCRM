import { Component } from '@angular/core';

@Component({
  selector: 'crm-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = "angularCRM";
  message = "C'est Rouge";
  maClass = 'textRed';
  pommes= ['Granny', 'Golden', 'Gala', 'Pink Lady', 'Canada', 'Belchard', 'Fuji', 'Red Delicious', 'Jazz'];

  changeMessage(): void {
    switch(this.message) {
      case "C'est Rouge": {
        this.message= "C'est Jaune";
        this.maClass = 'textYellow';
        break;
      }
      case "C'est Jaune": {
        this.message= "C'est Vert";
        this.maClass = 'textGreen';
        break;
      }
      case "C'est Vert": {
        this.message= "C'est Rouge";
        this.maClass = 'textRed';
        break;
      }
    }

  }
}
