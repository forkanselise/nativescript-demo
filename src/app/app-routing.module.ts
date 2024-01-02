import { NgModule } from '@angular/core'
import { Routes } from '@angular/router'
import { NativeScriptRouterModule } from '@nativescript/angular'

import { ItemsComponent } from './item/items.component'
import { ItemDetailComponent } from './item/item-detail.component'
import { StackComponent } from './layouts/stack/stack.component'

const routes: Routes = [
  // { path: '', redirectTo: '/stackLayout', pathMatch: 'full' },
  // { path: 'items', component: ItemsComponent },
  // { path: 'item/:id', component: ItemDetailComponent },
  // { path: 'stackLayout', component: StackComponent}
]

@NgModule({
  imports: [NativeScriptRouterModule.forRoot(routes)],
  exports: [NativeScriptRouterModule],
})
export class AppRoutingModule {}
