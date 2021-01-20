import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CompanyService } from '../global.service';

@Component({
  selector: 'app-search-list',
  templateUrl: './search-list.component.html',
  styleUrls: ['./search-list.component.css']
})
export class SearchListComponent implements OnInit {
  sname: string
  searchArray: any
  constructor(private http:HttpClient, private global: CompanyService) { }

  ngOnInit(): void {
    this.sname = this.global.name;
    const surl = 'http://localhost:3000/searchList/'+this.sname;
    this.http.get(surl).subscribe(res=>{
      this.searchArray = res;
      console.log(this.searchArray);
    })
  }

  onSelectedSearch(id: any){
    this.global.change(id);
  }

}
