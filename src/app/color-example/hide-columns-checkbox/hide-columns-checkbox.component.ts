import { Component, OnInit } from '@angular/core';
import { Icolor } from 'src/app/model/icolor';
import { ColorService } from 'src/app/service/color.service';

@Component({
  selector: 'app-hide-columns-checkbox',
  templateUrl: './hide-columns-checkbox.component.html',
  styleUrls: ['./hide-columns-checkbox.component.css']
})
export class HideColumnsCheckboxComponent implements OnInit {
  colors: Icolor[];
  chkRGBMarked: boolean;

  constructor(private colorService: ColorService) {
    this.chkRGBMarked = false;
  }

  ngOnInit(): void {
    this.colors = this.colorService.getcolors();
  }

  ToggleVisibility(e): void {
    this.chkRGBMarked = e.target.checked;
    console.log(e.target.checked);
  }
}
