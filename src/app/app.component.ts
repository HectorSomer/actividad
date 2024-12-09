import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { CardPersonsComponent } from "../home/home/card-persons/card-persons.component";
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CardPersonsComponent, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'actividad';
}
