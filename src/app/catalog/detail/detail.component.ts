import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { CardsService } from '../cards.service';
import { Card } from '../cards.interface';
import { switchMap, map, catchError } from 'rxjs/operators';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  card$: Observable<Card[]>;
  id: string;
  // constructor(private route: ActivatedRoute) {}
  constructor(
    private cardsService: CardsService,
    private route: ActivatedRoute,
    private router: Router
  ) {}
  // constructor() {}

  // ngOnInit() {}

  ngOnInit() {
    this.card$ = this.route.params.pipe(
      map(params => params.id),
      switchMap(id => this.cardsService.getCardById(id)),
      catchError(reason => {
        console.log(reason);
        this.router.navigate(['..']);
        return of(null);
      })
    );
    // this.route.paramMap.subscribe(params => {
    //   this.id = params.get('id');
    //   this.card$ = this.cardsService.getCardById(this.id);
    //   console.log(this.card$);
    // });

    // this.card$ = this.cardsService
    //   .getCardById(this.id)
    //   .subscribe(card => (this.card$ = card));
    // console.log(this.card$);
  }
}
