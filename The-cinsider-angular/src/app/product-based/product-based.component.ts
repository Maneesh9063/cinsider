import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CompanyService } from '../global.service';

@Component({
  selector: 'app-product-based',
  templateUrl: './product-based.component.html',
  styleUrls: ['./product-based.component.css']
})
export class ProductBasedComponent implements OnInit {
  sortby: string = 'ranking';
  // productArray: {_id:Obje,name:string, imageLink:string}[]
  productArray: any
  _id: any;
  constructor(private http: HttpClient, private global: CompanyService) { }
  ngOnInit(): void {
    const purl = 'http://localhost:3000/pBased';
    this.http.get(purl).subscribe((res)=>{
      this.productArray = res;
      // console.log(this.productArray[0]._id)
      // this.compute();
    })
  }
  onSelected(status: string){
    this.sortby = status;
    const purl = 'http://localhost:3000/pBased/'+this.sortby;
    this.http.get(purl).subscribe((res)=>{
    this.productArray = res;
    this.global.onSortBy(status);
      // console.log(this.productArray[0]._id)
      // this.compute();
    })
  }
  onSelectedProduct(_id: any){
    this.global.change(_id);
    // console.log("SELECTED")
  }

}
