import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { takeUntil } from 'rxjs';
import { BaseComponent } from 'src/app/core/components/base.component';
import { AuthService } from 'src/app/data/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent extends BaseComponent {
  constructor(
    private authService: AuthService,
    private router: Router
  ) { 
    super();
  }

  ngOnInit(): void {
    this.authService.isAuthenticated$.pipe(
      takeUntil(this.destroyed$)
    ).subscribe(isAuthenticated => {
      if (isAuthenticated) {
        this.router.navigate(['']);
      }
    });
  }
}
