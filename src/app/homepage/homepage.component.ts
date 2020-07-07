import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {OrganisationService} from 'src/app/Service/organisation.service';
import {IOrganisationInfo} from 'src/app/Interface/IOrganisationInfo'
import { ThrowStmt } from '@angular/compiler';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NULL_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})


export class HomepageComponent implements OnInit {
  details : IOrganisationInfo;
  msg : string;
  org: string;
  pass: string;
  flag : boolean = true;
  reposinfo : string;
  error : boolean = false;

 constructor(private OrgService: OrganisationService ,private router: Router,private modalService: NgbModal) { }

  ngOnInit(): void {
  }

onSubmit(orgname:string,password:string){
  this.org = orgname;
  this.pass = password;
  this.OrgService.getDetails(this.org,this.pass).subscribe(result=>{this.details=result as IOrganisationInfo;
    this.flag =  false;
    console.log(this.details);
  },  
  err => {
    console.log("Error in authentication : " + JSON.stringify(err));
    if (err.status == 401 || err.status == 404) {
      this.error = true;
      this.msg = "Invalid Organisation Name or Wrong Access token"
    }
  },
  );
}
}


