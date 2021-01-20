import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CompanyService } from '../global.service';

@Component({
  selector: 'app-service-based',
  templateUrl: './service-based.component.html',
  styleUrls: ['./service-based.component.css']
})
export class ServiceBasedComponent implements OnInit {
  sortby: string = this.global.status;
  serviceArray: any
  constructor(private http:HttpClient, private global: CompanyService) { }

  ngOnInit(): void {
    console.log(this.sortby)
    const url = "http://localhost:3000/sBased/"+this.sortby;
    console.log(url);
    this.onSort(url);
  }
  onSort(url: string){
    this.http.get(url)
    .subscribe((res)=>{
      this.serviceArray=res;
    });
  }
  // onSelected(status: string){
  //   this.sortby = status;
  //   const purl = 'http://localhost:3000/pBased/'+this.sortby;
  //   this.http.get(purl).subscribe((res)=>{
  //   this.serviceArray = res;
  //     // console.log(this.productArray[0]._id)
  //     // this.compute();
  //   })
  // }
  onSelected(status: string){
    this.sortby = status;
    const url = 'http://localhost:3000/sBased/'+this.sortby;
    this.onSort(url)
    this.global.onSortBy(status);
  }
  onSelectedService(_id: any){
    this.global.change(_id)
  }
}
