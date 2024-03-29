import { AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { RouterExtensions } from '@nativescript/angular';
import { isAndroid, LoadEventData, Page, WebView } from '@nativescript/core';

declare var android: any;

@Component({
  selector: 'ns-current-challenge',
  templateUrl: './current-challenge.component.html',
  styleUrls: ['./current-challenge.component.css']
})
export class CurrentChallengeComponent implements OnInit, AfterViewInit {
  @Input() challengeTitle: string[];
  @ViewChild('myWebView') myWebViewRef: ElementRef;

  constructor(
    private page: Page,
    private router: RouterExtensions
  ){}

  ngOnInit(): void {

  }

  ngAfterViewInit(): void {
    let webView = <WebView>this.myWebViewRef.nativeElement;
    webView.on(WebView.loadFinishedEvent, (args: LoadEventData) => {
      console.log("Url Loaded = ", args.url)
    })
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
