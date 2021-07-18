import { Component, OnInit } from '@angular/core';
import { RestServiceService } from '../rest-service.service'


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  collection = <any>[];
  constructor(private rest: RestServiceService) { }
  ngOnInit(): void {
    this.rest.getListOfData().subscribe((i) => {
      console.warn(i)
      this.collection = i;
    })
  }
}
