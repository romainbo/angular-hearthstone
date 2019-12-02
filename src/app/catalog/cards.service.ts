import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, forkJoin } from 'rxjs';
import { Card } from './cards.interface';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CardsService {
  constructor(private httpClient: HttpClient) {}

  get endpoint() {
    return 'https://omgvamp-hearthstone-v1.p.rapidapi.com/';
  }

  get httpOptions(): { headers: HttpHeaders } {
    const headers = new HttpHeaders()
      .set('x-rapidapi-host', 'omgvamp-hearthstone-v1.p.rapidapi.com')
      .set(
        'x-rapidapi-key',
        'd99e92cde6mshffcf37544a876bep14eb15jsn1c1928e0dec3'
      );
    return {
      headers
    };
  }

  getCardById(id) {
    return this.card(id);
  }

  // getCards(setName: string, className?: string) {
  //   return this.set(setName);
  // }

  getCards(setName: string, className: string): Observable<Card[]> {
    return forkJoin([this.set(setName), this.classes(className)]).pipe(
      map(([setsCards, classesCards]) => {
        return this.intersectionCards(setsCards, classesCards);
      })
    );
  }

  search(name): Observable<Card[]> {
    return this.httpClient
      .get(`${this.endpoint}cards/search/${name}`, this.httpOptions)
      .pipe(map((cards: Card[]) => cards));
  }

  info(): Observable<{ classes: string[]; sets: string[] }> {
    return this.httpClient
      .get(`${this.endpoint}info`, this.httpOptions)
      .pipe(map((cards: { classes: string[]; sets: string[] }) => cards));
  }

  private card(id: String): Observable<Card> {
    return this.httpClient
      .get(`${this.endpoint}cards/${id}`, this.httpOptions)
      .pipe(map((card: Card[]) => card[0]));
  }

  private set(name): Observable<Card[]> {
    return this.httpClient
      .get(`${this.endpoint}cards/sets/${name}`, this.httpOptions)
      .pipe(map((cards: Card[]) => cards));
  }

  private classes(name): Observable<Card[]> {
    return this.httpClient
      .get(`${this.endpoint}cards/classes/${name}`, this.httpOptions)
      .pipe(map((cards: Card[]) => cards));
  }

  private intersectionCards(arrayCard1, arrayCard2) {
    return arrayCard1.filter(card1 => {
      return arrayCard2.find(card2 => {
        return card2.cardId === card1.cardId;
      });
    });
  }

  // get XXXX(setName, className) {}
}
