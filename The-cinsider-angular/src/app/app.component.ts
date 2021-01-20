import { Component } from '@angular/core';
import { CompanyService } from './global.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  host: {
      '(document:click)': 'onClick()'
  }
})
export class AppComponent {
    title = 'cinsider1';
    status: boolean = false;
    name: string
    c: number = 0;
    text: string
    constructor(private global:CompanyService){}
    onBurger(){
        this.c = 1;
        this.status = !this.status;
    }
    onSearch(){
        this.c = 1;
    }
    onClick(){
        this.c++;
        if(this.c!=2){
            this.status = false;
        }else{
            this.c=0;
        }
    }
    onText(){
        this.global.searchName(this.text);
    }
}
