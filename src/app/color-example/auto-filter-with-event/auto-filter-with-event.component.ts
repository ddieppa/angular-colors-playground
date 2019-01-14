import { Component, OnInit } from '@angular/core';
import { Icolor } from 'src/app/model/icolor';
import { ColorService } from 'src/app/service/color.service';

@Component({
  selector: 'app-auto-filter-with-event',
  templateUrl: './auto-filter-with-event.component.html',
  styleUrls: ['./auto-filter-with-event.component.css']
})
export class AutoFilterWithEventComponent implements OnInit {
  private colors: Icolor[];
  filterColors: Icolor[];

  constructor(private colorService: ColorService) {}

  ngOnInit(): void {
    this.colors = this.colorService.getcolors();
    this.filterColors = this.colors;
  }

  filterColor(event: string): void {
    this.filterColors = this.colors.filter(a =>
      a.name.toLowerCase().includes(event.toLowerCase())
    );
  }
}
