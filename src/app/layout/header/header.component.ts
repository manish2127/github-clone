import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  email=null;
  constructor(
    private auth:AuthService,
    private router:Router,
    private toastr:ToastrService
  ) { 
    auth.getUser().subscribe((user)=>{
      this.email = user?.email;
    });
  }

  ngOnInit(): void {
  }

  async hanleSignOut(){
    try{
      const res = await this.auth.signout();
      this.router.navigateByUrl('/signin');
      this.toastr.info('Login again to continue');
    }
    catch(error){
      this.toastr.error('something is wrong');
    }
  }
}
