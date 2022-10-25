import { Component } from '@angular/core';

@Component({
  selector: 'crm-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = "angularCRM";
  message = "C'est cool.";
  maClass = 'textRed';
  fruits= ['Apple', 'Pear', 'Cherry'];

  changeMessage(): void {
    if(this.message === "C'est cool.") {
      this.message= "Ça marche!";
      this.maClass = 'textYellow';
    } else {
      this.message= "C'est cool.";
      this.maClass = 'textRed';
    }

  }
}
