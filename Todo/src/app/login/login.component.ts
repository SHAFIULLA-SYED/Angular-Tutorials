import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @Input() item = '';

  @Output() newItemEvent = new EventEmitter<string>();

  constructor() { }

  addNewItem(value : string)
  {
    this.newItemEvent.emit(value);
  }


  ngOnInit(): void {
  }

}
