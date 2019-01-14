import { HiddeColumnGetterSetterComponent } from './color-example/hidde-column-getter-setter/hidde-column-getter-setter.component';
import { HideColumnsCheckboxComponent } from './color-example/hide-columns-checkbox/hide-columns-checkbox.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ColorListComponent } from './color-list/color-list.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { MultipleColorsComponent } from './color-example/multiple-colors/multiple-colors.component';
import { AutoFilterWithEventComponent } from './color-example/auto-filter-with-event/auto-filter-with-event.component';
import { AutoFilterWithNgModelComponent } from './color-example/auto-filter-with-ng-model/auto-filter-with-ng-model.component';
import { FilterWithButtonComponent } from './color-example/filter-with-button/filter-with-button.component';

const routes: Routes = [
  { path: 'Color', component: ColorListComponent },
  { path: 'Sample/Multicolor', component: MultipleColorsComponent },
  { path: 'Sample/ButtonFilter', component: FilterWithButtonComponent },
  {
    path: 'Sample/AutoFilterNgModel',
    component: AutoFilterWithNgModelComponent
  },
  { path: 'Sample/ToggleColumn', component: HideColumnsCheckboxComponent },
  {
    path: 'Sample/ToggleColumnGetterSetter',
    component: HiddeColumnGetterSetterComponent
  },
  { path: 'Sample/AutoFilterEvent', component: AutoFilterWithEventComponent },
  { path: 'Welcome', component: WelcomeComponent },
  { path: '', component: WelcomeComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
