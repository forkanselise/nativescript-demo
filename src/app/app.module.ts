import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core'
import { NativeScriptFormsModule, NativeScriptModule } from '@nativescript/angular'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { ItemsComponent } from './item/items.component'
import { ItemDetailComponent } from './item/item-detail.component'
import { StackComponent } from './layouts/stack/stack.component'
import { FlexboxComponent } from './layouts/flexbox/flexbox.component'
import { GridComponent } from './layouts/grid/grid.component'
import { AbsoluteComponent } from './layouts/absolute/absolute.component'


@NgModule({
  bootstrap: [AppComponent],
  imports: [NativeScriptModule, AppRoutingModule, NativeScriptFormsModule],
  declarations: [AppComponent, ItemsComponent, ItemDetailComponent, StackComponent, FlexboxComponent, GridComponent, AbsoluteComponent],
  providers: [],
  schemas: [NO_ERRORS_SCHEMA],
})
export class AppModule {}
