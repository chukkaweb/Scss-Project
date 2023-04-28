import { Component, OnInit } from '@angular/core';
import { BaseUrl } from './consts/base-urls';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  homeUrl:BaseUrl = BaseUrl.HOME; //BaseUrl.HOME why dont we use directly this // cross check
  title = 'scss-project';
  ngOnInit(): void {
    console.log(BaseUrl.HOME); 
  }
}
