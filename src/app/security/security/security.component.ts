import { Component, OnInit } from '@angular/core';
import { FormBuilder,Validators} from '@angular/forms';
import { ServerService } from 'src/app/server.service';
import { Router } from '@angular/router';
import { upper, passLength,lower,isNumber,symbols } from '../passval';



@Component({
  selector: 'app-security',
  templateUrl: './security.component.html',
  styleUrls: ['./security.component.scss'],
})
export class SecurityComponent implements OnInit {
  
  emailCheck=true;
  USERS:any[]=[];
  information=false;
  
  constructor(private fb: FormBuilder,public server:ServerService,public router:Router) {}
  ngOnInit(): void {
    this.server.getDb().subscribe(val=>this.USERS=val["users"])
  }
  
  LoginForm = this.fb.group({
    email: ['',Validators.email],
    password:['']
  });

  registerForm = this.fb.group({
    name:['',Validators.minLength(4)],
    email: ['',[Validators.email,Validators.required]],
    password:['',{
      validators:[
        passLength(),
        upper(),
        lower(),
        isNumber(),
        symbols()
      ]
    }]
  });

  logIn(email,pass){
    this.USERS.map(user=>{
        if(user.email==email && user.password==pass){
          sessionStorage.setItem("userId", user.id);
          this.router.navigate(['/']);
        }
        else{
          this.information=true;
        }
      })
  }
  genId(): number {
    return this.USERS.length > 0 ? Math.max(...this.USERS.map(user => user.id)) + 1 : 1;
  }
  registery(name,email,pass){
    this.server.addUser({
      id:this.genId(),
      username:name,
      email:email,
      password:pass
    }).subscribe(user=>{
      this.USERS.push(user);
      console.log(this.USERS);
      window.location.reload();
    })
    

  }
  newEmail(email){
    if(this.registerForm.controls['email'].status=='VALID'){
        const index=this.USERS.findIndex(u=>u.email===email);

          if(index>=0){
            
            this.emailCheck=false;
            this.registerForm.controls['email'].setErrors({'incorrect': true});
          }else{
            this.emailCheck=true;
          }
    }
  }

}
