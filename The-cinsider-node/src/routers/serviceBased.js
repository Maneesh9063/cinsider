const express = require('express')

const Company = require('../models/company')

const router = express.Router()

router.get('/serviceBased', async(req,res)=>{
    const companies = await Company.find({isProductBased:false})
    try{
        res.send(companies)
    }catch(e){
        res.status(500).send(e)
    }
})


router.get('/sBased', async(req,res)=>{
    try{
        const company = await Company.find({isProductBased:false}, {_id:1,imageLink:1,name:1}, {sort: {ranking: 1}})
        if(!company){
            return res.status(404).send()
        }
        res.send(company)
    }catch(e){
        res.status(500).send(e)
    }
})

router.get('/serviceBased/:id', async(req,res)=>{
    try{
        const company = await Company.findOne({_id:req.params.id})
        if(!company){
            return res.status(404).send()
        }
        res.send(company)
    }catch(e){
        res.status(500).send(e)
    }
})
router.get('/sBased/:id', async(req,res)=>{
    try{
        const sortBy = req.params.id
        var companies;
        console.log(sortBy)
        if(sortBy=='rating'){
            companies = await Company.find({isProductBased:false},{_id:1,imageLink:1,name:1},{sort: {rating: -1}})
            console.log('rating')
            console.log(typeof(companies.rating))
        }else {
            if(sortBy=='ranking'){
                companies = await Company.find({isProductBased:false},{_id:1,imageLink:1,name:1},{sort: {ranking: 1}})
                console.log(companies)
                console.log('ranking')
            }else{
                companies = await Company.find({isProductBased:false},{_id:1,imageLink:1,name:1},{sort: {views: 1}})
                console.log('views')
            }
        }
        if(!companies){
            return res.status(404).send()
        }
        res.send(companies)
        console.log("SENTTT")
    }catch(e){
        res.status(500).send(e)
    }
})
module.exports = router