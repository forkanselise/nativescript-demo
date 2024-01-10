import { Component, Input } from '@angular/core'
import { Router } from '@angular/router';
import { RouterExtensions } from '@nativescript/angular';

@Component({
  selector: 'ns-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent {
  constructor(
    private router: RouterExtensions
  ){}
  navigateToday() {
    this.router.navigate(['today'], {clearHistory: true});
  }
}
