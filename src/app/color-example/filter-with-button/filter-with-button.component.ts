import { Component, OnInit } from '@angular/core';
import { Icolor } from 'src/app/model/icolor';
import { ColorService } from 'src/app/service/color.service';

@Component({
  selector: 'app-filter-with-button',
  templateUrl: './filter-with-button.component.html',
  styleUrls: ['./filter-with-button.component.css']
})
export class FilterWithButtonComponent implements OnInit {
  private colors: Icolor[];
  filterColors: Icolor[];

  colorName: string;

  constructor(private colorService: ColorService) {}

  ngOnInit(): void {
    this.colors = this.colorService.getcolors();
    this.filterColors = this.colors;
  }

  searchColor(): void {
    this.filterColors = this.colors.filter(a =>
      a.name.toLowerCase().includes(this.colorName.toLowerCase())
    );
  }
}
