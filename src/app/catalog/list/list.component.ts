import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CardsService } from '../cards.service';
import { Observable, Subject, BehaviorSubject, merge } from 'rxjs';
import { Card } from '../cards.interface';
import {
  NgForm,
  ReactiveFormsModule,
  FormGroup,
  FormControl,
  Validators
} from '@angular/forms';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  cards$: Observable<Card[]>;
  info$: Observable<{ classes: string[]; sets: string[] }>;
  // query: string;
  filterForm = new FormGroup({
    set: new FormControl('Basic', [Validators.required]),
    classe: new FormControl('Druid', [Validators.required])
  });

  searchForm$: Subject<string>;
  filterForm$: BehaviorSubject<{ set: string; classe: string }>;
  query = '';

  constructor(private cardsService: CardsService) {}

  ngOnInit() {
    // this.cards$ = this.cardsService.getCards('Battlegrounds');
    this.searchForm$ = new Subject();
    this.filterForm$ = new BehaviorSubject({
      set: this.filterForm.get('set').value,
      classe: this.filterForm.get('classe').value
    });
    this.cards$ = merge(
      this.searchForm$.pipe(
        switchMap(query => {
          return this.cardsService.search(query);
        })
      ),
      this.filterForm$.pipe(
        switchMap(query => {
          return this.cardsService.getCards(query.set, query.classe);
        })
      )
    );
    this.info$ = this.cardsService.info();
  }

  submit(myForm: NgForm) {
    // console.log(myForm);

    // console.log(myForm.);
    if (myForm.valid) {
      try {
        this.cards$ = this.cardsService.search(this.query);
      } catch {}
    }
  }

  filter() {
    // this.cards$ = this.cardsService.getCards();
    if (this.filterForm.valid) {
      this.filterForm$.next(this.filterForm.getRawValue());
    }
  }
}
