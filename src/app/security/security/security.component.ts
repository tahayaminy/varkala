import { Component, OnInit } from '@angular/core';

interface Register{
  name:string;
  email:string;
  password:string;
}

@Component({
  selector: 'app-security',
  templateUrl: './security.component.html',
  styleUrls: ['./security.component.scss']
})
export class SecurityComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  register:Register={
    name:'Arya',
    email:'010arya010@gmail.com',
    password:'1234'
  };
}
