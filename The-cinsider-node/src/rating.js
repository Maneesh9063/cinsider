const fetch = require('node-fetch')
const cheerio = require('cheerio')
const cors = require('cors')
const express = require('express')
const mongoose = require('mongoose')

const router = express.Router()

// const conn = require('./mogoose')

const app = express()
app.use(cors())

router.get('/rating/:id', async(req,res)=>{
    try{
        const name = req.params.id
        var ratingObject = {};
        const url = 'https://www.indeed.co.in/cmp/'+name+'/reviews?fcountry=IN&sort=rating_desc';
        fetch(url)
            .then(res=>res.text())
            .then(html=>{
                // console.log('happy')
                const $ = cheerio.load(html);
                $('.cmp-TopicFilterList-item').each((i,ele)=>{
                    const link = 'https://www.indeed.co.in/cmp/Virtusa/reviews?'+$(ele).children('a').attr('href');
                    const name = $(ele).children('a').children('.cmp-TopicFilter-name').text();
                    const rating = $(ele).children('a').children('.cmp-TopicFilter-rating').text();
                    ratingObject[name+' - '+rating]=[link];
                    // console.log(link+'  '+name+' '+rating)
                })
                return ratingObject;
            }).then(obj=>{
                // console.log(obj)
                res.send(obj)
            })
        // return res.send(ratingObject);
    }catch(e){
        res.status(500).send(e)
    }
})



// fetch(url)
//     .then(res=>res.text())
//     .then(html=>{
//         const $ = cheerio.load(html);
//         // const site = $('.cmp-TopicFilterList-item');
//         // console.log(site.html());
//         // $('.cmp-TopicFilter-rating').each((i, ele)=>{
//         //     console.log($(ele).text());
//         // })
//         $('.cmp-TopicFilterList-item').each((i,ele)=>{
//             const link = 'https://www.indeed.co.in/cmp/Virtusa/reviews?'+$(ele).children('a').attr('href');
//             // const rating = $(ele).children('.cmp-TopicFilter-rating').text();
//             // const name = $(ele).children('.cmp-TopicFilter-name').text();
//             const name = $(ele).children('a').children('.cmp-TopicFilter-name').text();
//             const rating = $(ele).children('a').children('.cmp-TopicFilter-rating').text();
//             console.log(link);
//             console.log(name);
//             console.log(rating);
//         })
//         // const span = site.find('span');
//         // console.log(span.text());
//     })
//     .catch(err=>console.log(err));

module.exports = router