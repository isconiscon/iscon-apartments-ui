import { UserService } from './../../../services/user.service';
import { SharedService } from './../../../services/shared.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  loading = false;
  submitted = false;
  adminReturnUrl: string;
  userReturnUrl: string;
  body: any;
  error = '';
  loginUserData: any;
  userRole: string;
  constructor(
    private authService: AuthService,
    private router: Router,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private userService: UserService,
    private sharedService: SharedService
  ) {
    // redirect to home if already logged in
    if (this.authService.currentUserValue) {
      this.router.navigate(['/']);
    }
  }

  ngOnInit(): void {
    this.body = document.getElementsByTagName('body')[0];

    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
    // get return url from route parameters or default to '/'
    // this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    this.adminReturnUrl = '/admin/dashboard';
    this.userReturnUrl = '/home';
  }
  get f() {
    return this.loginForm.controls;
  }
  onSubmit() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.loginForm.invalid) {
      return;
    }
    this.loading = true;

    this.authService
      .login(this.f.username.value, this.f.password.value)
      .pipe(first())
      .subscribe(
        (data) => {
          this.userRole = localStorage.getItem('currentUserRole') || '';
          console.log('User Role in login comp == ', this.userRole);
          if (this.userRole === 'Admin') {
            console.log('Im admin');
            this.router.navigate([this.adminReturnUrl]);
          } else {
            console.log('Im not admin');
            this.router.navigate([this.userReturnUrl]);
          }
          this.body.classList.add('body-landing');
          // this.router.navigate([this.adminReturnUrl]);
        },
        (error) => {
          console.log('Error == ', error);
          this.error = error.error.message;
          this.loading = false;
        }
      );
  }
}
