import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm= new FormGroup({
    user: new FormControl('',[Validators.required]),
   password: new FormControl('',[Validators.required,Validators.minLength(5)]),
 })

 get user(){
   return this.loginForm.get('user');
 }

 get password(){
   return this.loginForm.get('password');
 }


 loginData={
   username:'',
   password:''
 }

 constructor(private login:LoginService, private router: Router) { }

 ngOnInit(): void {

 }

 formSubmit(){
   console.log('login button clicked');
   if(this.loginData.username.trim() == '' || this.loginData.username == null)
   {

    alert('Username is required')
     return;
   }


   if(this.loginData.password.trim() == '' || this.loginData.password == null)
   {

     alert('Password is required')

     return;
   }

   //request to server to generate token
   this.login.generateToken(this.loginData).subscribe(
     (data: any)=>{
       console.log('Success');
       console.log(data);

       this.login.loginUser(data.token);

       this.login.getCurrentUser().subscribe(

         (user: any)=>{
           this.login.setUser(user);
           console.log(user);

           //redirect to Admin DashBoard if the role is Admin
                           //Or
           //redirect to Normal User Dashboard if the role is Normal

           if(this.login.getUserRole() == "Admin")
           {
             //admin-dashboard
             //window.location.href="/admin"
             this.router.navigate(['/admin/premium']);
             this.login.loginStatus.next(true);
           }
           else if(this.login.getUserRole() == "Normal")
           {
              //window.location.href="/user-dashboard"
             this.router.navigate(['/user/userpremium']);
             this.login.loginStatus.next(true);

           }
           else
           {
             this.login.logout();

           }


           
         }
       )



     },
     (error)=>{
       alert('Invalid Credentials !! Try Again')
       console.log('Erorr!');
       console.log(error);
       
       
     }
   )
}
 

}