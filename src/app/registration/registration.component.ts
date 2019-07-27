import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit{
  registerForm: FormGroup;
  loading = false;
  submitted = false;
  constructor( private formBuilder: FormBuilder)
    { }
    ngOnInit() {
      this.registerForm = this.formBuilder.group({
        userid: ['', Validators.required],
        lastName: ['', Validators.required],
        date_of_birth: ['', Validators.required],
        firstName: ['', Validators.required],
        city: ['', Validators.required],
        state: ['', Validators.required],
        age: ['', Validators.required],
        email:['',Validators.required],
        password: ['', [Validators.required, Validators.minLength(6)]],
        confirmpassword: ['', [Validators.required, Validators.minLength(6)]]
        
    });
        }

        get f() { return this.registerForm.controls; }

        onSubmit() {
            this.submitted = true;
    
            // stop here if form is invalid
            if (this.registerForm.invalid) {
                return;
            }
}
}