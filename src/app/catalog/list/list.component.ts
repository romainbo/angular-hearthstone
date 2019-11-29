import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CardsService } from '../cards.service';
import { Observable } from 'rxjs';
import { Card } from '../cards.interface';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  cards$: Observable<Card[]>;
  query: string;
  constructor(private cardsService: CardsService) {}

  ngOnInit() {
    this.cards$ = this.cardsService.getCards('Battlegrounds');
  }

  submit(myForm: NgForm) {
    console.log(this.query);
    console.log(myForm.errors);
  }
}
