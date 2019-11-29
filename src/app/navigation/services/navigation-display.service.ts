import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { distinctUntilChanged } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class NavigationDisplayService {
  private isDisplay$ = new BehaviorSubject(true);

  constructor() {}

  toggleDisplay() {
    console.log("toggleDisplay service");
    this.isDisplay$.next(!this.isDisplay$.value);
    console.log(this.isDisplay$.value);
  }

  onChangeDisplay(): Observable<boolean> {
    return this.isDisplay$.pipe(distinctUntilChanged());
  }
}
