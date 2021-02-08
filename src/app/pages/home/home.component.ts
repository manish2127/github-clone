import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { GithubService } from 'src/app/services/github.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  user=null;
  error=null;
  userName:string;

  constructor(private ref:ChangeDetectorRef,
    private githubservice:GithubService) { }

    handleFindUser(){
      this.githubservice.getUserDetails(this.userName).subscribe(
        (user)=>{
          this.user=user;
          this.error=null;
          this.ref.detectChanges();
        },
        (err)=>{
          this.user=null;
          this.error='No User Found';
          this.ref.detectChanges();
        }
      )
    }

  ngOnInit(): void {
  }

}
