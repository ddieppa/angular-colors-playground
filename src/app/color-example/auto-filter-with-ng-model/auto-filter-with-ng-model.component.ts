import { Component, OnInit } from '@angular/core';
import { Icolor } from 'src/app/model/icolor';
import { ColorService } from 'src/app/service/color.service';

@Component({
  selector: 'app-auto-filter-with-ng-model',
  templateUrl: './auto-filter-with-ng-model.component.html',
  styleUrls: ['./auto-filter-with-ng-model.component.css']
})
export class AutoFilterWithNgModelComponent implements OnInit {
  private colors: Icolor[];
  filterColors: Icolor[];

  private _colorName: string;

  get colorName(): string {
    return this._colorName;
  }

  set colorName(value: string) {
    this._colorName = value;
    this.searchColorByCriteria(value);
  }

  constructor(private colorService: ColorService) {}

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
