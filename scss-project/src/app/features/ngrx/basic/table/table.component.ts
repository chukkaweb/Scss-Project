import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  user:any;
  constructor(private store:Store<any>) {};

  ngOnInit(): void {
    this.store.select('user').subscribe(data=>{
      this.user = data;
      console.log(data)
    })
    
  }
}
