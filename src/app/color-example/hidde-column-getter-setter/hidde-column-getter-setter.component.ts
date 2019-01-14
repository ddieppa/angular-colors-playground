import { Component, OnInit } from '@angular/core';
import { Icolor } from 'src/app/model/icolor';
import { ColorService } from 'src/app/service/color.service';

@Component({
  // selector: 'app-hide-columns-checkbox',
  templateUrl: './hidde-column-getter-setter.component.html',
  styleUrls: ['./hidde-column-getter-setter.component.css']
})
export class HiddeColumnGetterSetterComponent implements OnInit {
  colors: Icolor[];
  chkRGBMarked: false;
  // private _chkRGBMarked = false;
  // get chkRGBMarked(): boolean {
  //   return this._chkRGBMarked;
  // }
  // set chkRGBMarked(value: boolean) {
  //   this._chkRGBMarked = value;
  // }
  constructor(private colorService: ColorService) {}

  ngOnInit(): void {
    this.colors = this.colorService.getcolors();
  }

  ToggleVisibility(e): void {
    this.chkRGBMarked = e.target.checked;
    console.log(e.target.checked);
  }
}
