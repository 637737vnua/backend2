const { mutipleMongooseToObject } = require('../../ulti/mongoose');
const Course = require('../models/Course');

class SiteController{

    index(req, res, next){
        Course.find({})
        .then(courses => {
            res.render('home',{ 
                courses: mutipleMongooseToObject(courses)
            });
        })
        .catch(next); 
    }

    search(req, res){
        res.render('search');
    }
    vanhoc(req, res){
        res.render('Van-hoc-nghe-thuat');
    }
    thieunhi(req, res){
        res.render('Thieu-nhi');
    }
    truyen(req, res){
        res.render('Truyen');
    }
    xahoi(req, res){
        res.render('Van-hoa-xa-hoi');
    }
    lienhe(req, res){
        res.render('Lien-he');
    }
    dangky(req, res){
        res.render('dang-ky');
    }
}

module.exports = new SiteController;