import { Component, OnInit, Input } from '@angular/core';
import { Icolor } from '../model/icolor';
import { ColorService } from '../service/color.service';

@Component({
  templateUrl: './color-list.component.html',
  styleUrls: ['./color-list.component.css']
})
export class ColorListComponent implements OnInit {
  private colors: Icolor[];
  filterColors: Icolor[];

  chkRGBMarked: boolean;
  chkHSLMarked: boolean;
  chkHEXMarked: boolean;

  private _colorName: string;

  get colorName(): string {
    return this._colorName;
  }

  set colorName(value: string) {
    this._colorName = value;
    this.searchColorByCriteria(value);
  }

  constructor(private colorService: ColorService) {
    this.chkHEXMarked = true;
    this.chkRGBMarked = false;
    this.chkHSLMarked = false;
  }

  ngOnInit(): void {
    this.colors = this.colorService.getcolors();
    this.filterColors = this.colors;
  }

  private searchColorByCriteria(searchCriteria: string): void {
    this.filterColors = this.colors.filter(a =>
      a.name.toLowerCase().includes(searchCriteria.toLowerCase())
    );
  }
}
