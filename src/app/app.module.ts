import { HiddeColumnGetterSetterComponent } from './color-example/hidde-column-getter-setter/hidde-column-getter-setter.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ColorListComponent } from './color-list/color-list.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { FormsModule } from '@angular/forms';
import { MultipleColorsComponent } from './color-example/multiple-colors/multiple-colors.component';
import { FilterWithButtonComponent } from './color-example/filter-with-button/filter-with-button.component';
import { AutoFilterWithNgModelComponent } from './color-example/auto-filter-with-ng-model/auto-filter-with-ng-model.component';
import { AutoFilterWithEventComponent } from './color-example/auto-filter-with-event/auto-filter-with-event.component';
import { HideColumnsCheckboxComponent } from './color-example/hide-columns-checkbox/hide-columns-checkbox.component';

@NgModule({
  declarations: [
    AppComponent,
    ColorListComponent,
    WelcomeComponent,
    PageNotFoundComponent,
    MultipleColorsComponent,
    FilterWithButtonComponent,
    AutoFilterWithNgModelComponent,
    AutoFilterWithEventComponent,
    HideColumnsCheckboxComponent,
    HiddeColumnGetterSetterComponent
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
