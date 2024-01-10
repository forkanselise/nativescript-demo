import { Component, Input } from '@angular/core';
import { RouterExtensions } from '@nativescript/angular';
import { isAndroid, Page } from '@nativescript/core';

declare var android: any;

@Component({
  selector: 'ns-current-challenge',
  templateUrl: './current-challenge.component.html',
  styleUrls: ['./current-challenge.component.css']
})
export class CurrentChallengeComponent {
  @Input() challengeTitle: string[];
  constructor(
    private page: Page,
    private router: RouterExtensions
  ){

  }
  onLoadedActionBar() {
    if(isAndroid) {
      const androidToolbar = this.page.actionBar.nativeView;
      const backButton = androidToolbar.getNavigationIcon();
      if(backButton) {
        backButton.setColorFilter(android.graphics.Color.parseColor('#1F1F1F'),(<any>android.graphics).PorterDuff.Mode.SRC_ATOP)
      }
    }
  }

  get canGoBack() {
    return this.router.canGoBack();
  }

  onGoBack() {
    this.router.backToPreviousPage();
  }
}
