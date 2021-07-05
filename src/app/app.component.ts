import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
 forbiddenUernames=['PINKI' , 'MOdi'];
  genders = ['male', 'female'];
signupForm : FormGroup;
ngOnInit(){
  this.signupForm = new FormGroup({
    userData:new FormGroup({'username' : new FormControl(null , [Validators.required,this.forbiddenNames.bind(this)]),
emailss : new FormControl(null , [Validators.email , Validators.required])}),
hobbies: new FormArray([]),
 gender : new FormControl('male')   
  });
}
onSubmit(){
  console.log(this.signupForm);
}
onAddHobby(){
 const control= new FormControl(null , Validators.required);
  (<FormArray>this.signupForm.get('hobbies')).push(control);
}
forbiddenNames(control:FormControl):{[s:string]:boolean}{
  if(this. forbiddenUernames.indexOf(control.value) !== -1){
  return{'forbiddenitis':true};
  }
 return null;
}
forbiddenEmails(control:FormControl): Promise<any> | Observable<any>{
   const promise = new Promise<any>((resolve , reject)=>{
     setTimeout(()=>{
if(control.value==="test@test.com"){
  resolve({'emailForbidden': true});
}else{
  resolve(null);
}
     },1500);
   });
 return promise;
}
}