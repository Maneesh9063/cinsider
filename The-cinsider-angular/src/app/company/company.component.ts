import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {CompanyService } from '../global.service';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {
   _id: any
  company: any
  category: any 
  cname: string = 'V'
  constructor(private http: HttpClient, private global: CompanyService ){ }

  ngOnInit(): void {
    this._id = this.global.getId();
    // console.log(this._id);
    // console.log('*******');
    const url = 'http://localhost:3000/company/'+this._id;
    // console.log(url);
    // console.log('happu');
    this.http.get(url).subscribe((res)=>{
      this.company=res;
      this.cname = this.company.name;
      // this.cname = res.name;
      console.log(this.cname);
      // console.log(this.company.keyPeople);
      this.calRating();
    });
  }
  calRating(){
    const rurl = 'http://localhost:3000/rating/'+this.cname.toLowerCase();
    // console.log(rurl);
    this.http.get(rurl).subscribe(res=>{
      this.category=res;
      // console.log(this.category);
    });
  }
  

}
