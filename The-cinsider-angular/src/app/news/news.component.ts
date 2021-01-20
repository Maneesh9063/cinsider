import { Component, OnInit } from "@angular/core";
import { NewsModel } from '../shared/news.model';
import { HttpClient } from '@angular/common/http'

@Component({
    selector: 'app-news',
    templateUrl: './news.component.html',
    styleUrls: ['./news.component.css']
})
export class NewsComponent{
    newsArray: NewsModel[] = []
    title: string
    // description: string
    time: string
    link: string
    newsObject: any
    dict : object = {
        1:"Jan", 2:"Feb", 3:"March", 4:"Apr", 5:"May", 6:"Jun", 7:"Jul", 8:"Aug",
        9:"Sep", 10: "Oct", 11:"Nov", 12:"Dec"
    }
    constructor( private http: HttpClient){
        // this.getData();
    }
    getData(){
        const url = 'https://newsapi.org/v2/everything?qInTitle=(Virtusa)&from=2020-05-31&sortBy=publishedAt&apiKey=0030641664fa4b3ab94cbe76e60e30da'
        this.http.get(url).subscribe((res)=>{
            this.newsObject = res
            this.compute();
        })
    }
    compute(){
        const m = Math.min(5, this.newsObject.articles.length)
        console.log(m);
        for(var i=0; i<m;i++){
            this.title = this.newsObject.articles[i].title
            this.link = this.newsObject.articles[i].url
            // this.description = this.newsObject.articles[i].description
            var t: string[] = (this.newsObject.articles[i].publishedAt.split("T"))[0].split("-")
            this.time = this.dict[parseInt(t[1])]+" "+t[2]+", "+t[0]
            console.log(typeof(this.newsArray))
            this.newsArray.push(new NewsModel(this.title, this.time, this.link))
            // this.newsArray.push(new NewsModel(this.title, this.time, this.description))
        }
        // console.log(this.newsArray)
    }
}