import { Component, Input } from '@angular/core';
import { Person } from '../../models/person';
@Component({
  selector: 'app-card-persons',
  standalone: true,
  imports: [],
  templateUrl: './card-persons.component.html',
  styleUrl: './card-persons.component.css'
})
export class CardPersonsComponent {
@Input() personThis : Person = {
  id: 1,
  name: "",
  ki:"",
  maxKi: "",
  race: "",
  gender: "",
  description: "",
  image: "",
  affiliation: "",
  deletedAt: ""
}
}
