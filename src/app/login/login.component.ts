import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { TravelougueService } from '../travelougue.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm;
  submitted;
  public errorMessage : string;
  constructor(private fb: FormBuilder, private _travelougueService: TravelougueService, private router: Router) {
    this.loginForm = fb.group({
      email: ['', [Validators.required, Validators.maxLength(20)]],
      password: ['', Validators.required]
    });
  }

  //Getting the control of form fields having formControlName
  get f() {
    return this.loginForm.controls;
  }

  register() {
    this.submitted = true;

    if (this.loginForm.invalid) {
      return;
    }

    this._travelougueService.checkLoginDetails(JSON.stringify(this.loginForm.value))
      .subscribe(
        data => {
          if (data) {
            //Redirect to listing page after Successfull login.
            this.router.navigate(['/listing']);
          } else {
            this.errorMessage = "Email Or Password does not match.";
          }
        }
        ,
        (err) => {
          alert("Error In Login");
        }
      );
  }
  ngOnInit() {
  }

}
