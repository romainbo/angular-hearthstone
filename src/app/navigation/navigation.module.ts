import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NavbarComponent } from "./navbar/navbar.component";
import { BtnDisplayNavbarComponent } from "./btn-display-navbar/btn-display-navbar.component";
import { NavScrollDirective } from "./directives/nav-scroll.directive";
import { NavUserNamePipe } from './pipes/nav-user-name.pipe';

@NgModule({
  declarations: [
    NavbarComponent,
    BtnDisplayNavbarComponent,
    NavScrollDirective,
    NavUserNamePipe
  ],
  exports: [NavbarComponent, BtnDisplayNavbarComponent, NavScrollDirective],
  imports: [CommonModule]
})
export class NavigationModule {}
