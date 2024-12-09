import { Component } from '@angular/core';
import { Person } from '../models/person';
import { OnInit } from '@angular/core';
import { PersonService } from '../services/persons.service';
import { CommonModule } from '@angular/common';
import { CardPersonsComponent } from './card-persons/card-persons.component';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, CardPersonsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
allPersons : Person[] = []
allInfo : any[] = []
constructor(readonly personService : PersonService){}
ngOnInit(): void {
  this.personService.getPersons().subscribe((value)=>{
    if(value.items){
   
      this.allPersons=value.items;
      console.log(this.allPersons)
      this.allPersons=value;
    }
  })
}

}
