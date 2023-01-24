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

  addNewItem(username : string,password : string)
  {

    if(username.length >0 && password.length>0)
      this.newItemEvent.emit(username);
    else
      console.log(" Empty Input !!!!!!!!!!! ");
  }


  ngOnInit(): void {
  }

}
