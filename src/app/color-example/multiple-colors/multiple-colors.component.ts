import { Component, OnInit } from '@angular/core';
import { Icolor } from 'src/app/model/icolor';
import { ColorService } from 'src/app/service/color.service';

@Component({
  selector: 'app-multiple-colors',
  templateUrl: './multiple-colors.component.html',
  styleUrls: ['./multiple-colors.component.css']
})
export class MultipleColorsComponent implements OnInit {
  colors: Icolor[];

  constructor(private colorService: ColorService) {}

  ngOnInit(): void {
    this.colors = this.colorService.getcolors();
  }
}
