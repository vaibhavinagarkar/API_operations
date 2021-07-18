import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms'
import { RestServiceService } from '../rest-service.service'

@Component({
  selector: 'app-insert',
  templateUrl: './insert.component.html',
  styleUrls: ['./insert.component.css']
})
export class InsertComponent implements OnInit {

  constructor(private rest: RestServiceService) { }
  addValues = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    address: new FormControl(''),
    contact: new FormControl(''),
  })
  ngOnInit(): void {
  }
  collectValues() {
    // console.warn(this.addValues.value);
    this.rest.addData(this.addValues.value).subscribe((i : any) => {
    console.warn(i)
    })
  }

}
