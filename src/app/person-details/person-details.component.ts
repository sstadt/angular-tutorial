
import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PeopleService } from '../people.service';
import { Person } from '../person';

@Component({
  selector: 'app-person-details',
  template: `
    <section *ngIf="person">
      <p>{{person.name}} weighs {{person.weight}}kg and is {{person.height}}cm tall.</p>
    </section>
    <button (click)="gotoPeoplesList()">Back to peoples list</button>
  `,
  styles: []
})

export class PersonDetailsComponent implements OnInit, OnDestroy {
  constructor(private peopleService: PeopleService, private route: ActivatedRoute, private router: Router) {}

  person: Person;
  sub: any;

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      let id = Number.parseInt(params['id']);
      this.person = this.peopleService.get(id);
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  gotoPeoplesList() {
    let link = ['/persons'];
    this.router.navigate(link);
  }
}
