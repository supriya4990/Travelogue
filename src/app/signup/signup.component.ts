import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { TravelougueService } from '../travelougue.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['../login/login.component.css']
})
export class SignupComponent implements OnInit {

  signupForm;
  submitted;
  public errorMessage : string;
  constructor(private fb: FormBuilder, private _travelougueService: TravelougueService, private router: Router) {
    this.signupForm = fb.group({
      username: ['', [Validators.required, Validators.maxLength(20)]],
      password: ['', Validators.required],
      email: ['', Validators.required],
      description: ['', Validators.required]
    });
  }

  //Getting the control of form fields having formControlName
  get f() {
    return this.signupForm.controls;
  }

  register() { alert("Heyyy");
    this.submitted = true;

    if (this.signupForm.invalid) {
      return;
    }

    this._travelougueService.saveUserDetails(JSON.stringify(this.signupForm.value))
      .subscribe(
        data => {
          if (data) {
            //Redirect to listing page after Successfull login.
            this.router.navigate(['/listing']);
          } else {
            this.errorMessage = "Username Or Password does not match.";
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
