import { Component, OnInit } from '@angular/core';
import { FormBuilder,Validators} from '@angular/forms';
import { numberValidate } from '../formval';
@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.scss']
})
export class AddressComponent implements OnInit {

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }
  formshop=this.fb.group({
    name:['',Validators.required],
    email:['',[Validators.email,Validators.required]],
    street:['',Validators.required],
    city:['',Validators.required],
    zip:['',[Validators.required,numberValidate()]],
    state:['',Validators.required],
    number:['',[Validators.required,numberValidate()]]
  })

}
