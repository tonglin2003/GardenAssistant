import {Component, inject} from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {AuthenticationService} from "../../services/authentication.service";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule, NgbModule, NgIf],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {


  public gfg = true;
  authenticationService = inject(AuthenticationService);
  public loggedIn = !!this.authenticationService.getTokenCookie();

  logout(){
    this.authenticationService.clearTokenInCookie();
    // @ts-ignore
    location.reload();
  }

}
