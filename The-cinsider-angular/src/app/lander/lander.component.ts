import { Component, OnInit } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { CompanyService } from '../global.service';

@Component({
    selector: 'app-lander',
    templateUrl: './lander.component.html',
    styleUrls: ['./lander.component.css']
})
export class LanderComponent implements OnInit{
    constructor( private http: HttpClient, private global: CompanyService){}
    companyArray: any
    ngOnInit(){
        this.http.get('http://localhost:3000/lander')
            .subscribe(res=>{
                this.companyArray = res;
            })
    }
    onSelectedCompany(id: any){
        this.global.change(id);
    }
    
}