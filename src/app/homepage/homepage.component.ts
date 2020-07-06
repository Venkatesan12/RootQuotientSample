import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {OrganisationService} from 'src/app/Service/organisation.service';
import {IOrganisationInfo} from 'src/app/Interface/IOrganisationInfo'
import { ThrowStmt } from '@angular/compiler';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';

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
  {{debugger}}

  this.OrgService.getDetails(this.org,this.pass).subscribe(result=>{this.details=result as IOrganisationInfo;
    this.flag =  false;

    console.log(this.details) ;
  }
  )
}

open() {
  //const modalRef = this.modalService.open();
 // modalRef.componentInstance.name = 'World';
}
}


