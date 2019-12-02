import { Component, OnInit, Input } from '@angular/core';
import { NavigationDisplayService } from '../services/navigation-display.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  title = 'Hearthstone Catalog';
  logo = 'assets/logo.png';
  isCollapsed = true;

  // @Input()
  navbarDisplay: boolean;
  // navbarDisplay: Observable<boolean>;

  constructor(private navigationDisplayService: NavigationDisplayService) {}

  ngOnInit() {
    this.navigationDisplayService.onChangeDisplay().subscribe(isDisplay => {
      this.navbarDisplay = isDisplay;
    });
  }
}
