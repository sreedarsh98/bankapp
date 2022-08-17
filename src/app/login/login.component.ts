import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
//property/variables
//head="welcome to "// string binding eg
//bank="state bank" // string binding eg
//acc="Account please"  //property binding eg
//database
//acno
acno=""

//password
pswd=""


database:any={
  1000:{acno:1000,unsername:'neer',password:1000,balance:50000},
  1001:{acno:1001,unsername:'Laisha',password:1001,balance:60000},
  1002:{acno:1002,unsername:'vyom',password:1002,balance:70000}


}  

  constructor() { }

  ngOnInit(): void {
  }
  acnochange(event:any){
    this.acno =event.target.value // console il target il value il annh accno store avunnath// this key used for class nte property use cheyyunath
   // console.log(this.acno) 
  }

  pswdchange(event:any){
    this.pswd =event.target.value
   // console.log(event.target.value);
    
  }
  
// user defined function
log(){
  //fetch acno
  var acn =this.acno
  //fetch pswd
   var psd =this.pswd

  let userdetails=this.database     // assign database to userdetails allenkil u should use this.  every where
  if(acn in userdetails){
if(psd==userdetails[acn]['password']){
  alert('log in successfull')
}
else{
  alert('incorrect password')
}
  } 
  else{
    alert ('user doesnot exist')
  }



}

}
