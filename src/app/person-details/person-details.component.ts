
import { Component, Input } from '@angular/core';
import { Person } from '../person';

@Component({
  selector: 'app-person-details',
  template: `
    <section *ngIf="person">
      <p>{{person.name}} weighs {{person.weight}}kg and is {{person.height}}cm tall.</p>
    </section>
  `,
  styles: []
})

export class PersonDetailsComponent {
  @Input() person: Person;
}
