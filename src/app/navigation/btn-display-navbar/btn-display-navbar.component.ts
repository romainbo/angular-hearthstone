import { Component, OnInit, Output, EventEmitter, Input } from "@angular/core";
import { NavigationDisplayService } from "../services/navigation-display.service";

@Component({
  selector: "app-btn-display-navbar",
  templateUrl: "./btn-display-navbar.component.html",
  styleUrls: ["./btn-display-navbar.component.scss"]
})
export class BtnDisplayNavbarComponent implements OnInit {
  constructor(private navigationDisplayService: NavigationDisplayService) {}
  // @Output()
  // navbarDisplayChange: EventEmitter<boolean> = new EventEmitter<boolean>();

  // @Input()
  // navbarDisplay: boolean;

  toggleDisplay() {
    // this.navbarDisplay = !this.navbarDisplay;
    // this.navbarDisplayChange.emit(this.navbarDisplay);
    this.navigationDisplayService.toggleDisplay();
  }

  ngOnInit() {}
}
